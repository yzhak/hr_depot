class Api::V1::I9sController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
    employee = Employee.find(params[:employee_id])
    render json: employee.i9s
  end
end
