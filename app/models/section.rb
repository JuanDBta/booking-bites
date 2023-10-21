class Section < ApplicationRecord
  belongs_to :restaurant
  has_many :reservations, dependent: :destroy
  validates :name, presence: true
  validates :image, presence: true
  validates :description, presence: true
  validates :capacity, numericality: { only_integer: true, greater_than: 1 }
end
