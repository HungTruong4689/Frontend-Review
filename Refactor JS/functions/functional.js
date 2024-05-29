//Recursive
function find(toFind, array) {
  if (array[0] === toFind) {
    return 'found'
  }
  if (array.length === 0) {
    return 'not found'
  }
  return find(toFind, array.slice(1))
}

console.log(find(1, [1, 2, 3, 4, 5]))
console.log(find(10, [1, 2, 3, 4, 5]))
console.log(find(10, []))
console.log(find(10, [10]))
console.log(find(10, [1, 2, 3, 4, 5, 10]))
console.log(find(10, [1, 2, 3, 4, 5, 10, 10]))
console.log(find(10, [1, 2, 3, 4, 5, 10, 10, 10]))
console.log(find(10, [1, 2, 3, 4, 5, 10, 10, 10, 10]))
console.log(find(10, [1, 2, 3, 4, 5, 10, 10, 10, 10, 10]))
console.log(find(10, [1, 2, 3, 4, 5, 10, 10, 10, 10, 10, 10]))
console.log(find(10, [1, 2, 3, 4, 5, 10, 10, 10, 10, 10, 10, 10]))
console.log(find(10, [1, 2, 3, 4, 5, 10, 10, 10, 10, 10, 10, 10, 10]))
console.log(find(10, [1, 2, 3, 4, 5, 10, 10, 10, 10, 10, 10, 10, 10, 10]))
console.log(find(10, [1, 2, 3, 4, 5, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10]))

function factorial(number) {
  if (number === 0) {
    return 1
  }
  return number * factorial(number - 1)
}
factorial(3)

function memoizedFactorial(number, lookupTable = {}) {
  if (number in lookupTable) {
    console.log('cached')
    return lookupTable[number]
  } else {
    console.log('calculating')
    var reduceValue
    if (number < 2) {
      reduceValue = 1
    } else {
      reduceValue =
        number * memoizedFactorial(number - 1, lookupTable)['result']
    }
    lookupTable[number] = reduceValue
    return { result: reduceValue, lookupTable: lookupTable }
  }
}

memoizedFactorial(3)

//avoiding reassignment in conditional tests
function func(x) {
  if (x >= 2) {
    return x + 2
  } else {
    return x
  }
}

function func(x) {
  return x >= 2 ? x + 7 : x
}
