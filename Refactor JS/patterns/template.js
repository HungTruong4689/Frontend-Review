class Person{
    constructor(typeOfPerson){
        this.typeOfPerson = typeOfPerson
    }
    whatIs(number){ return number}
    whatIsInBinary(number){ return Number('0b' + number)}
    log(number){
        if(this.typeOfPerson === "binary knower"){
            console.log(this.whatIsInBinary(10))
        }else{
            console.log(person.whatIs(10))
        }
    }
}

const personOne = new Person("binary knower")
const personTwo = new Person("binary oblivious")

[personOne,personTwo].forEach(person => {
    person.log(10)
});

//A Functional Variant

function log(person,number){
    console.log(person.whatIs(number))
}
class BinaryKnower{ 
    whatIs(number){
        
        return Number('0b' + number)
    }
}

class BinaryOblivious{ 
    whatIs(number){
        return number
        
    }
}