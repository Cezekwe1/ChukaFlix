class Api::UsersController < ApplicationController

  def create
    @user = User.new(user_params)
    if @user.save
      login(@user)
      render :show
    else
      render json: @user.errors.full_messages, status: 404
    end
  end


  def set_cp
    set_profile(params[:profile][:id])

    if current_profile
     @profile = current_profile
     render 'api/profiles/show'
    else
      render json: {}
    end
  end


private
 def user_params
   params.require(:user).permit(:email,:username, :password)
 end
end
