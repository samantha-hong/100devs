//Create a street fighter constructor that makes fighting game characters with 4 properties and 3 methods

function StreetFighter(name, ability, block, attack) {
    this.name = name
    this.ability = ability
    this.block = block
    this.attack = attack
    this.damage = function() {
        console.log(`${this.name} did ${this.attack} damage with ${this.ability}!`)
    }
    this.smile = function() {
        console.log(`${this.name} smiled`)
    }
    this.taunt = function() {
        console.log(`${this.name} taunted you`)
    }
}

let sarah = new StreetFighter ('Sarah', 'high kick', true, '10')