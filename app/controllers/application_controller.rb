class ApplicationController < ActionController::Base
   protect_from_forgery with: :exception

  helper_method :current_user, :logged_in?, :login, :logout, :current_profile, :picked_prof?, :set_profile

  private

  def current_user
     return nil unless session[:session_token]
     @current_user ||= User.find_by(session_token: session[:session_token])
  end

  def current_profile
    return nil unless logged_in?
    return nil unless session[:session_token]
    return nil unless session[:cp_id]
    @current_profile ||= Profile.find(session[:cp_id])
  end

  def login(user)
    session[:session_token] = user.reset_session_token
  end

  def logout
    session[:cp_id] = nil
    session[:session_token] = nil
  end

  def logged_in?
    !!current_user
  end

  def set_profile(id)
    session[:cp_id] = id
  end

  def picked_prof?
    !!current_profile
  end
end
