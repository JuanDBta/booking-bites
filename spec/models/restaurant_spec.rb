require 'rails_helper'

RSpec.describe Restaurant, type: :model do
  describe 'validations' do
    it 'is valid with valid attributes' do
      restaurant = Restaurant.new(
        name: 'John`s Gril',
        address: 'address1',
        city: 'Addis'
      )
      expect(restaurant).to be_valid
    end

    it 'is not valid without a name' do
      restaurant = Restaurant.new(
        address: 'address1',
        city: 'Addis'
      )
      expect(restaurant).to_not be_valid
      expect(restaurant.errors[:name]).to include("can't be blank")
    end
    it 'is not valid without a address' do
      restaurant = Restaurant.new(
        name: 'John`s Gril',
        city: 'Addis'
      )
      expect(restaurant).to_not be_valid
      expect(restaurant.errors[:address]).to include("can't be blank")
    end
    it 'is not valid without a city' do
      restaurant = Restaurant.new(
        name: 'John`s Gril',
        address: 'address1'
      )
      expect(restaurant).to_not be_valid
      expect(restaurant.errors[:city]).to include("can't be blank")
    end
  end

  describe 'associations' do
    it 'has many sections' do
      expect(Restaurant.reflect_on_association(:sections).macro).to eq(:has_many)
    end
  end
end
