require 'rails_helper'

RSpec.describe Section, type: :model do
  describe 'associations' do
    it 'belongs to a restaurant' do
      expect(Section.reflect_on_association(:restaurant).macro).to eq(:belongs_to)
    end

    it 'has many reservations' do
      expect(Section.reflect_on_association(:reservations).macro).to eq(:has_many)
    end
  end

  describe 'validations' do
    it 'is valid with valid attributes' do
        restaurant = Restaurant.create(name: 'Restaurant')
        section = Section.new(
          name: 'Main Dining',
          image: 'section.jpg',
          description: 'A spacious dining area',
          capacity: 50,
          restaurant: restaurant
        )
        expect(section).to be_valid
    end
      

    it 'is not valid without a name' do
      section = Section.new(
        image: 'section.jpg',
        description: 'A spacious dining area',
        capacity: 50
      )
      expect(section).to_not be_valid
      expect(section.errors[:name]).to include("can't be blank")
    end

    it 'is not valid without an image' do
      section = Section.new(
        name: 'Main Dining',
        description: 'A spacious dining area',
        capacity: 50
      )
      expect(section).to_not be_valid
      expect(section.errors[:image]).to include("can't be blank")
    end

    it 'is not valid without a description' do
      section = Section.new(
        name: 'Main Dining',
        image: 'section.jpg',
        capacity: 50
      )
      expect(section).to_not be_valid
      expect(section.errors[:description]).to include("can't be blank")
    end

    it 'is not valid without a capacity' do
        section = Section.new(
          name: 'Main Dining',
          image: 'section.jpg',
          description: 'A spacious dining area'
        )
        section.valid?
        expect(section.errors[:capacity]).to include("is not a number")
      end      
      

    it 'is not valid with a non-integer capacity' do
      section = Section.new(
        name: 'Main Dining',
        image: 'section.jpg',
        description: 'A spacious dining area',
        capacity: 'abc'
      )
      expect(section).to_not be_valid
      expect(section.errors[:capacity]).to include("is not a number")
    end

    it 'is not valid with a capacity less than or equal to 0' do
      section = Section.new(
        name: 'Main Dining',
        image: 'section.jpg',
        description: 'A spacious dining area',
        capacity: 0
      )
      expect(section).to_not be_valid
      expect(section.errors[:capacity]).to include("must be greater than 0")
    end
  end
end
