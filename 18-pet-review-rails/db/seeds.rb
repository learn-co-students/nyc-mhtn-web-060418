brad = Owner.create(name: "Brad")
obama = Owner.create(name: "Obama")
michelle = Owner.create(name: "Michelle")

hans = Pet.create(name: "Hans", species: "Goat", owner: brad)
garfield = Pet.create(name: "Garfield", species: "Cat", owner: obama)
snoopy = Pet.create(name: "Snoopy", species: "dog", owner: michelle)
