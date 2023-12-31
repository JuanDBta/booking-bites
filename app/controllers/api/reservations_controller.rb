class Api::ReservationsController < ApplicationController
  def index
    @reservations = Reservation.all
    render json: @reservations
  end

  def show
    @reservation = Reservation.find(params[:id])
    render json: @reservation
  end

  def new
    @reservation = Reservation.new
  end

  def create
    @reservation = Reservation.new(reservation_params)
    if @reservation.save
      render json: { reservation: @reservation, success: true }
    else
      render json: { errors: @reservation.errors.full_messages }
    end
  end

  private

  def reservation_params
    params.require(:reservation).permit(:city, :date, :number_of_person, :section_id, :user_id)
  end
end
