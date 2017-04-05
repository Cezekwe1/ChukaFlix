class Api::ReviewsController < ApplicationController
  def create
    @review = Review.new(review_params)
    @review.rating = 0 unless @review.rating
    @review.profile_id = current_profile.id
    @serie = Serie.includes(:genre).find(params[:review][:serie_id])
    @review.serie_id = @serie.id
    if @review.save
      @serie
      render 'api/series/show'
    else
      render json: @review.errors.full_messages, status: 422
    end
  end

  def update
    @review = Review.find(params[:id])
    @review.rating = params[:rating]
    @review.body = params[:body]
    if @review.save
      @serie = Serie.find(@review.serie_id)
      render 'api/series/show'
    else
      render json: @review.errors.full_messages, status: 422
    end
  end

  def destroy
    review = Review.find(params[:id])
    review.destroy
    render 'api/series/show'
  end

  private
  def review_params
    params.require(:review).permit(:serie_id, :rating, :body)
  end
end
