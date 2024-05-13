function fileName(){
    var theError = new Error("here I am")
}

//dummies data
const imagine = ['c', 'cmaj7', 'f', 'am', 'dm', 'g', 'e7'];
const anotherSong = ['d', 'dmaj7', 'g', 'bm', 'em', 'a', 'f#7'];
const oneMoreSong = ['a', 'amaj7', 'd', 'dm', 'e', 'e7', 'bm'];
const songFour = ['g', 'gmaj7', 'c', 'em', 'a', 'am', 'd7'];
const songFive = ['e', 'emaj7', 'a', 'c#m', 'f#m', 'bm', 'e7'];
const songSix = ['f', 'fmaj7', 'bb', 'd#', 'g7', 'c', 'cmaj7'];
const songSeven = ['d', 'dmaj7', 'g', 'gmaj7', 'a7', 'e', 'e7'];

var songList = {
    songs: [],
    addSong: function(name,chords, difficulty){
        this.songs.push({
            name: name,
            chords:chords, 
            difficulty:difficulty
        })
    }
}

//Handling the Remaining Global Variables
//update version
var songList1 = {
    difficuties: ['easy', 'medium','hard'],
    songs: [],
    addSong: function(name,chords, difficulty){
        this.songs.push({
            name: name,
            chords:chords, 
            difficulty:this.difficuties[difficulty]
        })
    }
}
function setSongs(){
    songList.addSong('imagine',['c','cmaj7','f','am','dm','g','e7'],0)
    songList.addSong('imagine', ['c', 'cmaj7', 'f', 'am', 'dm', 'g', 'e7'], 0);
    songList.addSong('anotherSong', ['d', 'dmaj7', 'g', 'bm', 'em', 'a', 'f#7'], 0);
    songList.addSong('oneMoreSong', ['a', 'amaj7', 'd', 'dm', 'e', 'e7', 'bm'], 1);
    songList.addSong('songFour', ['g', 'gmaj7', 'c', 'em', 'a', 'am', 'd7'], 2);
    songList.addSong('songFive', ['e', 'emaj7', 'a', 'c#m', 'f#m', 'bm', 'e7'], 2);
    songList.addSong('songSix', ['f', 'fmaj7', 'bb', 'd#', 'g7', 'c', 'cmaj7'], 1);
    songList.addSong('songSeven', ['d', 'dmaj7', 'g', 'gmaj7', 'a7', 'e', 'e7'], 0);
}

//Making data independent from the program
describe("the file", function(){
    setSongs(); // moved and deleted from inside of trainAll
    trainAll();
})

//Bringing classify into the classifier
function classify(chords){
    const smoothing = 1.01;
    const classified = new Map();
    classifier.labelProbabilities.forEach(
        function(_probabilities,difficulty){
            const likelihoods = [classifier.labelProbabilities.get(difficulty) + smoothing];
            chords.forEach(function(chord){
                const probabilityOfChordInLabel = classifier.probabilityOfChordInLabel.get(difficulty)[chord];
                if(probabilityOfChordInLabel){
                    likelihoods.push(probabilityOfChordInLabel + smoothing)
                }
            })

            const totalLikelihood = likelihoods.reduce((total,index)=>{
                return total *index;
            })
            classified.set(difficulty,totalLikelihood)
            return classified;
        }
        
    )
    
}