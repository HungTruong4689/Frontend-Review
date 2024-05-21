//version 1
class EnglishWord{
    constructor(word){
        this.word = word;
    }
    count(){
        return this.word.length;
    }
}

class JapaneseWord{
    constructor(word){
        this.word = word;
    }
    count(){
        return this.word.length;
    }
}

const japaneseWord = new JapaneseWord('s')

class Word{
    constructor(word){
        this.word = word
    }

    //instance of
    lookUp(){
        if(this instanceof JapaneseWord){
            return `http://jisho.org/search/${this.word}`
        }else{
            return `https://en.wikipedia.org/wiki/${this.word}`
        }
    }
    count(){
        return this.word.length;
    }
}

//version extend
class EnglishWord1 extends Word{
    constructor(word){
        super(word)
        this.language = "English"
    }
};
class JapaneseWord1 extends Word{
    constructor(word){
        super(word)
        this.language = "Japanese"
    }
}

class Word2{
    constructor(word,language,lookUpUrl){
        this.word = word
        this.language = language
        this.lookUpUrl = lookUpUrl
    }

    //instance of
    lookUp(){
        return this.lookUpUrl + this.word
    }
    count(){
        return this.word.length;
    }
}

class EnglishWord2 extends Word2{
    constructor(word){
        super(word)
        this.language = "English"
        this.lookUpUrl = `https://en.wikipedia.org/wiki/`
    }
};

class JapaneseWord2 extends Word2{
    constructor(word){
        super(word)
        this.language = "Japanese"
        this.lookUpUrl = `http://jisho.org/search/`
    }
}

//Object Literals
const word = {
    count(){
        return this.word.length
    },
    lookup(){
        return this.lookUpUrl + this.word
    }
}

const englishWord = Object.create(word)
englishWord.word = 'dog'
englishWord.language = "English"
englishWord.lookUpUrl = `https://en.wikipedia.org/wiki/`

//ES2015
const englishWord2 = Object.assign(Object.create(word),{word:"dog",language: "English", lookUpUrl:`https://en.wikipedia.org/wiki/` })

//Factory function
const englishWordFactory = (theWord) =>{
    return Object.assign(Object.create(word),{
        word:theWord,
        language: "English", 
        lookUpUrl:`https://en.wikipedia.org/wiki/` 
    })
}

//prototype
japaneseWord.prototype = word
word.reportLanguage = function(){
    return `The language is : ${this.language}`
}

//Recap
//Object literals
//Classes (uses new)
//constructor functions (uses new)
//Factory function (use returns as object)
//Object.assign and Object.create

const myPet = Object.assign(Object.create(animal),barky,bitey)

//other way
const myPet2 = Object.assign({},animal,barky,bitey)

animal.hasBankAccount = false