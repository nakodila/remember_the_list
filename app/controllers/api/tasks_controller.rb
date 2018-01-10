class Api::TasksController < ApplicationController
  before_action :require_login

  def index
    @tasks = current_user.tasks
    @user = current_user
    render "/api/tasks/index"
  end

  def create
    @task = current_user.tasks.new(task_params)
    @task.author_id = current_user.id
    @task.done = false
    if @task.save
      render '/api/tasks/index'
    else
      render json: @task.errors.full_messages, status: 422
    end
  end

  def update
    @task = current_user.tasks.find(params[:id])
    if @task.update(task_params)
      render '/api/tasks/index'
    else
      render json: @task.errors.full_messages, status: 422
      render '/api/tasks/index'
    end
  end

  def show
    @task = current_user.tasks.find(params[:id])
  end

  def destroy
    @task = current_user.tasks.find(params[:id])
    @task.destroy
    render '/api/tasks/index'
  end

  private
  def task_params()
    params.require(:task).permit(:body)
  end

end
