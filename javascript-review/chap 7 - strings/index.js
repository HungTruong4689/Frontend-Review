var hello = 'hello'
var world = 'world'

//String function
var intString = String(32)
var booleanString = String(true)

//Covert toString
var intString2 = (5332).toString()

String.fromCharCode(104,101,108,108,111) //hello

// new function to create the string object
var objectString = new String("Yes, I'm a String object")
typeof objectString //object
typeof objectString.valueOf //string

//concatenating strings
var foo = "foo"
var bar = "bar"
foo.concat(bar)

//Reverse the string
function reverseString(str){
    return str.split().reverse().join('')
}

//spread parameters
function reverseString2(str){
    return [...String(str)].reverse().join('')
}