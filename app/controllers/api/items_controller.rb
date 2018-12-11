class Api::ItemsController < ApplicationController
  before_action :set_department
  before_action :set_item, only: [:show, :update, :destroy]
  
  def index
    render json: @department.items
  end

  def show
  end

  def create
  end

  def update
  end

  def destroy
  end

  private

  def set_department
    @department = Deparment.find(params[:department_id])
  end

  def set_item
    @item = Item.find(params[:id])
  end

  def item_params
    params.require(:item).permit(:name, :description, :qty, :price)
  end
end
