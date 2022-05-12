
function dealCards(data){
    const userCard1 = document.querySelector('#uCard1')
    userCard1.src = data.cards[0].image

    const dealerCard1 = document.querySelector('#dCard1')
    dealerCard1.src = data.cards[1].image

    const userCard2 = document.querySelector('#uCard2')
    userCard2.src = data.cards[2].image

    console.log(data.cards[0].value)
    console.log(data.cards[1].value)
    console.log(data.cards[2].value)
    console.log(data)
}


function userAction(){

}

//`<img id="uCard1" src="${data.cards[0].image} width="100" height="150">`

document.addEventListener("DOMContentLoaded", () => {
    const dealBtn = document.querySelector("#dealBtn");
    dealBtn.addEventListener("click", () => {
        fetch('http://deckofcardsapi.com/api/deck/new/draw/?count=3')
        .then(response => response.json())
        .then(data => dealCards(data))
    })
})

