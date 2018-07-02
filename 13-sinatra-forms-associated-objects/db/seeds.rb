Author.destroy_all
Book.destroy_all

GoogleBooks::Adapter.new("Madeline L'Engle").fetch_books
GoogleBooks::Adapter.new("Stephen King").fetch_books
