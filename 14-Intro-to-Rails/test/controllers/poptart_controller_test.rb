require 'test_helper'

class PoptartControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get poptart_index_url
    assert_response :success
  end

  test "should get show" do
    get poptart_show_url
    assert_response :success
  end

end
