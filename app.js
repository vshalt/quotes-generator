const API_URL = 'https://quotable.io/random'
const TWITTER_URL = 'https://twitter.com/intent/tweet/'
const colors = [
    '#6F1E51',
    '#5758BB',
    '#1B1464',
    '#006266',
    '#009432',
    '#833471',
    '#B53471',
    '#1289A7',
    '#ED4C67',
    '#30336b',
    '#be2edd',
    '#22a6b3',
    '#f0932b',
    '#3c40c6',
]

const quote = document.getElementById('text')
const quoteBox = document.getElementById('quote-box')
const author = document.getElementById('author')
const button = document.getElementById('new-quote')
const body = document.querySelector('body')
const twitter = document.querySelector('#tweet-quote')
const copyText = document.getElementById('copy-text')

var quoteText = '';
var authorText = '';

button.addEventListener('click', getQuote)
copyText.addEventListener('click', copyCurrentQuote)
function getQuote() {
fetch(API_URL)
.then(res => res.json())
.then(data => {
    quote.style.transform = 'fade-out'
    quote.innerHTML = data.content;
    author.innerHTML = data.author;
    quoteText = data.content;
    authorText = data.author;
    selectColor()
    twitter.setAttribute('href', TWITTER_URL + `?text="${data.content}" -${data.author}`)

})
}
function copyCurrentQuote() {
        const el = document.createElement('textarea');
        el.value = `"${quoteText}" -${authorText}`;
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);
        copied.style.opacity = "1"
        setTimeout(() => {copied.style.opacity = null},750)
}

function selectColor () {
    let index = Math.floor(Math.random() * colors.length)
    body.style.setProperty('--bg-color', colors[index])
}
getQuote()

