//--------------------->> Polymorphism in TypeScript

//--------------------->> Introduction: Polymorphism allows methods to do different things
    // based on the object it is acting upon, even though they share the same name.

//                 Person

// Student         Employee        Trainer

// p: Person = new Student()         work()
// p = new Employee()                work()
// p = new Trainer()                 work()


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
    constructor(name: string) {
        super(name);
    }

    // Overriding the makeSound method for Dog
    makeSound(): void {
        console.log("Bark");
    }
}

class Cat extends Animal {
    constructor(name: string) {
        super(name);
    }

    // Overriding the makeSound method for Cat
    makeSound(): void {
        console.log("Meow");
    }
}

//--------------------->> Polymorphism in action: Using a base class reference to refer to derived class objects
let animals: Animal[] = [
    new Dog("Buddy"),
    new Cat("Whiskers"),
    new Animal("Generic Animal")
];

for (let animal of animals) {
    animal.makeSound();
    // Output:
    // Bark
    // Meow
    // Some generic animal sound
}

// Explanation:
// Introduction: Polymorphism allows methods to do different things based on the object it is acting upon, even though they share the same name.
// Polymorphism in action: The `animals` array contains objects of the `Dog`, `Cat`, and `Animal` classes. Each object's `makeSound` method is called, demonstrating polymorphism.
