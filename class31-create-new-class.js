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