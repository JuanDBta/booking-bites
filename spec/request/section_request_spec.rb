RSpec.describe Api::SectionsController, type: :controller do
    let(:restaurant) { Restaurant.create(name: 'Restaurant XYZ',address: 'address1', city:'Addis') }
  describe 'GET #index' do
    it 'returns all sections' do
      section1 = Section.create(name: 'Section 1',
       image: 'section1.jpg',
        description: 'Section 1 description',
         capacity: 50,
         restaurant: restaurant)
      section2 = Section.create(name: 'Section 2',
       image: 'section2.jpg',
        description: 'Section 2 description', 
        capacity: 60, restaurant: restaurant)

      get :index, format: :json

      expect(response).to have_http_status(:success)
      expect(JSON.parse(response.body)).to eq([section1.as_json, section2.as_json])
    end
   end
  
    describe 'GET #show' do
      it 'returns a specific section' do
        section = Section.create(name: 'Section 1',
         image: 'section1.jpg', 
         description: 'Section 1 description', 
         capacity: 50, restaurant: restaurant)
  
        get :show, params: { id: section.id }, format: :json
  
        expect(response).to have_http_status(:success)
        expect(JSON.parse(response.body)).to eq(section.as_json)
      end
    end
  
    
    describe 'POST #create' do
      it 'creates a new section' do
        restaurant = Restaurant.create(name: 'Restaurant 1', address: '123 Main St', city: 'City')
        section_params = { name: 'Section 1', image: 'section1.jpg', description: 'Section 1 description', capacity: 50 }
      
        post :create, params: { restaurant_id: restaurant.id, section: section_params }, format: :json
      
        expect(response).to have_http_status(:success)
        expect(JSON.parse(response.body)['success']).to be_truthy
        expect(Section.last.restaurant).to eq(restaurant)
      end
      
  
      context 'with invalid attributes' do
        it 'returns the errors' do
          restaurant = Restaurant.create(name: 'Restaurant 1', address: '123 Main St', city: 'City')
          section_params = { name: '', image: 'section1.jpg', description: 'Section 1 description', capacity: 50,restaurant: restaurant }
  
          post :create, params: { restaurant_id: restaurant.id,section: section_params }, format: :json
  
          expect(JSON.parse(response.body)).to eq({ 'name' => ["can't be blank"] })
        end
      end
    end
  end
  