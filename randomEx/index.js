const IMAGE_BASE = 'images/';

const messages = [{
    quote: 'The Way To Get Started Is To Quit Talking And Begin Doing.',
    speaker: 'Walt Disney',
    image: 'walt.jpg'
}, {
    quote: 'The Pessimist Sees Difficulty In Every Opportunity. The Optimist Sees Opportunity In Every Difficulty.',
    speaker: 'Winston Churchill',
    image: 'winston.jpg'
}, {
    quote: 'Don’t Let Yesterday Take Up Too Much Of Today.',
    speaker: 'Will Rogers',
    image: 'will.jpg'
}, {
    quote: 'You Learn More From Failure Than From Success. Don’t Let It Stop You. Failure Builds Character.',
    speaker: 'Unknown',
    image: 'unknown.jpg'
}, {
    quote: 'It’s Not Whether You Get Knocked Down, It’s Whether You Get Up.',
    speaker: 'Vince Lombardi',
    image: 'vince.jpg'
}, {
    quote: 'If You Are Working On Something That You Really Care About, You Don’t Have To Be Pushed. The Vision Pulls You.',
    speaker: 'Steve Jobs',
    image: 'steve.jpg'
}
]


console.log(messages[1].quote);

function showQuote() {
    const quoteNo = Math.floor(Math.random() * messages.length);
    document.getElementById('quotes').innerHTML = messages[quoteNo].quote;
    document.getElementById('speakers').innerHTML = messages[quoteNo].speaker;
    document.getElementById('images').setAttribute('src', IMAGE_BASE + messages[quoteNo].image);
    setTimeout('showQuote()', 3000)

}

window.onload = showQuote;
