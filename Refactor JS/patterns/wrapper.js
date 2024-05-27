class Dog{
    constructor(){
        this.cost =50
    }
    displayPrice(){
        return `The dog costs. $${this.cost}.`
    }
}

import test from 'tape'
const test = require('tape')
const wish = require('wish')

test("base dog price", (assert) =>{
    wish((new Dog).displayPrice(), 'The dog costs $50.')
    assert.pass()
    assert.end()
})


function Cute(dog){
    const cuteDog = Object.create(dog)
    cuteDog.cost = dog.cost +20
    return cuteDog
}

test("cute dog price", (assert) =>{
    assert.equal((Cute(new Dog)).displayPrice(), 'The dog costs $70')
    assert.end()
})

function Trained(dog){
    const trainedDog = Object.create(dog)
    trainedDog.cost = dog.cost +20
    return trainedDog
}

test("trained/cute dog price", (assert) =>{
    assert.equal((Trained(Cute(new Dog))).displayPrice(), 'The dog costs $130')
    assert.end()
})

class Person{
    constructor(name){
        this.name = new NameString(name)
    }
}

class AnonymousPerson extends Person{
    constructor(name){
        super()
        this.name = new NameString(name)
    }
}

class NameString extends String{
    capitalize(){
        return new NameString(this[0].toUpperCase() +this.substring(1))
    }

    tigerify(){
        return new NameString(`${this}, the tiger`)
    }

    display(){
        return this.toString()
    }
}

class NullString{
    capitalize(){
        return this
    }
    tigerify(){
        return this
    }

    display(){
        return ''
    }
}

// this is new
function WithoutNull(person){
    personWithoutNull = Object.create(person)
    if(personWithoutNull.name === null){
        personWithoutNull.name = NullString
    }
    return personWithoutNull
}

class Target{
    hello(){
        console.log('hello')
    }
    goodbye(){
        console.log('goodbye')
    }
}

class Adaptee{
    hi(){
        console.log('hi')
    }
    bye(){
        console.log('bye')
    }
}

const formal = new Target;
formal.hello()
formal.goodbye()

const casual = new Adaptee
casual.hi()
casual.bye()


class Adapter{
    constructor(adaptee){
        this.hello = adaptee.hi 
        this.goodbye = adaptee.bye
    }

}

const adaptedCasual = new Adapter(new Adaptee)
adaptedCasual.hello()
adaptedCasual.goodbye()

