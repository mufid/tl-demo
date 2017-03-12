class TrafficsController < ApplicationController
  def show
  end

  def show_wrong_interval
  end

  def retrieve_latest
    prng = Random.new
    @number = prng.rand(1..5_000_000)   
    
    render layout: false
  end
end