class Api::ListsController < ApplicationController
  before_action :require_login

  def index
    @lists = current_user.lists
    @user = current_user
    render "/api/lists/index"
  end

  def create
    @list = current_user.lists.new(list_params)
    if @list.save
      render '/api/lists/show'
    else
      render json: @list.errors.full_messages, status: 422

    end
  end

  def update
    @list = current_user.lists.find(params[:id])
    if @list.update(list_params)
      render '/api/lists/show'
    else
      render json: @list.errors.full_messages, status: 422
      render '/api/lists/show'
    end
  end

  def destroy
    @list =  current_user.lists.find(params[:id])
    @list.destroy
    render :show
  end

  private
  def list_params()
    params.require(:list).permit(:title, :author_id)
  end

end
