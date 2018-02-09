class RegistrationsController < Devise::RegistrationsController
  def new
    super # Default
  end

  def create
    company = Company.find_by(name: params[:company]
    @user = User.new(user_params)
    @user.company = company
  end

  def update
    super # Default
  end
end

private

def user_params
end

def after_sign_up_path_for(resource)
    case resource
    when :user, User
      resource.admin? ? another_path : new_user_registration
    else
      super
    end
  end
