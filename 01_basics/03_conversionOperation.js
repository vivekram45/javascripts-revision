let score = "33"

console.log(typeof score) //string
console.log(typeof (score)); //string

let valueInNumber = Number(score)
console.log(typeof valueInNumber) //number

let book = "450"
let bookInNumber = Number(book)
console.log(typeof bookInNumber) //number

 let study = 45
 let studyInString = String(study)
 console.log(typeof studyInString) //string

 let pen = "34abc"
 let penInNumber = Number(pen)
    console.log(penInNumber) //NaN
    console.log(typeof penInNumber) //number

/*Q1. Why does penInNumber give NaN?

Number("34abc") tries to convert the entire string into a number. Since "34abc" contains letters (abc), it is not a valid number. Therefore, JavaScript returns NaN (Not-a-Number), which means the conversion failed. */

/*
  Q2. Why does typeof penInNumber give "number"?

NaN is a special value that belongs to JavaScript's Number data type. Even though it means "Not-a-Number," JavaScript still treats it as a numeric value. Therefore, typeof NaN returns "number".
*/

//"33" => NAN 
// "33abc" => NAN
// true => 1  ;  false => 0

let loggedIn = "Vivek"
let loggedInInNumber = Boolean(loggedIn)
console.log(loggedInInNumber) //true