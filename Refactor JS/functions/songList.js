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
var labelCounts = []
var labelProbabilities = []
var chordCountsInLabels = {}
var probabilityOfChordInLabels = {}

function train(chords, label) {
  songs.push([label, chords])
  labels.push(label)
  chords.forEach((chord) => {
    if (!allChords.includes(chord)) {
      allChords.push(chord)
    }
  })
  if (Object.keys(labelCounts).includes(label)) {
    labelCounts[label] = labelCounts[label] + 1
  } else {
    labelCounts[label] = 1
  }
}

function setLabelProbabilities() {
  Object.keys(labelCounts).forEach(function (label) {
    labelProbabilities[label] = labelCounts[label] / songs.length
  })
}

function setChordCountsInLabels() {
  songs.forEach(function (song) {
    if (chordCountsInLabels[song[0]] === undefined) {
      chordCountsInLabels[song[0]] = {}
    }
    song[1].forEach(function (chord) {
      if (chordCountsInLabels[song[0]][chord] > 0) {
        chordCountsInLabels[song[0]][chord] += 1
      } else {
        chordCountsInLabels[song[0]][chord] = 1
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
  var classified = {}
  Object.keys(labelProbabilities).forEach(function (difficulty) {
    var first = [labelProbabilities[difficulty] + smoothing]
    chords.forEach(function (chord) {
      var probabilityOfChordInLabel =
        probabilityOfChordInLabels[difficulty][chord]
      if (probabilityOfChordInLabel) {
        first = first * (probabilityOfChordInLabel + smoothing)
      }
    })

    classified[difficulty] = first
  })
  console.log(classified)
}

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
