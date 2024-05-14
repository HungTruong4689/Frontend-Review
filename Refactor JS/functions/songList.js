function fileName() {
  var theError = new Error('here I am')
}
const easy = 'easy'
const immediate = 'immediate'
const hard = 'hard'
//dummies data
const imagine = ['c', 'cmaj7', 'f', 'am', 'dm', 'g', 'e7']
const anotherSong = ['d', 'dmaj7', 'g', 'bm', 'em', 'a', 'f#7']
const oneMoreSong = ['a', 'amaj7', 'd', 'dm', 'e', 'e7', 'bm']
const songFour = ['g', 'gmaj7', 'c', 'em', 'a', 'am', 'd7']
const songFive = ['e', 'emaj7', 'a', 'c#m', 'f#m', 'bm', 'e7']
const songSix = ['f', 'fmaj7', 'bb', 'd#', 'g7', 'c', 'cmaj7']
const songSeven = ['d', 'dmaj7', 'g', 'gmaj7', 'a7', 'e', 'e7']

var songs = []
var labels = []
var allChords = []
var labelCounts = new Map()
var labelProbabilities = new Map()
var chordCountsInLabels = {}
var probabilityOfChordInLabels = {}

function train(chords, label) {
  songs.push({ label: label, chords: chords })
  labels.push(label)
  chords.forEach((chord) => {
    if (!allChords.includes(chord)) {
      allChords.push(chord)
    }
  })
  if (Array.from(labelCounts.keys()).includes(label)) {
    labelCounts.set(label, labelCounts.get(label) + 1)
  } else {
    labelCounts.set(label, 1)
  }
}

function setLabelProbabilities() {
  labelCounts.forEach(function (_count, label) {
    labelProbabilities.set(label, labelCounts.get(label) / songs.length)
  })
}

function setChordCountsInLabels() {
  songs.forEach(function (song) {
    if (chordCountsInLabels[song.label] === undefined) {
      chordCountsInLabels[song.label] = {}
    }
    song.chords.forEach(function (chord) {
      if (chordCountsInLabels[song.label][chord] > 0) {
        chordCountsInLabels[song.label][chord] += 1
      } else {
        chordCountsInLabels[song.label][chord] = 1
      }
    })
  })
}
function setProbabilityOfChordsInLabels() {
  probabilityOfChordInLabels = chordCountsInLabels

  Object.keys(probabilityOfChordInLabels).forEach(function (difficulty) {
    Object.keys(probabilityOfChordInLabels).forEach(function (chord) {
      probabilityOfChordInLabels[difficulty][chord] /= songs.length
    })
  })
}

train(imagine, easy)
setLabelProbabilities()
setChordCountsInLabels()
setProbabilityOfChordsInLabels()

function classifyv_1(chords) {
  const smoothing = 1.01
  console.log(labelProbabilities)
  var classified = new Map()
  labelProbabilities.forEach(function (_probabilities, difficulty) {
    var first = [labelProbabilities.get(difficulty) + smoothing]
    chords.forEach(function (chord) {
      var probabilityOfChordInLabel =
        probabilityOfChordInLabels[difficulty][chord]
      if (probabilityOfChordInLabel) {
        first = first * (probabilityOfChordInLabel + smoothing)
      }
    })

    classified.set(difficulty, first)
  })
  console.log(classified)
}

//Sets
var allChords = new Set()

chords.forEach((chord) => {
  allChords.add(chord)
})

function trainAll() {
  train(imagine, easy)
  train(anotherSong, easy)
  train(oneMoreSong, easy)
  train(songFour, immediate)
  train(songFive, immediate)
  train(songSix, hard)
  train(songSeven, hard)
}

//reduce function
;[2, 3, 4].reduce(function (result, element) {
  return result
}, 10)

var songList = {
  songs: [],
  addSong: function (name, chords, difficulty) {
    this.songs.push({
      name: name,
      chords: chords,
      difficulty: difficulty,
    })
  },
}

//Handling the Remaining Global Variables
//update version
var songList1 = {
  difficuties: ['easy', 'medium', 'hard'],
  songs: [],
  addSong: function (name, chords, difficulty) {
    this.songs.push({
      name: name,
      chords: chords,
      difficulty: this.difficuties[difficulty],
    })
  },
}
function setSongs() {
  songList.addSong('imagine', ['c', 'cmaj7', 'f', 'am', 'dm', 'g', 'e7'], 0)
  songList.addSong('imagine', ['c', 'cmaj7', 'f', 'am', 'dm', 'g', 'e7'], 0)
  songList.addSong(
    'anotherSong',
    ['d', 'dmaj7', 'g', 'bm', 'em', 'a', 'f#7'],
    0,
  )
  songList.addSong('oneMoreSong', ['a', 'amaj7', 'd', 'dm', 'e', 'e7', 'bm'], 1)
  songList.addSong('songFour', ['g', 'gmaj7', 'c', 'em', 'a', 'am', 'd7'], 2)
  songList.addSong('songFive', ['e', 'emaj7', 'a', 'c#m', 'f#m', 'bm', 'e7'], 2)
  songList.addSong('songSix', ['f', 'fmaj7', 'bb', 'd#', 'g7', 'c', 'cmaj7'], 1)
  songList.addSong(
    'songSeven',
    ['d', 'dmaj7', 'g', 'gmaj7', 'a7', 'e', 'e7'],
    0,
  )
}

//Making data independent from the program
describe('the file', function () {
  setSongs() // moved and deleted from inside of trainAll
  trainAll()
})

//Copy object
//deep copy and shallow copy cloning
// freeze, assign and seal

const classifier = {
  labelCounts: new Map(),
  labelProbabilities: new Map(),
  chordCountsInLabels: new Map(),
  smoothing: 1.01,
  songList: {
    allChords: new Set(),
    difficuties: ['easy', 'medium', 'hard'],
    songs: [],
    addSong: function (name, chords, difficulty) {
      this.songs.push({
        name: name,
        chords: chords,
        difficulty: this.difficuties[difficulty],
      })
    },
    chordCountForDifficulty: function (difficulty, testChord) {
      return this.songList.songs.reduce((counter, song) => {
        if (song.difficulty === difficulty) {
          counter += song.chords.filter((chord) => {
            return chord === testChord
          }).length
        }
        return counter
      }, 0)
    },
    likelihoodsFromChord: function (difficulty, chord) {
      return (
        this.chordCountForDifficulty(difficulty, chord) /
        this.songList.songs.length
      )
    },
    valueForChordDifficulty: function (difficulty, chord) {
      const value = this.likelihoodsFromChord(difficulty, chord)
      return value ? value + this.smoothing : 1
    },
    trainAll: function () {
      this.songList.songs.forEach((song) => {
        this.train(song.chords, song.difficulty)
      })
      this.setLabelProbabilities()
    },
    train: function (chords, label) {
      chords.forEach((chord) => {
        this.songList.allChords.add(chord)
      })
      if (Array.from(this.labelCounts.keys()).includes(label)) {
        this.labelCounts.set(label, this.labelCounts.get(label) + 1)
      } else {
        this.labelCounts.set(label, 1)
      }
    },
    setLabelProbabilities: function () {
      this.labelCounts.forEach((_count, label) => {
        this.labelProbabilities.set(
          label,
          this.labelCounts.get(label) / this.songList.songs.length,
        )
      })
    },
    classify: function (chords) {
      return new Map(
        Array.from(this.labelProbabilities.entries()).map(
          (labelWithProbability) => {
            const difficulty = labelWithProbability[0]
            return [
              difficulty,
              chords.reduce(
                (total, chord) => {
                  return total * this.valueForChordDifficulty(difficulty, chord)
                },
                this.labelProbabilities.get(difficulty) + this.smoothing,
              ),
            ]
          },
        ),
      )
    },
  },
}

//Bringing classify into the classifier
function classify(chords) {
  const smoothing = 1.01
  const classified = new Map()
  classifier.labelProbabilities.forEach(function (_probabilities, difficulty) {
    const likelihoods = [
      classifier.labelProbabilities.get(difficulty) + smoothing,
    ]
    chords.forEach(function (chord) {
      const probabilityOfChordInLabel =
        classifier.probabilityOfChordInLabel.get(difficulty)[chord]
      if (probabilityOfChordInLabel) {
        likelihoods.push(probabilityOfChordInLabel + smoothing)
      }
    })

    const totalLikelihood = likelihoods.reduce((total, index) => {
      return total * index
    })
    classified.set(difficulty, totalLikelihood)
    return classified
  })
}

function valueForChordDifficulty(difficulty, chord) {
  const value = this.probabilityOfChordInLabels.get(difficulty)[chord]
}
