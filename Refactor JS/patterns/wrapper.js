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

