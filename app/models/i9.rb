class I9 < ApplicationRecord

  enum status: [
    :us_citizen,
    :us_national,
    :permanent_resident,
    :authorized_alien_uscis_num,
    :authorized_alien_i94_num,
    :authorized_alien_passport_num
  ]

  belongs_to :employee
  has_many :employment_auth_docs
  has_many :admission_docs
  has_many :expiration_dates

  validates :status, presence: true
end
