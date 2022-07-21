// For loops
// console.log(1)
// console.log(2)
// console.log(3)
// console.log(4)
// console.log(5)
// console.log(6)
// console.log(7)
// console.log(8)
// console.log(9)
// console.log(10)
// for (let i = 1; i <= 10; i++) {
//     console.log(i);
// }
// for (let i = 1; i <= 20; i += 2) {
//     console.log(i);
// }
// for (let i = 100; i >= 0; i -= 10) {
//     console.log(i);
// }
// for (let i = 25; i >= 0; i -= 5) {
//     console.log(i);
// }

// Inifinite loop
// See example course
// Looping over arrays

// Exercise
// const people = ["Scooby", "Velma", "Daphne", "Shaggy", "Fred"];
// for (let i = 0; i < people.length; i++) {
//     console.log(people[i].toUpperCase());
// }

// Nested loops
// const seatingChart = [
//     ["Kristen", "Erik", "Namita",],
//     ["Geoffrey", "Juanita", "Antonio", "Kevin"],
//     ["Yuma", "Sakura", "Jack", "Erika"]
// ];

// for (let i = 0; i < seatingChart.length; i++) {
//     const row = seatingChart[i];
//     console.log(`ROW #${i + 1}`)
//     for (let j = 0; j < row.length; j++) {
//         console.log(row[j])
//     }
// }

// While loop
// let count = 0;
// while (count < 10) {
//     count++;
//     console.log(count)
// }
// const SECRET = "BabyHippo";

// let guess = prompt("enter the secret code...");
// while (guess !== SECRET) {
//     guess = prompt("enter the secret code...");
// }
// console.log("CONGRATS YOU GOT THE SECRET!!")

// The break keyword
// let input = prompt("Hey, say something!");
// while (true) {
//     input = prompt(input);
//     if (input.toLowerCase() === "stop copying me") break;
// }
// console.log("OK YOU WIN!!")

// Guessing game
// let maximum = parseInt(prompt("Enter the maximum number!"));
// while (!maximum) {
//     maximum = parseInt(prompt("Enter a valid number!"));
// }

// const targetNum = Math.floor(Math.random() * maximum) + 1;
// console.log(targetNum);

// let guess = parseInt(prompt("Enter your first guess"));
// let attempts = 1;

// while (parseInt(guess) !== targetNum) {
//     if (guess === 'q') break;
//     attempts++;
//     if (guess > targetNum) {
//         guess = prompt("Too high! Enter a new guess:");
//     } else {
//         guess = prompt("Too low! Enter a new guess:");
//     }
// }
// if (guess === 'q') {
//     console.log("OK, YOU QUIT!")
// } else {
//     console.log("CONGRATS YOU WIN")
//     console.log(`YOU GOT IT! It took you ${attempts} guesses`)
// }

// For...Of Loop
// Example 1
// const subreddits = ['cringe', 'books', 'chickens', 'pics', 'soccer']

// for (let i = 0; i < subreddits.length; i++) {
//     console.log(`Visit reddit.com/r/${subreddits[i]}`)
// }

// for (let subreddit of subreddits) {
//     console.log(`Visit reddit.com/r/${subreddit}`)
// }
// Example 2
// const seatingChart = [
//     ["Kristen", "Erik", "Namita",],
//     ["Geoffrey", "Juanita", "Antonio", "Kevin"],
//     ["Yuma", "Sakura", "Jack", "Erika"]
// ];

// for (let i = 0; i < seatingChart.length; i++) {
//     const row = seatingChart[i];
//     for (let j = 0; j < row.length; j++) {
//         console.log(row[j])
//     }
// }

// for (let row of seatingChart) {
//     for (let student of row) {
//         console.log(student);
//     }
// }
// Example 3
// for (let char of "hello world") {
//     console.log(char);
// }

// // Practice
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]; //DON'T CHANGE THIS LINE PLEASE!

// // WRITE YOUR LOOP BELOW THIS LINE:
// for (let num of numbers) {
//     console.log(Math.pow(num, 2));
// }



