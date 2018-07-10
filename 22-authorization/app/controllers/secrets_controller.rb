class SecretsController < ApplicationController
  before_action :set_secret, only: %i[show edit update destroy]
  before_action :set_authors, only: %i[new create edit update]

  # GET /secrets
  def index
    # only display secrets for the currently logged in user
    @secrets = @logged_in_user.secrets
  end

  # GET /secrets/1
  def show
    @secret
  end

  # GET /secrets/new
  def new
    @secret = Secret.new
  end

  # GET /secrets/1/edit
  def edit; end

  # POST /secrets
  def create
    @secret = Secret.new(secret_params)
    @secret.author = @logged_in_user
    if @secret.save
      redirect_to @secret, notice: 'Secret was successfully created.'
    else
      render :new
    end
  end

  # PATCH/PUT /secrets/1
  def update
    if @secret.update(secret_params)
      redirect_to @secret, notice: 'Secret was successfully updated.'
    else
      render :edit
    end
  end

  # DELETE /secrets/1
  def destroy
    @secret.destroy
    redirect_to secrets_url, notice: 'Secret was successfully destroyed.'
  end

  private

  # Use callbacks to share common setup or constraints between actions.
  def set_secret
    @secret = Secret.find(params[:id])
  end

  def set_authors
    @authors = User.all
  end

  # Never trust parameters from the scary internet, only allow the white list through.
  def secret_params
    params.require(:secret).permit(:text, :author_id)
  end
end
