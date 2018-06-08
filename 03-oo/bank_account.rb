require 'pry'

class BankAccount

  attr_accessor :balance, :age_of_account

  @@all = []

  def initialize
    @balance = 0
    @age_of_account = 0
    p self.class
    @@all << self
  end

  def deposit(amount)

    @balance += amount
  end

  def withdraw(amount)
    self.deposit(amount * -1)
  end


  def self.all
    @@all
  end

  def self.steal_from_first(amount)
    @@all.first.withdraw(amount)
  end

end


bank_account_1 = BankAccount.new
bank_account_2 = BankAccount.new
bank_account_3 = BankAccount.new

bank_account_1.deposit(5)
bank_account_2.balance = 999999999999

BankAccount.all

binding.pry