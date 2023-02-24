const quoteBtn = document.getElementById('new-quote-btn');
const quoteContainer = document.getElementById('quote-container');

quoteBtn.addEventListener('click', getNewQuote);

function getNewQuote() {
  
    fetch("http://quotable.io/random")
    .then(res => res.json())
    .then(data => {
        const quote = data.content;
        const author = data.author || "Unknown";
        quoteContainer.innerHTML = `"${quote}"<br>- ${author}`;
    })



  
}
