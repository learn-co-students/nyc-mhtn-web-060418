require 'test_helper'

class GoatsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @goat = goats(:one)
  end

  test "should get index" do
    get goats_url
    assert_response :success
  end

  test "should get new" do
    get new_goat_url
    assert_response :success
  end

  test "should create goat" do
    assert_difference('Goat.count') do
      post goats_url, params: { goat: { int: @goat.int, name: @goat.name } }
    end

    assert_redirected_to goat_url(Goat.last)
  end

  test "should show goat" do
    get goat_url(@goat)
    assert_response :success
  end

  test "should get edit" do
    get edit_goat_url(@goat)
    assert_response :success
  end

  test "should update goat" do
    patch goat_url(@goat), params: { goat: { int: @goat.int, name: @goat.name } }
    assert_redirected_to goat_url(@goat)
  end

  test "should destroy goat" do
    assert_difference('Goat.count', -1) do
      delete goat_url(@goat)
    end

    assert_redirected_to goats_url
  end
end
