class User < ApplicationRecord
  has_many :reservations
  validates :name, presence: true
  validates :username, presence: true
end
