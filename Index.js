let deckId
let count = 1
let userCard3
let userCard4
function dealCards(data){
    console.log(data)
    
    const userCard1 = document.querySelector('#uCard1')
    userCard1.src = data.cards[0].image

    const dealerCard1 = document.querySelector('#dCard1')
    dealerCard1.src = data.cards[1].image

    const userCard2 = document.querySelector('#uCard2')
    userCard2.src = data.cards[2].image

    const userCard3 = document.querySelector('#uCard3')
    userCard3.src = data.cards[3].image

    const userCard4 = document.querySelector('#uCard4')
    userCard4.src = data.cards[4].image
    
    const userCard5 = document.querySelector('#uCard5')
    userCard5.src = data.cards[5].image

    const userCard6 = document.querySelector('#uCard6')
    userCard6.src = data.cards[6].image

    const userCard7 = document.querySelector('#uCard7')
    userCard7.src = data.cards[7].image

    // const dealerCard2 = document.querySelector('#dCard2')
    // dealerCard2.src = data.cards[8].image

    const dealerCard3 = document.querySelector('#dCard3')
    dealerCard3.src = data.cards[9].image

    const dealerCard4 = document.querySelector('#dCard4')
    dealerCard4.src = data.cards[10].image

    const dealerCard5 = document.querySelector('#dCard5')
    dealerCard5.src = data.cards[11].image

    const dealerCard6 = document.querySelector('#dCard6')
    dealerCard6.src = data.cards[12].image

    const dealerCard7 = document.querySelector('#dCard7')
    dealerCard7.src = data.cards[13].image


    deckId = data.deck_id
    nextAction();
}
function increase(){
    return count++
}

function nextAction(){
    let hitStayArray = [...document.getElementsByClassName("array")];
    hitStayArray.forEach(button => {
        button.addEventListener("click", userAction)
    })
}


function userAction(button){
    if (button.path[0].id === "hitBtn"){
       userHitCards();
    }
    if (button.path[0].id === "stayBtn"){
        stayButton();
    }
}

function userHitCards(){
    increase();
    let test = document.querySelector('#uCard3')
    let test1 = document.querySelector('#uCard4')
    let test2 = document.querySelector('#uCard5')
    let test3 = document.querySelector('#uCard6')
    let test4 = document.querySelector('#uCard7')
    if (count === 2){
        test.classList.remove('hidden')
    }
    if (count === 3){
        test1.classList.remove('hidden')
    }
    if (count === 4){
        test2.classList.remove('hidden')
    }
    if (count === 5){
        test3.classList.remove('hidden')
    }
    if (count === 6){
        test4.classList.remove('hidden')
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
        fetch('http://deckofcardsapi.com/api/deck/new/draw/?count=14')
        .then(response => response.json())
        .then(data => dealCards(data))
    })
})