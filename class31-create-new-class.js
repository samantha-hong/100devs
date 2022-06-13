class Animal{
    constructor(name){
        this.name = name
    }
    speak(){
        console.log(`${this.animal} makes a sound`)
    }
}

class Dog extends Animal{
    constructor(name, breed){
        super(name)
        this.breed = breed
    }
}

let simba = new Dog('Simba', 'Shepard')

class Cat extends Animal{
    constructor(name, breed, eyeColor){
        super(name)
        this.breed = breed
        this.eyeColor = eyeColor
    }
}

let kitty = new Cat('Kitty', 'Russian Blue', 'Blue')

_________________________________________________________
/* how to prevent people changing the value of a property using dot notation

class Animal{
    constructor(name){
        this._name = name
        //use underscore, which means DO NOT CHANGE
    }
    get name(){
        return this._name
        //when using Animal.name, it will return this._name
    }
}

*/