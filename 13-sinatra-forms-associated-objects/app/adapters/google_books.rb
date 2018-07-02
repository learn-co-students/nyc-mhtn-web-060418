module GoogleBooks
  class Adapter
    BASE_URL = 'https://www.googleapis.com/books/v1/volumes?q='

    attr_reader :author, :author_raw

    def initialize(author)
      @author = author_sanitizer(author)
      @author_raw = author
    end

    def fetch_books
      books = JSON.parse(RestClient.get(author_url))

      books['items'].each do |item|
        book = ::Book.new
        book.author = Author.find_or_create_by(name: author_raw)
        book.title = item['volumeInfo']['title']
        book.snippet = item['volumeInfo']['description']

        book.save
      end
    end

    private

    def author_url(max_results = 20)
      "#{BASE_URL}#{author}&maxResults=#{max_results}"
    end

    def author_sanitizer(author)
      author.gsub(/\W+/, '').downcase
    end
  end
end
