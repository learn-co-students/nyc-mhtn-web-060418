require 'rest-client'
require 'pry'
require 'json'


def get_book_hash(search_term)
  response = RestClient.get('https://www.googleapis.com/books/v1/volumes', { params: { q: search_term } })
  JSON.parse(response.body)
end

def fetch_and_display(search_term)
  books = get_book_hash(search_term)["items"]
  display_books(books)
end

def get_title(book)
 book["volumeInfo"]["title"]
end

def get_authors(book)
  book["volumeInfo"]["authors"]
end

def format_authors(author_array)
  if author_array
    author_array.join(", ")
  else
    nil
  end
end

def get_description(book)
  book["volumeInfo"]["description"]
end

def format_description(description)
  if description
    description[0..150] + "..."
  else
    nil
  end
end

def display_books(books)
  books.each do |book|
    title = get_title(book)

    authors = get_authors(book)
    formatted_authors = format_authors(authors)

    formatted_description = format_description(get_description(book))

    puts "Title: #{ title }"
    puts "Authors: #{ formatted_authors }"
    puts "Description: #{ formatted_description }"
  end
end

def get_user_input
  gets.chomp
end
  
def run
  puts "Enter a search term"
  search_term = get_user_input
  fetch_and_display(search_term)
end



run


