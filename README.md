# potapovvlad

potapovvlad is a Node.js module for flowing through quantum-powered utilities.

## Installation

You can install this module using npm: `npm install potapovvlad`

## Usage

```javascript
const quantumFlow = require('quantum-flow');

// Get a random Chuck Norris joke
quantumFlow.getRandomChuckNorrisJoke()
    .then(joke => console.log(joke))
    .catch(err => console.error(err));

// Generate a random alphanumeric string of length 10
console.log(quantumFlow.generateRandomString(10)); 

// Calculate factorial
console.log(quantumFlow.factorial(5)); // Output: 120

// Read file contents
const fileContents = quantumFlow.readFileContents('path/to/file.txt');
console.log(fileContents);

// Format date
const formattedDate = quantumFlow.formatDate(new Date(), 'YYYY-MM-DD');
console.log(formattedDate);

// Check if a number is prime
console.log(quantumFlow.isPrime(17)); // Output: true
console.log(quantumFlow.isPrime(20)); // Output: false
```



