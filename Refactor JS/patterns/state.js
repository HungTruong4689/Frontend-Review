class Person{
    constructor(binaryKnowlegde){
        this.binaryKnowlegde = Object.create(Object.assign({person:this},binaryKnowlegde))
        
    };

    change(binaryKnowlegde){
        this.binaryKnowlegde = Object.create(Object.assign({person:this},binaryKnowlegde))
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
    forget(){
        this.person.change(binaryObliviousness)
    }
    
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
    forget(){
        this.person.change(binaryAwareness)
    }
}

const personOne = new Person(binaryAwareness)
const personTwo = new Person(binaryObliviousness)

[personOne,personTwo].forEach(person => {
    console.log(person.binaryKnowlegde.read(10))
    console.log(person.binaryKnowlegde.and(2,3))
    console.log(person.binaryKnowlegde.xor(2,3))
});