// UNIT 2 ASSESSMENT: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in an array of numbers and returns an array with all the numbers multiplied by 3.

// a) Create a test with expect statements for each of the variables provided.
// b) Create the function that makes the test pass.
// Explain your code:
//created a test that would expect our 2 arrays to be returned mulitplied by 3 
//when tested i got ReferenceError: multiplyBy is not defined so we got our good fail
// then i created my function that would take in both arrays 
// used two returns, one for each array, to map through and multiply our value and return each element multiplied by 3 to make our test pass. 
// this took me a while even after watching the breakdown together. in the end i had put the wrong value in toequal for array two lol

// describe("multiplyBy3", () => {
//     it("return array multiplied by 3", () => {
//         expect(multiplyBy3(numbersArray1)).toEqual([18, 21, 24, 27, 30])
//         expect(multiplyBy3(numbersArray2)).toEqual([72, 81, 90, 99, 108])
//       }) 
// })   
// const multiplyBy3 = (array, array2) => {
//     return array.map((value) => value *3)
//     return array2.map((value) => value *3)
// }
// const numbersArray1 = [6, 7, 8, 9, 10]
// const numbersArray2 = [24, 27, 30, 33, 36]



    // const multiplyBy3 = (arrayOfNums, arrayOfNums2).map((value) => value *3)
    //     return value
    // const multiplyBy3 = (array1, array2) => {
    //     array.map((value) => {
    //      return value *3
    //     })
// const numbersArray1 = [6, 7, 8, 9, 10]
// Expected output: [18, 21, 24, 27, 30]
// const numbersArray2 = [24, 27, 30, 33, 36]
// Expected output: [72, 81, 90, 99, 108]


// --------------------1) Create a function that takes a object as an argument and decides if the number inside it is evenly divisible by three or not.
// a) Create a test with expect statements for each of the variables provided.
    // b) Create the function that makes the test pass.
// Explain your code:
//first created a test that input our objects with the output that is expected 
//ran test and as expected function was not defined
// created my function inputing the value of the objects given 
// wanted my funcion to specifically check if object values were divisible by 3
// once checked wanted the return to be as a string so used string interpolation and after hours of looking things over and frustrating myself into oblivion realized i was using '' instead of `` 🫠  
// describe("divBy3", () => {
//         it("returns string about whether or not number is divisble by 3", () => {
//             const object1 = { number :15 }
//             const object2 = { number: 0 }
//             const object3 = { number: -7 }
//             expect(divBy3(object1)).toEqual("15 is divisible by 3")
//             expect(divBy3(object2)).toEqual("0 is divisible by 3")
//             expect(divBy3(object3)).toEqual("-7 is not divisible by 3")
//         })
//     })
//     const divBy3 = (obj) => {
//         const { number } = obj
//         if (number % 3 === 0) {
//             return `${number} is divisible by 3`
//         } else {
//             return `${number} is not divisible by 3`
//         }
//     }
    
    // a) Create a test with expect statements for each of the variables provided.
// const object1 = { number :15 }
// // Expected output: "15 is divisible by three"
// const object2 = { number: 0 }
// // Expected output: "0 is divisible by three"
// const object3 = { number: -7 }
// Expected output: "-7 is not divisible by three"


// b) Create the function that makes the test pass.

// Explain your code:




// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.
// a) Create a test with expect statements for each of the variables provided.
// const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
// Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
// const randomNouns2 = ["temperature", "database", "chopsticks", "mango"]
// Expected output: ["Temperature", "Database", "Chopsticks", "Mango"]
// b) Create the function that makes the test pass.
// Explain your code:
// created test thats going to input our array of nouns and the expected out come with first letter in each string capitalized 
// ran first test and as expected function was not defined 
//defined the function inputing our arrays given 
// Wanted the function to iterate through array using .map going through each string in the array 
// next used big arrow to target each character at 0 position in the index to capitalize using to upper case
// was giving me a lot of trouble trying to complete the test was trying to make another return until i realized each array has a different amount of elements
// added a string slice to even out the arrays and the test ran after that thankfully  
describe("capArray", () => {
    it("return array with first letter in each string capitalized", () => {
        const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
        const randomNouns2 = ["temperature", "database", "chopsticks", "mango"]
        expect(capArray(randomNouns1)).toEqual(["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"])
        expect(capArray(randomNouns2)).toEqual(["Temperature", "Database", "Chopsticks", "Mango"])
      }) 
})   
const capArray = (arrays) =>{
    return arrays.map(string => 
        string.charAt(0).toUpperCase()+ string.slice(1)) 
    // return array2.map(string => 
    //     string.charAt(0).toUpperCase().slice(1)) 
    }    
