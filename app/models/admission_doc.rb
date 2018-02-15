class AdmissionDoc < ApplicationRecord

  belongs_to :i9

  validates :number, presence: true
end
