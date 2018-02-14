# require 'rails_helper'
#
# feature 'user signs out', %Q{
#   As an authenticated user
#   I want to sign out
#   So that my identity is forgotten about on the machine I'm using
# } do
#   # Acceptance Criteria
#   # * If I'm signed in, I have an option to sign out
#   # * When I opt to sign out, I get a confirmation that my identity has been
#   #   forgotten on the machine I'm using
#
#   scenario 'authenticated user signs out' do
#     company = Company.create(name: "XYZ")
#     user = User.create(email: "name@xyz.com", password: "223344", first_name: "Y", last_name: "Z", company: company)
#
#     visit new_user_session_path
#
#     fill_in 'Email', with: user.email
#     fill_in 'Password', with: user.password
#
#     click_button 'Sign in'
#
#     expect(page).to have_content('Signed in successfully')
#
#     click_link 'Sign Out'
#     expect(page).to have_content('You need to sign in or sign up before continuing')
#   end
#
#   scenario 'unauthenticated user attempts to sign out' do
#     visit '/'
#     expect(page).to_not have_content('Sign Out')
#   end
# end
