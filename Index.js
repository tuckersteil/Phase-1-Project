let deckId
let dataValue
let count = 1
let userCard1
let userCard2
let userCard3
let userCard4
let userCard5
let userCard6
let userCard7
let cardValue0
let userCardsValueArrayNew
let userValue
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
    dataValue = data.cards
    nextAction();
}
function increase(){
    return count++
}

function testone(){
    console.log("worked")
    console.log(userValue)
    if (userValue <= 21){
        dealerTurn()
    }
    else{
        alert("busted")
    }
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
    getUserValue();

    let test = document.querySelector('#uCard3')
    let test1 = document.querySelector('#uCard4')
    let test2 = document.querySelector('#uCard5')
    let test3 = document.querySelector('#uCard6')
    let test4 = document.querySelector('#uCard7')
    if (count === 2){
        test.classList.remove('hidden')
        console.log("was Hit once")
        if (userValue > 21 && true === userCardsValueArrayNew.includes("11"))
            for(i=0; i<userCardsValueArrayNew.length; i++){
                if(userCardsValueArrayNew[i] === "11"){
                    userCardsValueArrayNew[i] = 1
                    console.log("changed ace to 1")
                }
                userValue = parseInt(userCardsValueArrayNew[0]) + parseInt(userCardsValueArrayNew[1]) + parseInt(userCardsValueArrayNew[2])
                console.log(userValue)
                console.log(userCardsValueArrayNew)
         }

        if (userValue > 21){
            document.getElementById("hitBtn").disabled = true;
            setTimeout(function(){
                alert("You Busted")
            })
        }
    }
    if (count === 3){
        test1.classList.remove('hidden')
        console.log("was Hit twice")
        if (userValue > 21 && true === userCardsValueArrayNew.includes("11"))
            for(i=0; i<userCardsValueArrayNew.length; i++){
                if(userCardsValueArrayNew[i] === "11"){
                    userCardsValueArrayNew[i] = 1
                    console.log("changed ace to 1")
                }
                userValue = parseInt(userCardsValueArrayNew[0]) + parseInt(userCardsValueArrayNew[1]) + parseInt(userCardsValueArrayNew[2]) + parseInt(userCardsValueArrayNew[3])
            }
        if (userValue > 21){
            document.getElementById("hitBtn").disabled = true;
            setTimeout(function(){
                alert("You Busted")
            })
        }
    }
    if (count === 4){
        test2.classList.remove('hidden')
        console.log("was Hit 3 times")
        if (userValue > 21 && true === userCardsValueArrayNew.includes("11"))
            for(i=0; i<userCardsValueArrayNew.length; i++){
                if(userCardsValueArrayNew[i] === "11"){
                    userCardsValueArrayNew[i] = 1
                    console.log("changed ace to 1")
                }
                userValue = parseInt(userCardsValueArrayNew[0]) + parseInt(userCardsValueArrayNew[1]) + parseInt(userCardsValueArrayNew[2]) + parseInt(userCardsValueArrayNew[3]) + parseInt(userCardsValueArrayNew[4])
            }
        if (userValue > 21){
            document.getElementById("hitBtn").disabled = true;
            setTimeout(function(){
                alert("You Busted")
            })
        }
    }
    if (count === 5){
        test3.classList.remove('hidden')
        console.log("was Hit 4 times")
        if (userValue > 21 && true === userCardsValueArrayNew.includes("11"))
            for(i=0; i<userCardsValueArrayNew.length; i++){
                if(userCardsValueArrayNew[i] === "11"){
                    userCardsValueArrayNew[i] = 1
                    console.log("changed ace to 1")
                }
                userValue = parseInt(userCardsValueArrayNew[0]) + parseInt(userCardsValueArrayNew[1]) + parseInt(userCardsValueArrayNew[2])+ parseInt(userCardsValueArrayNew[3]) + parseInt(userCardsValueArrayNew[4]) + parseInt(userCardsValueArrayNew[5])
            }
        if (userValue > 21){
            document.getElementById("hitBtn").disabled = true;
            setTimeout(function(){
                alert("You Busted")
            })
        }
    }
    if (count === 6){
        test4.classList.remove('hidden')
        console.log("was Hit 4 times")
        if (userValue > 21 && true === userCardsValueArrayNew.includes("11"))
            for(i=0; i<userCardsValueArrayNew.length; i++){
                if(userCardsValueArrayNew[i] === "11"){
                    userCardsValueArrayNew[i] = 1
                    console.log("changed ace to 1")
                }
                userValue = parseInt(userCardsValueArrayNew[0]) + parseInt(userCardsValueArrayNew[1]) + parseInt(userCardsValueArrayNew[2]) + parseInt(userCardsValueArrayNew[3]) + parseInt(userCardsValueArrayNew[4]) + parseInt(userCardsValueArrayNew[5]) + parseInt(userCardsValueArrayNew[6])
            }
        if (userValue > 21){
            document.getElementById("hitBtn").disabled = true;
            setTimeout(function(){
                alert("You Busted")
            })
        }
    }

}




function getUserValue(){
    let uCard1 = dataValue[0].value
    let uCard2 = dataValue[2].value
    let uCard3 = dataValue[3].value
    let uCard4 = dataValue[4].value
    let uCard5 = dataValue[5].value
    let uCard6 = dataValue[6].value
    let uCard7 = dataValue[7].value
    let userCardsValueArray = []
    userCardsValueArray.push(uCard1, uCard2, uCard3, uCard4, uCard5, uCard6, uCard7)
    userCardsValueArrayNew = []
    userCardsValueArray.forEach(function (item){
        if (item === "QUEEN"){
            item = "10"
             userCardsValueArrayNew.push(item)
        }
        else if (item === "KING"){
            item = "10"
             userCardsValueArrayNew.push(item)
        }
        else if (item === "JACK"){
            item = "10"
             userCardsValueArrayNew.push(item)
        }
        else if (item === "ACE"){
            item = "11"
            userCardsValueArrayNew.push(item)
        }
        else {
             userCardsValueArrayNew.push(item)
        } 
    })
    userCardTotal();
}


function userCardTotal(){
    console.log(userCardsValueArrayNew)
    if (count === 2){
         userValue = parseInt(userCardsValueArrayNew[0]) + parseInt(userCardsValueArrayNew[1]) + parseInt(userCardsValueArrayNew[2])
    }
    if (count === 3){
         userValue = parseInt(userCardsValueArrayNew[0]) + parseInt(userCardsValueArrayNew[1]) + parseInt(userCardsValueArrayNew[2]) + parseInt(userCardsValueArrayNew[3])
    }
    if (count === 4){
         userValue = parseInt(userCardsValueArrayNew[0]) + parseInt(userCardsValueArrayNew[1]) + parseInt(userCardsValueArrayNew[2]) + parseInt(userCardsValueArrayNew[3]) + parseInt(userCardsValueArrayNew[4])
    }
    if (count === 5){
         userValue = parseInt(userCardsValueArrayNew[0]) + parseInt(userCardsValueArrayNew[1]) + parseInt(userCardsValueArrayNew[2]) + parseInt(userCardsValueArrayNew[3]) + parseInt(userCardsValueArrayNew[4]) + parseInt(userCardsValueArrayNew[5])
    }
    if (count === 6){
         userValue = parseInt(userCardsValueArrayNew[0]) + parseInt(userCardsValueArrayNew[1]) + parseInt(userCardsValueArrayNew[2]) + parseInt(userCardsValueArrayNew[3]) + parseInt(userCardsValueArrayNew[4]) + parseInt(userCardsValueArrayNew[5]) + parseInt(userCardsValueArrayNew[6])
    }
    if (count === 7){
         userValue = parseInt(userCardsValueArrayNew[0]) + parseInt(userCardsValueArrayNew[1]) + parseInt(userCardsValueArrayNew[2]) + parseInt(userCardsValueArrayNew[3]) + parseInt(userCardsValueArrayNew[4]) + parseInt(userCardsValueArrayNew[5]) + parseInt(userCardsValueArrayNew[6]) + parseInt(userCardsValueArrayNew[7])
    }

}

function stayButton(){
    if(count < 2){
    getUserValue()
    userValue = parseInt(userCardsValueArrayNew[0]) + parseInt(userCardsValueArrayNew[1])
    console.log(userValue)
    dealerTurn();
    }
    else{
        console.log("hgdshgadw")
        console.log(userValue)
        dealerTurn();
    }
    //dealerTurn();
}

function dealerTurn(){
    console.log("deal turn")
    document.getElementById("hitBtn").disabled = true;
    const dealerCard2 = document.querySelector('#dCard2')
    dealerCard2.src = dataValue[8].image

}

document.addEventListener("DOMContentLoaded", () => {
    const dealBtn = document.querySelector("#dealBtn");
    dealBtn.addEventListener("click", () => {
        fetch('http://deckofcardsapi.com/api/deck/new/draw/?count=14')
        .then(response => response.json())
        .then(data => dealCards(data))
    })
})