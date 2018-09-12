/*
 * Create a list that holds all of your cards
 */
let cards = ["fa-diamond", "fa-diamond", "fa-paper-plane-o", "fa-paper-plane-o", "fa fa-anchor", "fa fa-anchor",
    "fa fa-bolt", "fa fa-bolt", "fa-cube", "fa-cube", "fa-anchor", "fa-anchor", "fa-leaf", "fa-leaf",
    "fa-bicycle", "fa-bicycle"
]

let openCard = [],
    startGame = false,
    moves = 0;


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
    let cardList = shuffle(cards);
    cardList.forEach(function(card) {
        $(".deck").append('<li><i class="card fa ' + card + '"></i></li>');
    })
}
/*set up the event listener for a card. If a card is clicked:*/
function toggleCard() {
    $(".card").on("click", function() {
        $(this).toggleClass("open show");
        startGame = true;
        moves++
    })
}
function updateMoves() {
    $(moves===)
}
function addToggleCard() {
	openCard.push($(this));
	console.log(openCard);
}

createCard();
shuffle(cards);
toggleCard();
addToggleCard();


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