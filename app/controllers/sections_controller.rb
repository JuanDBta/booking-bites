class SectionsController < ApplicationController
    def index
        @sections = Section.all
        render json: @sections, status: :ok
    end
    
    def show
        @section = Section.find(params[:id])
        render json: @section, status: :ok
    end

   
end
    
