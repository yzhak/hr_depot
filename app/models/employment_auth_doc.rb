class EmploymentAuthDoc < ApplicationRecord

  belongs_to :i9

  validates :title, presence: true
  validates :issuing_authority, presence: true
  validates :number, presence: true
  validates :expiration, presence: true

end
