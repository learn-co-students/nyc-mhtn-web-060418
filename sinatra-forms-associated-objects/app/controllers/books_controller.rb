class BooksController < ApplicationController
  # Index
  get '/books' do
    @books = Book.includes(:author)

    erb :'books/index'
  end

  # New
  get '/books/new' do
    @book = Book.new
    @authors = Author.all

    erb :'books/new'
  end

  # Show
  get '/books/:id' do
    @book = Book.includes(:author).find(params[:id])

    erb :'books/show'
  end

  # Create
  post '/books' do
    @book = Book.new params

    if @book.save
      redirect "/books/#{@book.id}"
    else
      erb :'books/new'
    end
  end

  # Edit
  get '/books/:id/edit' do
    @book = Book.find(params[:id])
    @authors = Author.all

    erb :'books/edit'
  end

  # Update
  patch '/books/:id' do
    # params.delete("_method")
    binding.pry

    @book = Book.find(params[:id])

    if @book.update params[:user]
      redirect "books/#{@book.id}"
    else
      erb :'books/edit'
    end
  end

  # Delete
  delete '/books/:id' do
    Book.destroy(params[:id])

    redirect '/books'
  end
end
