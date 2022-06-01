const fs = require('fs')

const posts = fs.readFileSync('posts.txt', 'utf8').split('\n');

// a function that generates a random number between 120000 and 900000
function randomNumber() {
  return Math.floor(Math.random() * (900000 - 120000)) + 120000;
}

// a function that adds two numbers
function add(a, b) {
  return a + b;
}


posts.forEach((post) => {
  console.log(randomNumber());
} );

