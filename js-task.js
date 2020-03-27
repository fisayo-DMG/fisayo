let name = "Fisayo Aikomo";
let course = ["Node JS", "Git", "HTML & CSS", "Javascript"]

console.log(`My name is ${name} and my courses are ${course}`)

let oddNumbers = []
let evenNumbers = []

for (let i = 1; i <= 200; i++) {
    if(i % 2 === 0) {
        evenNumbers.push(i)
    }
    if(i % 2 !== 0) {
        oddNumbers.push(i)
    }
}

console.log(oddNumbers);
console.log(evenNumbers);