require 'rails_helper'

RSpec.describe Api::ReservationsController, type: :controller do
  let(:restaurant) { Restaurant.create(name: 'Restaurant XYZ', address: 'address1', city: 'Addis') }
  let(:section) { Section.create(name: 'Main Dining', image: 'section.jpg', description: 'A spacious dining area', capacity: 50, restaurant:) }
  let(:user) { User.create(name: 'John Doe', username: 'johndoe') }

  describe 'GET #index' do
    it 'returns a list of reservations' do
      reservation1 = Reservation.create(city: 'New York', date: Date.today, number_of_person: 2, section:, user:)
      reservation2 = Reservation.create(city: 'Los Angeles', date: Date.tomorrow, number_of_person: 4, section:, user:)

      get :index, format: :json

      expect(response).to have_http_status(:success)
      expect(JSON.parse(response.body)).to eq([reservation1.as_json, reservation2.as_json])
    end
  end

  describe 'GET #show' do
    it 'returns a specific reservation' do
      reservation = Reservation.create(city: 'New York', date: Date.today, number_of_person: 2, section:, user:)

      get :show, params: { id: reservation.id }, format: :json

      expect(response).to have_http_status(:success)
      expect(JSON.parse(response.body)).to eq(reservation.as_json)
    end
  end
end
