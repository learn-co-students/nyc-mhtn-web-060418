class BooksController < ApplicationController
  # Index
  get '/books' do
    @books = Book.all
    erb :'books/index'
  end

  # Show
  get '/books/:id' do
    @book = Book.find(params[:id])
    erb :'books/show'
  end
end
