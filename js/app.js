/*
 * Create a list that holds all of your cards
 */
let cards = ["fa-diamond", "fa-diamond", "fa-paper-plane-o", "fa-paper-plane-o",
    "fa fa-anchor", "fa fa-anchor", "fa fa-bolt", "fa fa-bolt",
    "fa-cube", "fa-cube", "fa-anchor", "fa-anchor", "fa-leaf", "fa-leaf",
    "fa-bicycle", "fa-bicycle"
];

let openCard = [],
    startGame = false;


// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length,
        temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */
function createCard() {
    shuffle(cards).forEach(function(card) {
        $(".deck").append('<li><i class="card fa ' + card + '"></i></li>');
    })
}
/*set up the event listener for a card. If a card is clicked:*/
function toggleCard() {
    $(".card").on("click", function() {
        if ($(this).hasClass("open show")) { return; }
        $(this).toggleClass("open show");
        /*Once cards are flipped, this function puts the flipped card into the openCards array.*/
        openCard.push($(this));
        startGame = true;
        cardMatch();
    })
}

/*function pushCards() {
    openCard.push();
    console.log(openCard);*/ /*see card to determine location*/
/*}*/


function cardMatch(toggleCard) {
    if (openCard.length === 2) {
        if (openCard[0][0].classList[2] === openCard[1][0].classList[2]){
            console.log(openCard);
        } else {
            setTimeout(removeClass, 600);
        }
    }
    
}

function removeClass() {
    $('.card').removeClass("open show");
}
createCard();
shuffle(cards);
toggleCard();



/*
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */
/*const deck = document.querySelector('.deck');

deck.addEventListener('click', event => {
    const clickTarget = event.target;
    if (clickTarget.classList.contains('card')) {
        clickTarget.classList.toggle('open');
        clickTarget.classList.toggle('show');
    }*/