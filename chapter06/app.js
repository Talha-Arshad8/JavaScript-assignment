// //q1
// var num = prompt('Enter a number and check  it is even or odd')
// if(num % 2 == 0 ) {
//     document.write(`<h2>${num} is even </h2>`)
// } else {
//     document.write(`<h2>${num} is odd </h2>`)
// }

// q13

// var side1 = prompt('Side 1')
// var side2 = prompt('Side 2')
// var side3 = prompt('Side 3')

// if(side1 == side2 && side2 == side3 ){
//     console.log(`triangle`)
// }
// else if(side1 === side2 || side2 === side3 || side1 === side3){
//     console.log(`isocelases triangle`)
// }

 //q13

// var alphabate = prompt('Enter alphabate and check its vowel aur consonanat')

// if(alphabate === 'a' || alphabate === 'e' || alphabate === 'i' || alphabate === 'o' || alphabate === 'u' || alphabate === 'A' || alphabate === 'E' || alphabate === 'I' || alphabate === 'O' || alphabate === 'U'){
//     console.log(`This is a vowel`)

// }else {
//     console.log(`This is a consonanat`)
// }

// q15

// var age = prompt('Enter your age and check ')

// if(age > 0 && age <= 12){
//     console.log(`child`)
// }
// else if(age > 13 && age <= 19){
//     console.log(`Teen age`)
// }
// else if(age > 20 && age <= 64){
//     console.log(`Adult`)
// }
// else{
//     console.log(`Senior`)
// }

//q10

// var claculation1 = prompt('Subject 1')
// var claculation2 = prompt('Subject 2')
// var claculation3 = prompt('Subject 3')

// var average = (claculation1 + claculation2 + claculation3) / 3;

// if(average >= '90'){
//     console.log(`Grade A`)
// }
// else if(average >= '80'){
//     console.log(`Grade B`)
// }
// else if(average >= '70'){
//     console.log(`Grade C`)

// }
// else{
//     console.log(`Fail`)
// }
//q2

// var number = prompt('Enter a number and check if it positive and negative')

// if(number > 0 ){
//     console.log(`This is a positive`)
// }
// else{
//     console.log(`This is a negative`)
// }

// var age = prompt('Enter your age and check are you eligible for give vote or not')

// if(age >= 18){
//     console.log(`Are you eligible for vote`)
// }
// else{
//     console.log(`Are you not eligible for vote`)
// }

var num = prompt(`Enter a number under 10 and check it`)

if(num < 5){
    console.log(`Small`)
}
else if(num >= 5 && num <= 10){
    console.log(`Medium`)
}
else{
    console.log(`large`)
}