class ApplicationController < ActionController::Base
  before_action :authorized?

  private

  def log_in_user(user_id)
    session[:user_id] = user_id
  end

  def logged_in_user_id
    session[:user_id]
  end

  def get_logged_in_user
    @logged_in_user = User.find(logged_in_user_id) if logged_in_user_id
  end

  def authorized?
    # if we do not have a valid user_id stored in cookie, kick us back over to login
    redirect_to new_session_path unless !!get_logged_in_user
  end
end
