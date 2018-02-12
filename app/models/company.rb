class Company < ApplicationRecord
  validates :name, presence: true, uniqueness: true

  has_many :users
  has_many :employees
end
