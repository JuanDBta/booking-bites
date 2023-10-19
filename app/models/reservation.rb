class Reservation < ApplicationRecord
  belongs_to :section
  belongs_to :user
  validates :city, presence: true
  validates :date, presence: true
  validates :number_of_person, numericality: { only_integer: true, greater_than: 1 }
end
