//come up with a parent class (contractor)
//extend that parent class into two children (front end and back end)
//use encapulation, abstraction, inheritance, and polymorphism

class Contractor{
    constructor(name, role){
        this._name = name
        this._role = role
    }
    get name(){
        return this._name
    }
    get role(){
        return this._role
    }
    introduction(){
        console.log(`Hi, my name is ${this._name}, and I am a ${this._role} at 100devs`)
    }
}

class FrontEnd extends Contractor{
    constructor(name, role, artStyle){
        super(name, role)
        this._artStyle = artStyle
    }
    get artStyle(){
        return this._artStyle
    }
    introduction(){
        console.log(`Hi, name name is ${this.name}, and I am a ${this.role} at 100devs. My style is ${this._artStyle}`)
    }
}


