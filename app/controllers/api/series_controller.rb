class Api::SeriesController < ApplicationController
  def index
    @series = Serie.all
  end
end
