/** Create a list that holds all of your cards*/
let cards = ["fa-diamond", "fa-diamond", "fa-paper-plane-o", "fa-paper-plane-o",
    "fa fa-anchor", "fa fa-anchor", "fa fa-bolt", "fa fa-bolt",
    "fa-cube", "fa-cube", "fa-anchor", "fa-anchor", "fa-leaf", "fa-leaf",
    "fa-bicycle", "fa-bicycle"
];

let openCard = [],
    startGame = false,
    matchCount = 0,
    matched = 0;


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
        if ($(this).hasClass("open show")) {
            return;
        }
        $(this).toggleClass("open show");
        /*Once cards are flipped, this function puts the flipped card into the openCards array.*/
        openCard.push($(this));
        startGame = true;
        cardMatch();
    })
}
/*display the card's symbol (put this functionality in another function that you call from this one)
 *add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)*/
function cardMatch() {
    if (openCard.length === 2) {
        /*if the list already has another card, check to see if the two cards match*/
        /*path to compare the name of the cards*/
        if (openCard[0][0].classList[2] === openCard[1][0].classList[2]) {
            /*add match so removeClass doesn't delete pairs that are already matched*/
            openCard[0][0].classList.add("match");
            openCard[1][0].classList.add("match");
            /*if the cards do match, lock the cards in the open position 
            (put this functionality in another function that you call from this one)*/
            $(openCard[0]).off('click');
            $(openCard[1]).off('click');
            matchCount++;
            matched++; console.log(matched);
            popup();
            emptyOpenCard();
            console.log(openCard);
        } else {
            /*if the cards do not match, remove the cards from the list and hide the 
            card's symbol (put this functionality in another function that you call from this one)*/
            openCard[0][0].classList.add("wrong");
            openCard[1][0].classList.add("wrong");
            matchCount++;console.log(matchCount);
            /*removes the "open show" so card flips over to blank again because cards did not match*/
            setTimeout(removeClass, 1000);
            setTimeout(emptyOpenCard, 1000);
            
        }
    }
    /*increment the move counter and display it on the page (put this functionality in 
    another function that you call from this one)*/
    movesCount();
    console.log("one");    
}

function movesCount() {/*this changes move to moves based on matchcount*/
    if (matchCount === 1) {
        $("#moves2").text("Move");
        } else {
            $("#moves2").text("Moves");
        }
        $(".moves").text(matchCount.toString()); /*this shows the move count*/
}
function popup() { /*source: https: www.w3schools.com/howto/howto_css_modals.asp */
    if (matched === 1) {
        var modal = document.getElementById('myModal');
        var span = document.getElementsByClassName("close")[0];
        modal.style.display = "block";console.log("modal")
// When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
    }
        
    }
}


function removeClass() {
    $('.card').removeClass("open show");
    console.log("four")
}

function emptyOpenCard() {
    openCard = [];
    console.log("five")
}
function restartGame() {
    $(".restart").on("click", function(){
        location.reload();
    });   
}
restartGame();
createCard();
shuffle(cards);
toggleCard();




/*
 *  
 
 *   
 *    + 
 *    + 
 *    + if all cards have matched, display a message with the final score (put this 
        functionality in another function that you call from this one)
 */