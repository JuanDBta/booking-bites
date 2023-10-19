class Restaurant < ApplicationRecord
    has_many :sections
    validates :name, presence: true
    validates :address, presence: true
    validates :city, presence: true
end
