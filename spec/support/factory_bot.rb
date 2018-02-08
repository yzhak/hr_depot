# require 'factory_bot'
#
# FactoryBot.define do
#   factory :user do
#     sequence(:email) {|n| "user#{n}@example.com" }
#     first_name 'Jon'
#     last_name 'Snow'
#     role 'member'
#     password 'password'
#     password_confirmation 'password'
#   end
#
#   factory :company do
#     name 'Launch'
#     association :user, factory: :user
#   end
# end
