class Person{
    constructor(name){
        this.name = name
    }
}

class AnonymousPerson extends Person{
    constructor(){
        super()
        this.name = null
    }
}

personOne = new Person("tony")
personTwo = new AnonymousPerson("tony")

function capitalize(string){
    return string[0].toUpperCasee() + string.substring(1)
}