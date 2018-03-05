class Api::V1::UsersController < ApplicationController
  skip_before_action :verify_authenticity_token
  protect_from_forgery unless: -> { request.format.json? }

  def index
    if current_user
      @current_user = current_user
      @company = @current_user.company
      @employees = @company.employees
      render json: {current_user: @current_user, company: @company, employees: @employees}
    else
      render json: {current_user: nil, message: "You need to sign in before continuing.", status: 401}
    end
  end

  def create
    array_of_companies = Company.where(company_params)
    if array_of_companies.length != 0
      company = array_of_companies.first
    else
      company = Company.new(company_params)
      if !company.save
        render json:{ error: company.errors.full_messages }, status: :unprocessable_entity
      end
    end

    user = User.new(user_params)
    user.company = company
    if user.save
      # send an email to whitelisted user:
      WhitelistMailer.new_whitelisted_user(user).deliver_now
      render json: { company: company, user: user, message: 'The user was successfully whitelisted.' }
    else
      render json:{ error: user.errors.full_messages }, status: :unprocessable_entity
    end
  end

  protected

  def company_params
    params.require(:company).permit(:name)
  end

  def user_params
    params.require(:user).permit(:first_name, :last_name, :email, :password)
  end

end
