class Api::SessionsController < ApplicationController

  def create
    @user = User.find_by_credentials(params[:user][:email],params[:user][:password])
      if @user
        login(@user)
        render 'api/users/show'
      else
        render json:['Invalid Username and/or Password'],
        status: 422
      end
  end


  def destroy
    if logged_in?
     logout
     render json: {}
   else
     render json:['There is no user to Log out'],
     status: 405
   end
  end

end
