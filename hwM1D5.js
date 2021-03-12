/*
    ASSIGNMENT RULES
    - All the answers must be written in JavaScript
    - The solution must be pushed to the repository and be available for the tutors by the end of the day
    - You can ask for help, reach the Teaching Assistants if needed
    - You can google / use StackOverflow BUT we suggest you to use just the material provided
    - You can test your code in a separate file or de-commenting the single exercises in this one.
      You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.
    - Complete as many exercise that you can
    - Publish them into your own GitHub account and upload repository link on Eduflow before 16.30 (Berlin Time) 
*/

//JS Basics

/* Ex.A
   Create a variable called "test" and assign a string to it.
*/

const test = "let's eat a pizza"

/* Ex.B
    Create a variable called "sum" and assign to it the result of the sum between 10 and 20.
*/

const sum = 10 + 20

/* Ex.C 
    Create a variable called "random" and assign to it a random number between 0 and 20 (it should be randomly created at each execution).
*/

const random = Math.round(Math.random()*20)

// console.log(random)

/* Ex.D
    Create a variable called "me" and assign to it an object containing the following information: name = your name, surname = your surname, age = your age.
*/

const me = {
    name: "Gregorio",
    surname: "Fracassi",
    age: 32
}

/* Ex.E 
    Programmatically remove the age property from the previously create object.
*/

const removeAge = (obj) => delete obj.age

// removeAge(me)
// console.log(me)

/* Ex.F 
   Programmatically add to the object me an array called "skills", containing the programming languages you know right now.
*/

const addSkills = (obj, arr) => obj.skills = arr

addSkills(me, ["js", "css", "kebab", "falafel"])

// console.log(me)


/* Ex.G 
   Programmatically remove the last skill from the "skills" array inside the "me" object.
*/

const removeLast = (arr1) => arr1.splice(arr1.length - 1, 1)

removeLast(me.skills)

// console.log(me)

// JS Functions
/* Ex.1
    Write a function called "dice"; it should randomize an integer number between 1 and 6.
*/

const dice = () => Math.round(Math.random()*5) + 1

// console.log(dice())

/* Ex.2 
    Write a function called "whoIsBigger" which receives 2 numbers as parameters and returns the biggest one.
*/

const whoIsBigger = (n1, n2) => n1 > n2 ? n1 : n2 

// console.log(whoIsBigger(18,9))

/* Ex.3
    Write a function called "splitMe" which receives a string as a parameter and returns an array with every word in that string.
    Ex. splitMe("I love coding") => returns ["I", "Love", "Coding"]
*/

const splitMe = (str) => str.split(" ") 

// console.log(splitMe("Andiamo a giocare a tennis"))

/* Ex.4
    Write a function called "deleteOne" which receives a string and a boolean as parameters. If the boolean value is true it should return the string without the first letter, otherwise it should remove the last one from it.
*/

const deleteOne = (str, bool) => bool ? str.slice(1) : str.slice(0, str.length - 1)

// console.log(deleteOne("ciao", false))

/* Ex.5
   Write a function called "onlyLetters" which receives a string as a parameter and returns it removing all the digits.
   Ex.: onlyLetters("I have 4 dogs")  => returns "I have  dogs"
*/

const onlyLetters = (str) => {
    let splitArr = str.split(" ")
    const notInt = (value) => !Number.isInteger(parseInt(value))
    return splitArr.filter(notInt).join(" ")
}

// console.log(onlyLetters("andiamo dal macellaio a prendere 5 salsicce"))
// console.log(Number.isInteger(NaN))

/* Ex.6 
   Write a function called "isThisAnEmail" which receives a string as a parameter and returns true if the string is a valid email address.
*/

const isThisAnEmail = (mail) => {
    if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(mail)) {
        return true
    } else {
        return false
    }
}

// console.log(isThisAnEmail("mama@mfjea.it"))

/* Ex.7
   Write a function called "whatDayIsIt" that should return the current day of the week.
*/

const weekDays = ["monday", "tuesday", "wednsday", "thursday", "friday", "saturday", "sunday"]
const whatDayIsIt = () => weekDays[(new Date()).getDay() - 1 ]

// console.log(whatDayIsIt())

/* Ex.8
    Write a function called "rollTheDices" which receives a number as a parameter.
    It should invoke the dice() function defined in Ex1 the specified amount of times,
    and return an object containing a "sum" property holding the sum of all values extracted
    and a "values" array containing the single values of the dicerolls themselves.
    Example: RollTheDices(3) => returns {
        sum: 10
        values: [3, 3, 4]
    }
*/

const reducer = (accum, cValue) => accum + cValue

const rollThthrowDices = (n) => {
    let x = 0
    const objResult = {}
    throws = []
    while (x < n) {
        throws.push(dice())
        x++
    }
    objResult.values = throws
    objResult.sum = throws.reduce(reducer)
    return objResult
}

// console.log(rollThthrowDices(3))

/* Ex.9
   Write a function called "howManyDays" which receives a date as a parameter and should return the number of days passed since that date.
*/

millsToDays = 1000 * 3600 * 24 
const daysToday = new Date().getTime() / millsToDays
const howManyDays = (givenDate) => daysToday - new Date(givenDate).getTime() / millsToDays

// console.log(howManyDays("03/10/2021"))

/* Ex.10
   Write a function called "isTodayMyBirthday" which should return true if today's your birthday, false otherwise.
*/

const dayMo = (dayDate) => [new Date(dayDate).getMonth(), new Date(dayDate).getDate()]
const isTodayMyBirthday = (fullDate) => {
    return dayMo(fullDate)[0] === dayMo(new Date())[0] && dayMo(fullDate)[1] === dayMo(new Date())[1]
}

// console.log(isTodayMyBirthday("03/12/2018"))

// JS Arrays // Objs
// NOTE: movies array is defined at the end of this file!

/* Ex.11
Write a function called "deleteProp" which receives an object and a string as parameters, and returns the given object after deleting its property named as the given string.
*/

const deleteProp = (obj, str) => delete obj.str  

/* Ex.12 
Write a function called "olderMovie" which finds the oldest movie in the array provided at the end of this file.
*/

const olderMovie = (arr) => {
    yearArr = []
    arr.forEach(
        movie =>
        yearArr.push(movie.Year)
        )
        lowestYear = Math.min(...yearArr)
        return arr.find( mov => parseInt(mov.Year) === lowestYear)
    }
    
    // console.log(olderMovie(movies))
    
/* Ex.13
Write a function called "countMovies" which returns the number of movies contained in the array provided at the end of this file.
*/
   
const countMovies = (arr) => arr.length
   
//  console.log(countMovies(movies))

/* Ex.14
Write a function called "onlyTheTitles" which creates an array with just the titles of the movies provided in the array at the end of the file.
*/

const onlyTheTitles = (arr) => {
    const titles = []
    arr.forEach(
        x =>
        titles.push( x.Title )
    )
    return titles
}

// console.log(onlyTheTitles(movies))

/* Ex.15
Write a function called "onlyInThisMillennium" which returns only the movies produced in this millennium.
*/

const onlyInThisMillennium = (arr) => {
    const thisMill = (mov) => parseInt(mov.Year) > 1999
    return arr.filter(thisMill)
} 

// console.log(onlyInThisMillennium(movies))

/* Ex.16 
Write a function called "getMovieById" which receives an id as a parameter and returns the movie with the given id.
*/

const getMovieById = (arr, id) => arr.find( x => x = id )

// console.log(getMovieById(movies, "tt2395427"))

/* Ex.17
Write a function called "sumAllTheYears" which returns the sum of all the years in which the movies provided have been produced.
*/

const sumAllTheYears = (arr) => {
    counter = 0
    arr.forEach(
        x =>
        counter += parseInt(x.Year)
    )
    return counter
}

// console.log(sumAllTheYears(movies))

/* Ex.18
Write a function called "searchByTitle" which receives a string as a parameter and returns all the movies which contain that string in the title.
*/

const searchByTitle = (arr, str) => {
    movs = []
    arr.forEach(
        x =>
        x.Title.includes(str) ? movs.push(x) : null
    )
    return movs
}

// console.log(searchByTitle(movies, "Ultron"))

/* Ex.19
Write a function called "searchAndDivide" which receives a string as a parameter and returns an object;
this object should contain an array called "match", made by all the movies which contain the given string in the title,
and another array "unmatch" with all the remaining ones.
*/

const searchAndDivide = (arr, str) => {
    mat = []
    unmat = []
    obj = {}
    arr.forEach(
        x =>
        x.Title.includes(str) ? mat.push(x) : unmat.push(x)
    )
    obj.match = mat
    obj.unmatch = unmat
    return obj
}

// console.log(searchAndDivide(movies, "The"))

/* Ex.20
Write a function called "removeIndex" which receives a number as a parameter and returns the movies array without the element in the given position.
*/

const removeIndex = (arr, num) => {
    arr.splice(num, 1)
    return arr
}

// console.log(removeIndex(movies, 0))

// [EXTRAS] JS Advanced

/* Ex.21
Create a function called "halfTree" which receives a number as a parameter and builds an "*" half tree with the given height.
Example:
halfTree(3)
*
**
***
*/

/* Ex.22 
Create a function called "tree" which receives a number as a parameter and builds an "*" tree with the given height.
Example: 
tree(3)
*  
*** 
*****
*/

/* Ex.23
Create a function called "isItPrime" that receives a number as a parameter and returns true if the given number is a prime number.
*/

/* This movies array is used throughout the exercises. Please don't change it :)  */
const movies = [
    {
        Title: "The Lord of the Rings: The Fellowship of the Ring",
        Year: "2001",
        imdbID: "tt0120737",
        Type: "movie",
        Poster:
        "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
    },
    {
        Title: "The Lord of the Rings: The Return of the King",
        Year: "2003",
        imdbID: "tt0167260",
        Type: "movie",
        Poster:
        "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
    },
    {
        Title: "The Lord of the Rings: The Two Towers",
        Year: "2002",
        imdbID: "tt0167261",
        Type: "movie",
        Poster:
        "https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
    },
    {
        Title: "Lord of War",
        Year: "2005",
        imdbID: "tt0399295",
        Type: "movie",
        Poster:
        "https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
    },
    {
        Title: "Lords of Dogtown",
        Year: "2005",
        imdbID: "tt0355702",
        Type: "movie",
        Poster:
        "https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
    },
    {
        Title: "The Lord of the Rings",
        Year: "1978",
        imdbID: "tt0077869",
        Type: "movie",
        Poster:
        "https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
    },
    {
        Title: "Lord of the Flies",
        Year: "1990",
        imdbID: "tt0100054",
        Type: "movie",
        Poster:
        "https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg",
    },
    {
        Title: "The Lords of Salem",
        Year: "2012",
        imdbID: "tt1731697",
        Type: "movie",
        Poster:
        "https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg",
    },
    {
        Title: "Greystoke: The Legend of Tarzan, Lord of the Apes",
        Year: "1984",
        imdbID: "tt0087365",
        Type: "movie",
        Poster:
        "https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg",
    },
    {
        Title: "Lord of the Flies",
        Year: "1963",
        imdbID: "tt0057261",
        Type: "movie",
        Poster:
        "https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg",
    },
    {
        Title: "The Avengers",
        Year: "2012",
        imdbID: "tt0848228",
        Type: "movie",
        Poster:
        "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
    },
    {
        Title: "Avengers: Infinity War",
        Year: "2018",
        imdbID: "tt4154756",
        Type: "movie",
        Poster:
        "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg",
    },
    {
        Title: "Avengers: Age of Ultron",
        Year: "2015",
        imdbID: "tt2395427",
        Type: "movie",
        Poster:
        "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg",
    },
    {
        Title: "Avengers: Endgame",
        Year: "2019",
        imdbID: "tt4154796",
        Type: "movie",
        Poster:
        "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",
    },
]
