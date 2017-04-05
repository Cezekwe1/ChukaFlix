class Api::GenresController < ApplicationController
  def index
    @all_ratings = Serie.all_ratings
    @genres = Genre.includes(series: [:episodes, :genre, :reviews])
  end

  def show
    @genre = Genre.includes(series: [:episodes, :reviews]).find(params[:id])
  end

end
