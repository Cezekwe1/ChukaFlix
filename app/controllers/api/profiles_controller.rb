class Api::ProfilesController < ApplicationController
  def index

  end

  def create
    @profile = Profile.new(user_id: current_user.id, name: params[:profile][:name])
    @user = current_user
    if @profile.save
      render 'api/users/show'
    else
      render json: @profile.errors.full_messages, status: 405
    end
  end

  def destroy
    profile = Profile.find(params[:id])
    profile.destroy
    @user = current_user
    render 'api/users/show'
  end

end
