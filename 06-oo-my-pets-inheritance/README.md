# My Pets

## Objective

1. Gain a deeper understanding of object relations.
2. Build classes that produce objects that interact with one another through associations and behavior. 

## Instructions

This is a test-driven lab. Use the test file and test output to understand what is being asked of you as you follow the guidelines below. 

### Overview

You will be building an `Owner`, `Fish`, `Dog`, and `Cat` class. An owner will know about all its pets, be able to buy a pet, set the name of a pet (which the pet can't change, because that would be weird), change a pet's mood through walking, feeding, or playing with it, and sell all of its pets (for when it moves to that tiny NYC studio after college).

### Part I: Object Models

* Define a `Dog`, `Fish` and `Cat` class that have the attributes required by the test suite. Keep in mind, some of the attributes should be readable and writable (i.e. `attr_accessor`s), while others may need to be *just* setters (`attr_writer`) or *just* getters (`attr_reader`). The test suite will make this clear so pay attention to the test output. 


### Part II: Object Relations

* An owner should know about its pets! Instances of the `Owner` class should be initialized with an `@pets` variable, set equal to the following hash: `{fishes: [], cats: [], dogs: []}`
* An owner should be able to buy and sell pets, and therefore alter the `@pets` hash. You will therefore need a setter and a getter method (`attr_accessor`) for `pets`.
* When an owner buys a new pet, the `buy_``cat/dog/fish` method takes in an argument of a *name*. You must take that name and do the following: 
  * *Make a new instance of the appropriate pet, initializing it with that name*.
  * Associate that new pet instance to the owner by adding it to the appropriate array-value of the `@pets` hash stored in the `pets` `attr_accessor`. 
* When an owner plays with a cat or feeds a fish or walks a dog, that pet will get happier. Remember that the `pets` method stores all of an owners pets. The `@pets` hash stored in that method is full of *instances of the `Cat`/`Dog`/`Fish` class*. That means you can call `Cat`/`Dog`/`Fish` instance methods (such as `.mood=`) on those pets. 


These are just a few hints and guidelines to help you through this lab. This lab is extensive and challenging. Rely on the guides here, refer to the previous Code Along on object relations, and **read the test output and test files**. Never forget to ask a question on Learn if you are stuck. And remember, as a programmer, your job is to *fix broken code!* Broken code is the norm, the baseline, the starting point for all of the projects you will build. Embrace it!


<p data-visibility='hidden'>View <a href='https://learn.co/lessons/oo-my-pets' title='My Pets'>My Pets</a> on Learn.co and start learning to code for free.</p>

<p class='util--hide'>View <a href='https://learn.co/lessons/oo-my-pets'>OO My Pets</a> on Learn.co and start learning to code for free.</p>
