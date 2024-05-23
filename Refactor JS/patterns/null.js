class Person{
    constructor(name){
        this.name = NameString(name)
    }
}

class AnonymousPerson extends Person{
    constructor(){
        super()
        this.name = new NullString
    }
}

class NullString{
    capitalize(){
        return null
    }
}

class NameString extends String{
    capitalize(){
        return new NameString(this[0].toUpperCase() + this.substring(1))
    }

    tigerify(){
        if(this === null){
            return null
        }else{
            return new NameString(`${this}, the tiger`)
        }
    }

    display(){
        if(this === null){
            return ''
        }else{
            return this.toString()
        }
    }
}

personOne = new Person("tony")
personTwo = new AnonymousPerson("tony")

function capitalize(string){
    if(string === null){
        return null
    }else{
        return string[0].toUpperCasee() + string.substring(1)
    }
    
}