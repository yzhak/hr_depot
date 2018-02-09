class RegistrationsController < Devise::RegistrationsController
  def new
    super # Default
  end

  def create
    # add custom create logic here
    super # temporary
  end

  def update
    super # Default
  end
end
