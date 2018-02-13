class Employee < ApplicationRecord

  belongs_to :company
  has_many :i9s

  validates :last_name, presence: true
  validates :first_name, presence: true
  validates :street_number_name, presence: true
  validates :city, presence: true
  validates :state, presence: true, length: { maximum: 3 }
  validates :zip_code, presence: true, length: { maximum: 6 }
  validates :date_of_birth, presence: true
end
