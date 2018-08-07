require "application_system_test_case"

class GoatsTest < ApplicationSystemTestCase
  setup do
    @goat = goats(:one)
  end

  test "visiting the index" do
    visit goats_url
    assert_selector "h1", text: "Goats"
  end

  test "creating a Goat" do
    visit goats_url
    click_on "New Goat"

    fill_in "Int", with: @goat.int
    fill_in "Name", with: @goat.name
    click_on "Create Goat"

    assert_text "Goat was successfully created"
    click_on "Back"
  end

  test "updating a Goat" do
    visit goats_url
    click_on "Edit", match: :first

    fill_in "Int", with: @goat.int
    fill_in "Name", with: @goat.name
    click_on "Update Goat"

    assert_text "Goat was successfully updated"
    click_on "Back"
  end

  test "destroying a Goat" do
    visit goats_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "Goat was successfully destroyed"
  end
end
