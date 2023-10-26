class Api::RestaurantsController < ApplicationController
  def new
    @restaurant = Restaurant.new
  end

  def create
    @restaurant = Restaurant.new(restaurant_params)
    if @restaurant.save
      render json: { restaurant: @restaurant, success: true }
      redirect_to @restaurant
    else
      render json: @restaurant.errors
    end
  end
  def index
    @restaurants = Restaurant.all
    render json: @restaurants
  end

  private

  def restaurant_params
    params.require(:restaurant).permit(:name, :address, :city)
  end
end
