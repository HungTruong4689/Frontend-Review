class Person{
    constructor(binaryKnowlegde){
        this.binaryKnowlegde = binaryKnowlegde
        
    }
}

const binaryAwareness = {
    read(number){
        return Number('0b' + number)
    },
    
    and(numberOne,numberTwo){
        return numberOne & numberTwo
    },
    
    xor(numberOne,numberTwo){
        return numberOne ^ numberTwo
    },
    
}
const binaryObliviousness = {
    
    read(number){
        return number
    },
    
    and(numberOne,numberTwo){
        return "unknown"
    },

    xor(numberOne,numberTwo){
        return "unknown"
    },
}

const personOne = new Person(binaryAwareness)
const personTwo = new Person(binaryObliviousness)

[personOne,personTwo].forEach(person => {
    console.log(person.binaryKnowlegde.read(10))
    console.log(person.binaryKnowlegde.and(2,3))
    console.log(person.binaryKnowlegde.xor(2,3))
});