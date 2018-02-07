require 'factory_bot'

FactoryBot.define do
  factory :user do
    sequence(:email) {|n| "user#{n}@example.com" }
    first_name 'Jon'
    last_name 'Snow'
    password 'password'
    password_confirmation 'password'
  end

end
