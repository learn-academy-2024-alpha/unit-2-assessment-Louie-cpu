// UNIT 2 ASSESSMENT: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain WHY your initial answer was correct or incorrect.
// There is no need to change any of the code.

// --------------------1) What will this log?

const cohort = "Alpha 2024"
 //console.log(cohort.split(" "))

// a) Your answer: splits string in two seperate strings
// b) Verify and explain: when it has quotes in the paranthesis with a space it will split the string at that space which results in 2 different strings

// --------------------2) What will this log?

const greeter = (name) => {
 `Hello, ${name}!`
}
 //console.log(greeter("LEARN Student"))

// a) Your answer: 'Hello LEARN Student'
// b) Verify and explain: came back undefined bc function had no return so therefore was not invoked. Lol this one got me 

// --------------------3) What will this log?

const onlyOdds = [11, 12, 13, 14, 15].filter((number) => number % 2 !== 0)
// console.log(onlyOdds)

// a) Your answer: 11, 13, 15
// b) Verify and explain: so array was filtered and values that were odd were seperated into a new array. modulo 2 strictly equal to 0 would have been for even but the bang operator ! makes it filter for the odds instead.

// --------------------4) What will this log?

const myCodingSkills = {
  languages: ["JavaScript", "Ruby"],
  frameworks: ["React", "Ruby on Rails"],
  databases: "PostgreSQL",
  versionControl: "GitHub"
}
console.log(myCodingSkills.languages[0])

// a) Your answer: should call on the languages and return 0 in the index which would be javascript
// b) Verify and explain: calling on the object using dot notation will search through the object and if you specify with an index number in brackets it will log that part of the array

// --------------------5) What will this log?

class Learn {
  constructor(name) {
    this.student = name
    this.cohort = "Alpha"
    this.year = 2024
  }
}
const learnStudent = new Learn("George")
 //console.log(learnStudent)

// a) Your answer: student name will be George
// b) Verify and explain: returns the new name as well as the cohort and year. function was calling on the object as a whole as well as adding a new name to part of the object so it returned all the contents within
