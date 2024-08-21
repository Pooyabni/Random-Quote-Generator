const quotes = [
    "The only way to do great work is to love what you do. - Steve Jobs",
    "Life is what happens when you're busy making other plans. - John Lennon",
    "Get busy living or get busy dying. - Stephen King",
    "You only live once, but if you do it right, once is enough. - Mae West",
    "In the end, we only regret the chances we didn't take. - Lewis Carroll"
];

const quoteText = document.getElementById('quote');
const quoteBtn = document.getElementById('quote-btn');

quoteBtn.addEventListener('click', function() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    quoteText.textContent = quotes[randomIndex];
});
