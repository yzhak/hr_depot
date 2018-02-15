class ExpirationDate < ApplicationRecord

  belongs_to :i9

  validates :date, presence: true
end
