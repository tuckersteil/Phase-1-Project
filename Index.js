
function dealCards(data){
    const userCard1 = document.querySelector('#uCard1')
    userCard1.src = data.cards[0].image

    const dealerCard1 = document.querySelector('#dCard1')
    dealerCard1.src = data.cards[1].image

    const userCard2 = document.querySelector('#uCard2')
    userCard2.src = data.cards[2].image

    const deckId = data.deckId
    nextAction();
}


function nextAction(){
    let hitStayArray = [...document.getElementsByClassName("array")];
    hitStayArray.forEach(button => {
        // console.log(button)
        // console.log(button.id)
        button.addEventListener("click", userAction)
    })
}


function userAction(button){
    console.log(button)
    console.log(button.path[0].id)
    console.log(typeof(button))
    if (button.path[0].id === "hitBtn"){
       hitButton();
    }
    if (button.path[0].id === "stayBtn"){
        stayButton();
    }
}

function hitButton(){
    console.log("worked")
    // fetch(`http://deckofcardsapi.com/api/deck/${deckId}/draw/?count=5`)
    // const userCard3 = document.querySelector('#uCard3')
    // userCard3.src = data.cards[0].image
}




function stayButton(){
    console.log("worked")
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

