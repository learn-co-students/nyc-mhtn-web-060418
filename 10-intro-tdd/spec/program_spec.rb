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
    expect(is_palindrome?("d41a14d")).to be true
  end

  it "should return false for an empty string" do
    expect(is_palindrome?("")).to be false
  end

  it "should not care about spaces" do
    expect(is_palindrome?("a man a plan a canal panama")).to be true
  end

  it "should not care about punctuation" do
    expect(is_palindrome?("**;;racecar;;;()()%%^%&@#")).to be true
  end

  it "should not care about special characters" do
    expect(is_palindrome?('a mán a plän a canäl panáma')).to be true
  end

  it "should raise an error if given an integer" do
    expect { is_palindrome?(4) }.to raise_error(ArgumentError)
  end
end

describe "factorial" do
  it "should return the correct value" do
    expect(factorial(4)).to eq(24)
    expect(factorial(3)).to eq(6)
    expect(factorial(15)).to eq(1307674368000)
  end
  it "should return 1 for factorial 0" do
    expect(factorial(1)).to eq(1)
  end
  it "should return 1 for factorial 1" do
    expect(factorial(1)).to eq(1)
  end
  it "should raise an ArgumentError when given a non integer argument" do
    expect { factorial('INVALID STRING INPUT') }.to raise_error(ArgumentError)
  end
  it "should raise an ArgumentError when given an integer too large" do
    expect { factorial(10000000)}.to raise_error(ArgumentError)
  end
end
