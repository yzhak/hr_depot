class Api::V1::UsersController < ApplicationController
  skip_before_action :verify_authenticity_token
  protect_from_forgery unless: -> { request.format.json? }

  def index
    if current_user && current_user.role == "admin"
      @users = User.all
      @current_user = current_user
      render json: {users: @users, current_user: @current_user}
    elsif current_user
      @current_user = current_user
      render json: {current_user: @current_user}
    else
      render json: {current_user: nil, message: "You need to sign in before continuing.", status: 401}
  end

end
