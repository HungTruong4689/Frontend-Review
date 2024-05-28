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

const lookupTable = {}
function memoizedFactorial(number) {
  if (number in lookupTable) {
    return lookupTable[number]
  } else {
    var reduceValue
    if (number < 2) {
      reduceValue = 1
    } else {
      reduceValue = number * memoizedFactorial(number - 1)
    }
    lookupTable[number] = reduceValue
    return reduceValue
  }
}

memoizedFactorial(3)
