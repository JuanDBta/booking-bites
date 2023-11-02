require 'rails_helper'

RSpec.describe User, type: :model do
  describe 'validations' do
    it 'is valid with valid attributes' do
      user = User.new(
        name: 'John Doe',
        username: 'jo'
      )
      expect(user).to be_valid
    end

    it 'is not valid without a name' do
      user = User.new(
        username: 'jo'
      )
      expect(user).to_not be_valid
      expect(user.errors[:name]).to include("can't be blank")
    end

    it 'is not valid without a username' do
      user = User.new(
        name: 'John Doe'
      )
      expect(user).to_not be_valid
      expect(user.errors[:username]).to include("can't be blank")
    end

    it 'is not valid with a duplicate username' do
      User.create(
        name: 'John Doe',
        username: 'jo'
      )
      user = User.new(
        name: 'Jane Smith',
        username: 'jo'
      )
      expect(user).to_not be_valid
      expect(user.errors[:username]).to include('has already been taken')
    end
  end

  describe 'associations' do
    it 'has many reservations' do
      expect(User.reflect_on_association(:reservations).macro).to eq(:has_many)
    end
  end
end
