class Api::V1::EmployeesController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
    
  end

  def show
    render json: Employee.find(params[:id])
  end

  def create
    @current_user = current_user
    @company = @current_user.company
    @employee = Employee.new(employee_params)
    @employee.company = @company
    if @employee.save
      render json: { employee_id: @employee.id }
    else
      render json:{ error: @employee.errors.full_messages }, status: :unprocessable_entity
    end
  end

  protected

  def employee_params
    params.require(:employee).permit(
      :last_name,
      :first_name,
      :middle_initial,
      :other_last_names,
      :street_number_name,
      :apt,
      :city,
      :state,
      :zip_code,
      :date_of_birth,
      :email,
      :telephone
    )
  end


end
