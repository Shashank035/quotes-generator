const generateButton = document.getElementById('generateButton');
const tweetButton = document.getElementById('tweetButton');
const quoteElement = document.getElementById('quote');
const authorElement = document.getElementById('author');
const quoteContainer = document.querySelector('.quote-container');

generateButton.addEventListener('click', generateRandomQuote);

function generateRandomQuote() {
    fetch('https://api.kanye.rest')
        .then(response => response.json())
        .then(data => {
            quoteElement.textContent = data.quote;
            authorElement.textContent = '- Kanye West';
            animateQuote();
        })
        .catch(error => console.error('Error:', error));
}

function animateQuote() {
    quoteContainer.classList.add('animate');
    setTimeout(() => {
        quoteContainer.classList.remove('animate');
    }, 500);
}

tweetButton.addEventListener('click', tweetQuote);

function tweetQuote() {
    const quoteText = quoteElement.textContent;
    const authorText = authorElement.textContent;
    const tweetUrl = `https://twitter.com/intent/tweet?text="${quoteText}" ${authorText}`;
    window.open(tweetUrl, '_blank');
}
