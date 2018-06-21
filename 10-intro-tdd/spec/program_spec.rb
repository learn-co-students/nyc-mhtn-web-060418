require_relative '../program'

describe "is_palindrome?" do
  it "should return true for a simple palindrome" do
    expect(is_palindrome?('dad')).to be true
  end

  it "should return false for a non palindrome string" do
    expect(is_palindrome?("potato")).to be false
  end

  it "should not care about case" do
    expect(is_palindrome?("Atoyota")).to be(true)
  end

  it "should not care about numbers in a string" do
    expect(is_palindrome?("4114")).to be true
  end

  it "should not care about spaces" do
    expect(is_palindrome?("a man a plan a canal panama")).to be true
  end
end
