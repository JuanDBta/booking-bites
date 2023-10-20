class UsersController < ApplicationController
    def show
        @user = User.find(params[:id])
        render json:@user
    end
    
    def create
        @user = User.new(user_params)
        if @user.save
          render json: { user: @user, success: true }
          redirect_to @user
        else
          render json: @user.errors
        end
    end
      private
    
 def user_params
    params.require(:user).permit(:name)
  end
end
