require 'rails_helper'

RSpec.describe Reservation, type: :model do
    let(:restaurant) { Restaurant.create(name: 'Restaurant XYZ',address: 'address1', city:'Addis') }
    let(:section) { Section.create(name: 'Main Dining', image: 'section.jpg', description: 'A spacious dining area', capacity: 50, restaurant: restaurant) }
    let(:user) { User.create(name: 'John Doe', username: 'johndoe') }
  
    describe 'associations' do
      it 'belongs to a section' do
        reservation = Reservation.new(city: 'New York', date: Date.today, number_of_person: 2, section: section, user: user)
        expect(reservation.section).to eq(section)
      end
  
      it 'belongs to a user' do
        reservation = Reservation.new(city: 'New York', date: Date.today, number_of_person: 2, section: section, user: user)
        expect(reservation.user).to eq(user)
      end
    end
  describe 'validations' do
    it 'is valid with valid attributes' do
      reservation = Reservation.new(city: 'New York', date: Date.today, number_of_person: 2, section: section, user: user)
      expect(reservation).to be_valid
    end

    it 'is not valid without a city' do
      reservation = Reservation.new(date: Date.today, number_of_person: 2, section: section, user: user)
      expect(reservation).to_not be_valid
      expect(reservation.errors[:city]).to include("can't be blank")
    end

    it 'is not valid without a date' do
      reservation = Reservation.new(city: 'New York', number_of_person: 2, section: section, user: user)
      expect(reservation).to_not be_valid
      expect(reservation.errors[:date]).to include("can't be blank")
    end

    it 'is not valid with a non-integer number of persons' do
      reservation = Reservation.new(city: 'New York', date: Date.today, number_of_person: 2.5, section: section, user: user)
      expect(reservation).to_not be_valid
      expect(reservation.errors[:number_of_person]).to include("must be an integer")
    end

    it 'is not valid with a negative number of persons' do
      reservation = Reservation.new(city: 'New York', date: Date.today, number_of_person: -2, section: section, user: user)
      expect(reservation).to_not be_valid
      expect(reservation.errors[:number_of_person]).to include("must be greater than 0")
    end
  end
end
