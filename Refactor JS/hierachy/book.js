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
class EnglishWord1 extends Word{};
class JapaneseWord1 extends Work{}

//instance of 