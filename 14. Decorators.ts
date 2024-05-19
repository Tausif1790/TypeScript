//--------------------->> Decorators in TypeScript (Attributes in C#)
// Notes : Enable decorator manually (setting/User/Extension/experimentalDecorators) in VS code

// Introduction: Decorators are a special kind of declaration that can be attached to a class, method, accessor, property, or parameter.

// Types of decorators: There are various types of decorators, including class, method, accessor, property, and parameter decorators.

// Decorator Order: The order in which decorators are applied is important and follows the rule: parameter decorators,
    // method/accessor decorators, property decorators, and then class decorators.

// Experimental Flag: To use decorators in TypeScript, the `experimentalDecorators` compiler option must be enabled in `tsconfig.json`.
// "experimentalDecorators": true
// Notes : Enable decorator manually (setting/User/Extension/experimentalDecorators) in VS code

// Setup Project: Ensure your project is set up with TypeScript and the necessary configuration to use decorators.

//--------------------->> Class Decorator: A decorator that is applied to a class
function classDecorator(constructor: Function){
    console.log('Class Decorator');
    console.log(constructor);
}

@classDecorator
class Product{
    constructor(id: number){
    }
}

// Ex 2.
function sealed(constructor: Function) {        // Decorator to sealed the constructor and prototype
    Object.seal(constructor);
    Object.seal(constructor.prototype);
}

@sealed
class Greeter {
    greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }

    greet() {
        return `Hello, ${this.greeting}`;
    }
}

let greeter = new Greeter("world");
console.log(greeter.greet()); // Hello, world

// Explanation:
// Class Decorator: The `sealed` decorator is applied to the `Greeter` class.
    // This decorator seals the constructor and its prototype, preventing any further modification to the class or its prototype.

//--------------------->> Implement Class Decorator: A class decorator example that adds functionality to a class
// Ex 3.
function logClass(target: any) {
    console.log(`Class Decorator: ${target.name}`);
}

@logClass
class MyClass {
    constructor() {
        console.log('MyClass instance created');
    }
}
// [LOG]: "Class Decorator: MyClass" 

// Explanation:
// Implement Class Decorator: The `logClass` decorator logs the name of the class when it is defined.

//--------------------->> Add Properties using Class Decorator: Adding properties to a class using a decorator
function addTimestamp(constructor: Function) {
    constructor.prototype.timestamp = new Date();
}

@addTimestamp
class MyClassWithTimestamp {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
}

let myInstance = new MyClassWithTimestamp('Sample');
console.log((<any>myInstance).timestamp);    // Outputs the timestamp when the instance was created

// Explanation:
// Add Props using Class Decorator: The `addTimestamp` decorator adds a `timestamp` property to instances of the class.

//--------------------->> Property Decorator: A simple property decorator example
function propertyDecorator(target: any, propertyName: string){
    console.log('Property Decorator');
    console.log(target.constructor);
    console.log(propertyName);
}

@classDecorator
class Product2{
    @propertyDecorator
    name: string = "IPhone"

    constructor (id: number){

    }
}
/*  // console:

Property Decorator

class Product{
    constructor(id){
        this.name = "IPhone";
    }
}

name        // property name

*/

// Ex 2.
function logProperty(target: any, propertyName: string) {        // target => prototype representation
    let value = target[propertyName];

    const getter = () => {
        console.log(`Get: ${propertyName} => ${value}`);
        return value;
    };

    const setter = (newVal) => {
        console.log(`Set: ${propertyName} => ${newVal}`);
        value = newVal;
    };

    Object.defineProperty(target, propertyName, {
        get: getter,
        set: setter,
        enumerable: true,
        configurable: true
    });
}

//--------------------->> Implement Property Decorator: Using the property decorator
class MyClassWithProperty {
    @logProperty
    myProperty: string;

    constructor(myProperty: string) {
        this.myProperty = myProperty;
    }
}

let myPropInstance = new MyClassWithProperty('initial value');
myPropInstance.myProperty = 'new value';     // Triggers setter
console.log(myPropInstance.myProperty);      // Triggers getter

// Explanation:
// Property Decorator: The `logProperty` decorator logs accesses and modifications to the decorated property.

//--------------------->> Method Decorator: A simple method decorator example
function methodDecorator(target: any,
    methodName: string,
    descriptor: PropertyDescriptor){
        console. log ( 'Method Decorator')
        console. log (target)
        console. log (methodName)
        console. log (descriptor)
}



// Ex 2.
function logMethod(target: any, methodName: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;

    descriptor.value = function (...args: any[]) {
        console.log(`Method ${methodName} invoked with args: ${JSON.stringify(args)}`);
        return originalMethod.apply(this, args);
    };

    return descriptor;
}

//--------------------->> Implement Method Decorator: Using the method decorator
@classDecorator
class Product3{
    @propertyDecorator
    name: string = "IPhone"

    constructor (id: number){
    }

    // method decorator
    @methodDecorator    
    print(){
    console. log (this.name)
    }
}
/*  // console:

Property Decorator

class Product{
    constructor(id){
        this.name = "IPhone";
    }
}

print            // method name

descriptor properties...

*/

// Ex 2.
class MyClassWithMethod {
    @logMethod
    myMethod(arg1: string, arg2: number) {
        console.log('Method executed');
    }
}

let myMethodInstance = new MyClassWithMethod();
myMethodInstance.myMethod('test', 42);

// Explanation:
// Method Decorator: The `logMethod` decorator logs the arguments when the decorated method is called.

//--------------------->> Param Decorator: A simple parameter decorator example
function paramDecorator(target: any,
    methodName: string,
    paramIndex: number){
    console.log('Param Decorator')
    console.log(target)
    console.log(methodName)
    console.log(paramIndex)
    }


// Ex 2.
function logParameter(target: any, key: string, index: number) {
    const metadataKey = `__log_${key}_parameters`;
    if (Array.isArray(target[metadataKey])) {
        target[metadataKey].push(index);
    } else {
        target[metadataKey] = [index];
    }
}

//--------------------->> Implement Param Decorator: Using the parameter decorator
@classDecorator
class Product4{
    @propertyDecorator
    name: string = "IPhone"

    constructor (id: number){
    }

    // method decorator
    @methodDecorator    
    print(@paramDecorator test: string){
    console. log (this.name)
    }
}
/*  // console:

Property Decorator

class Product{
    constructor(id){
        this.name = "IPhone";
    }
}

print            // method name

0               // parameter intex

*/

class MyClassWithParameter {
    myMethod(@logParameter param1: string, @logParameter param2: number) {
        console.log('Method executed with parameters:', param1, param2);
    }
}

let myParamInstance = new MyClassWithParameter();
myParamInstance.myMethod('param1', 123);

// Explanation:
// Param Decorator: The `logParameter` decorator logs the index of the parameters of the decorated method.

//--------------------->> Decorator Factories: Creating a decorator factory
function classDecoratorFactory(price: number){      // wrapping parameter value with prototype property using decorator property
    console.log( 'Class Decorator Factory')
    return (constructor: Function)=>{
        console.log('Class Decorator');
        console.log (constructor);
        constructor.prototype.price = price;
    }
}

@classDecoratorFactory(1234)
class Product5{
    @propertyDecorator
    name: string = "IPhone"

    constructor (id: number){
    }

    // method decorator
    @methodDecorator    
    print(@paramDecorator test: string){
    console. log (this.name)
    }
}
/*  // console:

Property Decorator

class Product{
    constructor(id){
        this.name = "IPhone";
    }
}

1234        // price : prototype property

*/

// Ex 2.
function logClassWithPrefix(prefix: string) {
    return function (constructor: Function) {
        console.log(`${prefix} ${constructor.name}`);
    };
}

// Create Decorator Factory: Using the decorator factory
@logClassWithPrefix('Prefix:')
class MyClassWithPrefix {
    constructor() {
        console.log('MyClassWithPrefix instance created');
    }
}

let myPrefixInstance = new MyClassWithPrefix();

// Explanation:
// Decorator Factories: The `logClassWithPrefix` decorator factory creates a class decorator that logs a message with a prefix when the class is defined.


//--------------------->> Decorator Order: Demonstrating the order of application
function logParameter2(target: any, propertyKey: string, parameterIndex: number) {
    console.log(`Parameter decorator applied on: ${propertyKey}, parameter index: ${parameterIndex}`);
}

function logMethod2(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    console.log(`Method decorator applied on: ${propertyKey}`);
}

class Calculator {
    add(@logParameter a: number, @logParameter b: number): number {
        return a + b;
    }
}

const calculator = new Calculator();
console.log(calculator.add(1, 2)); // Output: Parameter decorator applied on: add, parameter index: 0 ...
                                   //         Parameter decorator applied on: add, parameter index: 1 ...
                                   //         Method decorator applied on: add ...
                                   //         3

// Explanation:
// Decorator Order: Demonstrates the order of application of parameter decorators and method decorators.
