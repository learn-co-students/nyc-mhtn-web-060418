
class Tweet

  @@all = []

  attr_reader :tweet_text, :user

  def initialize(tweet_text, user)
    @tweet_text = tweet_text
    @user = user
    @@all << self
  end

  def self.all
    @@all
  end

end