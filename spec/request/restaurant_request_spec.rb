require 'rails_helper'

RSpec.describe Api::RestaurantsController, type: :controller do
  describe 'POST #create' do
    context 'with valid attributes' do
      it 'creates a new restaurant' do
        restaurant_params = { name: 'Restaurant XYZ', address: '123 Main St', city: 'City' }
        post :create, params: { restaurant: restaurant_params }
        expect(response).to have_http_status(:success)
        expect(JSON.parse(response.body)['success']).to be_truthy
      end
    end

    context 'with invalid attributes' do
      it 'returns the errors' do
        restaurant_params = { address: '123 Main St', city: 'City' }
        post :create, params: { restaurant: restaurant_params }, format: :json
        expect(JSON.parse(response.body)).to eq({ 'name' => ["can't be blank"] })
      end
    end
  end

  describe 'GET #index' do
    it 'returns all restaurants' do
      restaurant1 = Restaurant.create(name: 'Restaurant 1', address: '123 Main St', city: 'City')
      restaurant2 = Restaurant.create(name: 'Restaurant 2', address: '456 Elm St', city: 'City')
      get :index
      expect(response).to have_http_status(:success)
      expect(JSON.parse(response.body)).to eq([restaurant1.as_json, restaurant2.as_json])
    end
  end
end
