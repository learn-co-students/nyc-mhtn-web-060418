def is_palindrome?(word)
  # 'dad'
  word = word.split(' ').join('')
  word.downcase == word.downcase.reverse
end
