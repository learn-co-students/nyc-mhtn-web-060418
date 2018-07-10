## Domain is Pet/Owners
* Owner has many Pets
* Pet belongs to an Owner

### PET:
* Has a name and type (i.e. cat, dog, bird, etc...)
* I should be able to navigate to a pet's show page from the Pets index page
* I should be able to create a new pet and assign it to an owner from the browser
* I should be able to update a pet's name but not it's type

### OWNER:
* Has a name
* I should be able to see all of an owner's pets from his/her show page
* I should be able to navigate to a pet's show page from it's owner's show page
* I should be able to create a new owner from the browser
* I *SHOULD NOT* be able to change the owner's name

### BONUS:
1.  Add validations for Owners and Pets (you can add whatever validations makes sense to you)
2. Add a search bar to Pet's index page to filter pets by type (i.e. if I enter "cat" I should see only the cats on the index page)
3. Create a Has_many_through relationship (An Owner has many pets and a Pet has many owners  *hint* you may need to create an additional table ) (edited)
