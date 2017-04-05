class Api::FavoritesController < ApplicationController

  def create
   @favorite = Favorite.new(favorite_params)
   if @favorite.save
     render json: @favorite
   else
     render json: @favorite.errors.full_messages, status: 422
   end
 end

 def destroy
   @favorite = current_profile.favorites.find_by(serie_id: params[:id])
   @favorite.destroy
   render json: @favorite
 end

 private
 def favorite_params
   params.require(:favorite).permit(:serie_id, :profile_id)
 end
end
