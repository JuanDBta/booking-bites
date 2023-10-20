class SectionsController < ApplicationController
    def index
        @sections = Section.all
        render json: @sections
    end
    
    def show
        @section = Section.find(params[:id])
        render json: @section
    end
    def new
       
        @restaurant = Restaurant.find(params[:restaurant_id])
        @section = Section.new(restaurant: @restaurant)
    end
    
    def create
        @restaurant = Restaurant.find(params[:restaurant_id])
        @section = Section.new(section_params)
        @section.restaurant= @restaurant
        if @section.save
            render json: @section
            redirect_to @section
        else
            render json: @section.errors
        end
      end
    
      private
    
      def section_params
        params.require(:section).permit(:name, :image, :description, :capacity, :cover,:live_music, :restaurant_id, :user_id)
      end
   
end
    
