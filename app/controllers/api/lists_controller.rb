class Api::ListsController < ApplicationController
  before_action :require_login

  def index
    @lists = current_user.lists
    render "/api/lists"
  end

  def new
    @list = List.new
  end

  def create
    @list = current_user.lists.new(list_params)
    @link.author_id = current_user.id
    if @list.save
      render '/api/lists/:id'
    else
      render json: @list.errors.full_messages, status: 422
      render '/api/lists/new'
    end
  end

  def show
    @list = current_user.lists.find(params[:id])
  end

  def edit
    @list = current_user.lists.find(params[:id])
  end

  def update
    @list = current_user.lists.find(params[:id])
    if @list.update(list_params)
      render '/api/lists/:id'
    else
      render json: @list.errors.full_messages, status: 422
      render '/api/lists/:id'
    end
  end

  def destroy
    list =  current_user.lists.find(params[:id])
    list.destroy
    render '/api/lists'
  end

  private
  def list_params()
    params.require(:list).permit(:title)
  end

end
