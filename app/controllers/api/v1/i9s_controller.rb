class Api::V1::I9sController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
    @employee = Employee.find(params[:employee_id])
    @i9s = @employee.i9s
    render json: @i9s
  end
end
