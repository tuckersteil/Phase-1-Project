// function dataValue(data){
//     const deckId = data.deck_id
//     console.log(data)
//     console.log(deckId)
//     dealCards(data)
//     return deckId
// }
let deckId
function dealCards(data){
    const userCard1 = document.querySelector('#uCard1')
    userCard1.src = data.cards[0].image

    const dealerCard1 = document.querySelector('#dCard1')
    dealerCard1.src = data.cards[1].image

    const userCard2 = document.querySelector('#uCard2')
    userCard2.src = data.cards[2].image
    deckId = data.deck_id
    nextAction();
}


function nextAction(){
    let hitStayArray = [...document.getElementsByClassName("array")];
    hitStayArray.forEach(button => {
        button.addEventListener("click", userAction)
    })
}


function userAction(button){
    if (button.path[0].id === "hitBtn"){
       hitButton();
    }
    if (button.path[0].id === "stayBtn"){
        stayButton();
    }
}

function hitButton(){
    console.log("Hit worked")
    console.log(deckId)
    fetch(`http://deckofcardsapi.com/api/deck/${deckId}/draw/?count=5`)
        .then(response => response.json())
        .then(data => userHitCards(data))
}

function userHitCards(data){
    console.log(data)
    if (data === data){
        const userCard3 = document.querySelector('#uCard3')
        userCard3.src = data.cards[0].image
    }
    
}




function stayButton(){
    console.log("Stay worked")
    // const stayBtn = document.querySelector("#stayBtn")
    // stayBtn.addEventListener("click", stayButton)
}


document.addEventListener("DOMContentLoaded", () => {
    const dealBtn = document.querySelector("#dealBtn");
    dealBtn.addEventListener("click", () => {
        fetch('http://deckofcardsapi.com/api/deck/new/draw/?count=3')
        .then(response => response.json())
        .then(data => dealCards(data))
    })
})

