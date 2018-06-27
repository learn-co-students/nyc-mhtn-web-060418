class BooksController < ApplicationController
  # Index page (starting with ERB)
  get '/books' do
    @books = Book.all
    erb :"books/index"
  end

  # new form
  get '/books/new' do
    @book = Book.new
    erb :"books/new"
  end  

  # Show page
  get '/books/:id' do
    @book = Book.find(params[:id])
    erb :"books/show"
  end  

  # Create page
  post '/books' do
    @book = Book.create(params)
    redirect "books/#{ @book.id }"
  end

  # Edit page
  get '/books/:id/edit' do
    @book = Book.find(params[:id])
    erb :"books/edit"
  end

  # Update route
  patch '/books/:id' do
    @book = Book.find(params[:id])
    @book.update({
      author: params[:author],
      title: params[:title],
      snippet: params[:snippet],
    })
    redirect "books/#{@book.id}"
  end

  # Delete route
  delete '/books/:id' do 
    @book = Book.find(params[:id])
    @book.delete 
    redirect "/books"
  end 

end
