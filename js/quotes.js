const quotes=[
    {
        quote:"Turn your obstacles into opportunities and your problems into possibilities.",
        author:"Roy T. Bennett"
    },
    {
        quote:"So many books, so little time.",
        author:"Frank Zappa"
    },
    {
        quote:"A room without books is like a body without a soul.",
        author:"Marcus Tullius Cicero"
    }
]

const quote = document.querySelector("#quote span:first-child")
const author = document.querySelector("#quote span:last-child")

const todaysQuote = quotes[Math.floor(Math.random()*quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;