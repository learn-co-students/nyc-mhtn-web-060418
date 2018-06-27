class ApplicationController < Sinatra::Base


  get "/sushis" do
    erb :index
  end

end
