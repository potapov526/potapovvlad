const axios = require('axios');
const fs = require('fs');
const { randomBytes } = require('crypto');
const moment = require('moment');

// Function to fetch a random Chuck Norris joke
async function getRandomChuckNorrisJoke() {
    try {
        const response = await axios.get('https://api.chucknorris.io/jokes/random');
        return response.data.value;
    } catch (error) {
        throw new Error('Failed to fetch Chuck Norris joke');
    }
}

// Function to generate a random alphanumeric string
function generateRandomString(length) {
    return randomBytes(Math.ceil(length / 2)).toString('hex').slice(0, length);
}

// Function to calculate the factorial of a number
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

// Function to read a file and return its contents
function readFileContents(filePath) {
    try {
        return fs.readFileSync(filePath, 'utf8');
    } catch (error) {
        throw new Error('Failed to read file');
    }
}

// Function to format a date using moment.js
function formatDate(date, format) {
    return moment(date).format(format);
}

// Function to check if a number is prime
function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;

    if (num % 2 === 0 || num % 3 === 0) return false;

    let i = 5;
    while (i * i <= num) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
        i += 6;
    }

    return true;
}

module.exports = {
    getRandomChuckNorrisJoke,
    generateRandomString,
    factorial,
    readFileContents,
    formatDate,
    isPrime
};
