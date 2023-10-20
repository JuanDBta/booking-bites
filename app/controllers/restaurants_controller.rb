class RestaurantsController < ApplicationController
   def new
     @restaurant = Restaurant.new
   end
    def create
        @restaurant = Restaurant.new(restaurant_params)
        if @restaurant.save
          render json: { user: @restaurant, success: true }
          redirect_to @restaurant
        else
          render json: @restaurant.errors
        end
    end
      private
    
 def restaurant_params
    params.require(:restaurant).permit(:name, :address,:city)
  end


end
