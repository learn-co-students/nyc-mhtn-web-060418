require 'pry'
# WORKS but would like to refactor:
# def is_palindrome?(word)
#   if word.class != String
#     raise ArgumentError
#   elsif word == ""
#     false
#   else
#     word = word.gsub(/[^À-ÿa-zA-Z0-9]/, "")
#     puts word
#     word.downcase == word.downcase.reverse
#   end
# end

# REFACTORED:



def is_palindrome?(word)
  raise ArgumentError if word.class != String
  return false if word.empty?

  sanitized_word = word.gsub(/[^À-ÿA-Za-z0-9]/, "")
  sanitized_word.downcase == sanitized_word.downcase.reverse
end

#
# def factorial(n)
#   # 4
#   # 3
#   # 2
#   if n == 1 || n == 0
#     1
#   else
#     # return 4 * the return val of factorial(4 -1)
#     # return 4 * 3 * return val of 2
#     # return 4 * 3 * 2 * 1
#     n * factorial(n-1)
#   end
#   # 4 -> 4 * 3 * 2 * 1 => 24
# end

# REFACTORED FACTORIAL

def factorial(n)
  raise ArgumentError if n > 100000
  n < 2 ? 1 : n * factorial(n - 1)
end
