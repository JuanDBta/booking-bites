class Api::UsersController < ApplicationController
  def index
    @user = User.find_by(username: params[:username])
    if @user
      render json: @user
    else
      render json: { errors: "User doesn't exist" }, status: :not_found
    end
  end

  def create
    @user = User.new(user_params)
    if @user.save
      render json: @user
    else
      render json: { errors: @user.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def user_params
    params.require(:user).permit(:name, :username)
  end
end
