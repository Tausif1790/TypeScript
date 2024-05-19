//--------------------->> Inheritance in TypeScript

// Introduction: Inheritance allows one class to extend another, inheriting its properties and methods.

// Reusability and IS-A
//                        Vehicle
//                Car                 Bus     
//           BMW      ALIDI     Benz       Volvo

//--------------------->> Extending a class: Creating a base class and extending it with a derived class
class Animal {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    makeSound(): void {
        console.log("Some generic animal sound");
    }
}

class Dog extends Animal {
    breed: string;

    constructor(name: string, breed: string) {
        super(name);            // this will call parent class constructor with `name` property
        this.breed = breed;
    }

    // Overriding: Providing a specific implementation of a method in the derived class
    makeSound(): void {
        console.log("Bark");
    }
}

//--------------------->> Create Child Objects: Creating instances of the derived class
let myDog = new Dog("Buddy", "Golden Retriever");
console.log(myDog.name);     // Buddy
console.log(myDog.breed);    // Golden Retriever
myDog.makeSound();           // Bark

// Explanation:
// Extending a class: The `Animal` class is a base class with a `name` property
    // and a `makeSound` method. The `Dog` class extends `Animal`, adding a `breed` property and overriding the `makeSound` method.
// Create Child Objects: An instance of the `Dog` class is created
    // with specific `name` and `breed` values.
// Overriding: The `Dog` class provides its own implementation of the `makeSound`
    // method, overriding the base class method.

// Inheriting Functionality: Using inherited methods and properties
class Cat extends Animal {
    constructor(name: string) {
        super(name);
    }

    makeSound(): void {
        console.log("Meow");
    }
}

let myCat = new Cat("Whiskers");
console.log(myCat.name);     // Whiskers
myCat.makeSound();           // Meow

// Explanation:
// Inheriting Functionality: The `Cat` class extends the `Animal` class and overrides the `makeSound` method to provide a specific implementation for cats.

