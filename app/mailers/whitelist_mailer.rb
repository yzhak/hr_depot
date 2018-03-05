class WhitelistMailer < ApplicationMailer
  def new_whitelisted_user(user)
    @user = user

    mail(
      to: user.email,
      subject: "Your HR Depot Sign-in Credentials"
    )
  end
end
