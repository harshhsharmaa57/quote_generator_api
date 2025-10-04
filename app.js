
const express = require('express');


const app = express();
const port = 8080;


const quotes = [
    {
        "quote": "The greatest glory in living lies not in never falling, but in rising every time we fall.",
        "author": "Nelson Mandela"
    },
    {
        "quote": "The way to get started is to quit talking and begin doing.",
        "author": "Walt Disney"
    },
    {
        "quote": "Your time is limited, so don't waste it living someone else's life.",
        "author": "Steve Jobs"
    },
    {
        "quote": "If life were predictable it would cease to be life, and be without flavor.",
        "author": "Eleanor Roosevelt"
    },
    {
        "quote": "It is during our darkest moments that we must focus to see the light.",
        "author": "Aristotle"
    },
    {
        "quote": "The only thing we have to fear is fear itself.",
        "author": "Franklin D. Roosevelt"
    },
    {
        "quote": "Strive not to be a success, but rather to be of value.",
        "author": "Albert Einstein"
    }
];

app.get('/quote', (req, res) => {
   
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];

    res.json(randomQuote);
});


app.listen(port, () => {
    console.log("Simple Quote Generator listening");
});