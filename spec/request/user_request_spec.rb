require 'rails_helper'

RSpec.describe Api::UsersController, type: :controller do
  describe 'GET #index' do
    it 'returns the user if it exists' do
      user = User.create(name: 'John Doe', username: 'johndoe')
      get :index, params: { username: 'johndoe' }
      expect(response).to have_http_status(:success)
      expect(JSON.parse(response.body)).to eq(user.as_json)
    end

    it 'returns an error message if the user does not exist' do
      get :index, params: { username: 'nonexistentuser' }
      expect(response).to have_http_status(:not_found)
      expect(JSON.parse(response.body)).to eq({ 'errors' => "User doesn't exist" })
    end
  end

  describe 'POST #create' do
    it 'creates a new user with valid attributes' do
      user_params = { name: 'Jane Smith', username: 'janesmith' }
      post :create, params: { user: user_params }
      expect(response).to have_http_status(:success)
      expect(JSON.parse(response.body)['name']).to eq('Jane Smith')
      expect(JSON.parse(response.body)['username']).to eq('janesmith')
    end

    it 'returns an error message if the user has invalid attributes' do
      user_params = { name: '', username: 'johndoe' }
      post :create, params: { user: user_params }
      expect(response).to have_http_status(:unprocessable_entity)
      expect(JSON.parse(response.body)).to eq({ 'errors' => ["Name can't be blank"] })
    end
  end
end
