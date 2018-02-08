git class Api::V1::CompaniesController < ApplicationController
  before_action :authenticate_user!
  before_action :authorize_user

  def show

    render json: Company.find(params[:id])
  end

  prviate

  def authorize_user
    current_user.company == Company.find(params[:company_id])
    raise ActionController::RoutingError.new("Not Found")
  end
end
