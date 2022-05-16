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
let dCard1
let dCard2
let dCard3
let dCard4
let dCard5
let dCard6
let dCard7
let cardValue0
let userCardsValueArrayNew
let userValue
//let intialBalance = 0
function myResetFunc(){
    console.log("reset was called")
    let reset = document.getElementById("reset")
    console.log(reset)
    reset.addEventListener("click", resetHands)
}

function resetHands(){
    let testy = document.getElementById("uCard1")
    let testy2 = document.getElementById("uCard2")
    let testy10 = document.getElementById("uCard3")
    let testy11 = document.getElementById("uCard4")
    let testy12 = document.getElementById("uCard5")
    let testy13 = document.getElementById("uCard6")
    let testy14 = document.getElementById("uCard7")
    let testy3 = document.getElementById("dCard1")
    let testy4 = document.getElementById("dCard2")
    let testy5 = document.getElementById("dCard3")
    let testy6 = document.getElementById("dCard4")
    let testy7 = document.getElementById("dCard5")
    let testy8 = document.getElementById("dCard6")
    let testy9 = document.getElementById("dCard7")
    let reAddHitBtn = document.getElementById("hitBtn")
    testy.src = "https://media.istockphoto.com/photos/bicycle-rider-back-playing-card-design-picture-id157772536?s=612x612"
    testy2.src = "https://media.istockphoto.com/photos/bicycle-rider-back-playing-card-design-picture-id157772536?s=612x612"
    testy3.src = "https://media.istockphoto.com/photos/bicycle-rider-back-playing-card-design-picture-id157772536?s=612x612"
    testy4.src = "https://media.istockphoto.com/photos/bicycle-rider-back-playing-card-design-picture-id157772536?s=612x612"
    testy5.classList.add('hidden')
    testy6.classList.add('hidden')
    testy7.classList.add('hidden')
    testy8.classList.add('hidden')
    testy9.classList.add('hidden')
    testy10.classList.add('hidden')
    testy11.classList.add('hidden')
    testy12.classList.add('hidden')
    testy13.classList.add('hidden')
    testy14.classList.add('hidden')
    reAddHitBtn.disabled = false
    count = 1
}


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
// function testBalance(){
//     let userBalance = document.getElementById("total").innerHTML
//     if(userBalance.includes("-")){

//     }
//     else(){

//     }
// }

function color(){
    let userBalance = document.getElementById("total").innerHTML
    let userColor = document.getElementById("balancethis")
    console.log(userColor)
    if (userBalance.includes("-")){
        //let userColor = document.getElementById("balance")
        userColor.classList.remove("balance3")
        userColor.classList.add("balance2")
    }
    else {
        userColor.classList.remove("balance3")
        userColor.classList.add("balance")

    }
    
}

function userWin(){
    let userBalance = document.getElementById("total").innerHTML
    if(userBalance.length === 3 && userBalance.includes("-")){
        console.log(userBalance)
        let worm = "$" + (- parseInt(userBalance[2]) + newValue)
        document.getElementById("total").innerHTML =  worm
        console.log(userBalance)
        console.log(userBalance[1])
        console.log(userBalance[2])
        console.log(worm)
        color()
    }
    else if (userBalance.length === 4 && userBalance.includes("-")){
        console.log(userBalance)
        let worm = "$" + (- parseInt(userBalance[2]+userBalance[3]) + newValue)
        document.getElementById("total").innerHTML =  worm
        console.log(userBalance)
        console.log(userBalance[2])
        console.log(userBalance[3])
        console.log(worm)
        color()
    }
    else if (userBalance.length === 5 && userBalance.includes("-")){
        console.log(userBalance)
        let worm = "$" + (- parseInt(userBalance[2]+userBalance[3]+userBalance[4]) + newValue)
        document.getElementById("total").innerHTML =  worm
        console.log(userBalance)
        console.log(userBalance[2])
        console.log(userBalance[3])
        console.log(worm)
        color()
    }
    else if (userBalance.length === 6 && userBalance.includes("-")){
        console.log(userBalance)
        let worm = "$" + ( parseInt(userBalance[2]+userBalance[3]+userBalance[4]+userBalance[5]) + newValue)
        document.getElementById("total").innerHTML =  worm
        console.log(userBalance)
        console.log(userBalance[2])
        console.log(userBalance[3])
        console.log(worm)
        color()
    }

else if(userBalance.length === 2 ){
    console.log(userBalance)
    let worm = "$" + (parseInt(userBalance[1]) + newValue)
    document.getElementById("total").innerHTML =  worm
    console.log(userBalance)
    console.log(userBalance[1])
    console.log(userBalance[2])
    console.log(worm)
    color()
    }
else if (userBalance.length === 3){
    console.log(userBalance)
    let worm = "$" + (parseInt(userBalance[1]+ userBalance[2]) + newValue)
    document.getElementById("total").innerHTML =  worm
    console.log(userBalance)
    console.log(userBalance[2])
    console.log(userBalance[3])
    console.log(worm)
    color()
    }
else if (userBalance.length === 4){
    console.log(userBalance)
    let worm = "$" + (parseInt(userBalance[1]+userBalance[2]+userBalance[3]) + newValue)
    document.getElementById("total").innerHTML =  worm
    console.log(userBalance)
    console.log(userBalance[2])
    console.log(userBalance[3])
    console.log(worm)
    color()
    }
else if (userBalance.length === 5){
    console.log(userBalance)
    let worm = "$" + ( parseInt(userBalance[1]+userBalance[2]+userBalance[3]+ userBalance[4]) + newValue)
    document.getElementById("total").innerHTML =  worm
    console.log(userBalance)
    console.log(userBalance[2])
    console.log(userBalance[3])
    console.log(worm)
    color()
    }
}




let newValue = 5
let userBalance
function updateBalance(){
    let userBalance = document.getElementById("total").innerHTML
    
    if (userBalance.length === 3 && userBalance.includes("-")){
        console.log(userBalance)
        let worm = "$" + (- parseInt(userBalance[2]) - newValue)
        document.getElementById("total").innerHTML =  worm
        console.log(userBalance)
        console.log(userBalance[2])
        console.log(userBalance[3])
        console.log(worm)
        color()
    }
    else if (userBalance.length === 4 && userBalance.includes("-")){
        console.log(userBalance)
        let worm = "$" + (- parseInt(userBalance[2]+userBalance[3]) - newValue)
        document.getElementById("total").innerHTML =  worm
        console.log(userBalance)
        console.log(userBalance[2])
        console.log(userBalance[3])
        console.log(worm)
        color()
    }
    else if (userBalance.length === 5 && userBalance.includes("-")){
        console.log(userBalance)
        let worm = "$" + (- parseInt(userBalance[2]+userBalance[3]+userBalance[4]) - newValue)
        document.getElementById("total").innerHTML =  worm
        console.log(userBalance)
        console.log(userBalance[2])
        console.log(userBalance[3])
        console.log(worm)
        color()
    }
   
if (userBalance.length === 2 ){
    console.log(userBalance)
    let worm = "$" + (parseInt(userBalance[1]) - newValue)
    document.getElementById("total").innerHTML =  worm
    console.log(userBalance)
    console.log(userBalance[1])
    console.log(userBalance[2])
    console.log(worm)
    color()
    }
else if (userBalance.length === 3){
    console.log(userBalance)
    let worm = "$" + (parseInt(userBalance[1]+ userBalance[2]) - newValue)
    document.getElementById("total").innerHTML =  worm
    console.log(userBalance)
    console.log(userBalance[2])
    console.log(userBalance[3])
    console.log(worm)
    color()
    }
else if (userBalance.length === 4){
    console.log(userBalance)
    let worm = "$" + (parseInt(userBalance[1]+userBalance[2]+ userBalance[3]) - newValue)
    document.getElementById("total").innerHTML =  worm
    console.log(userBalance)
    console.log(userBalance[2])
    console.log(userBalance[3])
    console.log(worm)
    color()
    }
else if (userBalance.length === 5){
    console.log(userBalance)
    let worm = "$" + (parseInt(userBalance[1]+userBalance[2]+userBalance[3]+ userBalance[4]) - newValue)
    document.getElementById("total").innerHTML =  worm
    console.log(userBalance)
    console.log(userBalance[2])
    console.log(userBalance[3])
    console.log(worm)
    color()
    }
}

function userHitCards(){
    increase();
    getUserValue();
    //let x = "$5"
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
            setTimeout(() => {
                alert("You Busted")}, 1000)
                myResetFunc() 
                updateBalance()
                
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
            setTimeout(() => {
                alert("You Busted")}, 1000)
                myResetFunc() 
                updateBalance()
                
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
            setTimeout(() => {
                alert("You Busted")}, 1000)
                myResetFunc() 
                updateBalance()
                
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
            setTimeout(() => {
                alert("You Busted")}, 1000)
                myResetFunc() 
                updateBalance()
                
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
            setTimeout(() => {
                alert("You Busted")}, 1000)
                myResetFunc() 
                updateBalance()
                
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
    const dealerCard2 = document.querySelector('#dCard2')
    dealerCard2.src = dataValue[8].image
    if(count < 2){
    getUserValue()
    userValue = parseInt(userCardsValueArrayNew[0]) + parseInt(userCardsValueArrayNew[1])
    console.log(userValue)
    dealerTurn();
    }
    else {
        console.log("hgdshgadw")
        console.log(userValue)
        dealerTurn();
    }
}

function dealerTurn(){
    console.log("deal turn")
    document.getElementById("hitBtn").disabled = true;
    getDealerValue();

}

function getDealerValue(){
    let dCard1 = dataValue[1].value
    let dCard2 = dataValue[8].value
    let dCard3 = dataValue[9].value
    let dCard4 = dataValue[10].value
    let dCard5 = dataValue[11].value
    let dCard6 = dataValue[12].value
    let dCard7 = dataValue[13].value
    let dealerCardsValueArray = []
    dealerCardsValueArray.push(dCard1, dCard2, dCard3, dCard4, dCard5, dCard6, dCard7)
    dealerCardsValueArrayNew = []
    dealerCardsValueArray.forEach(function (item){
        if (item === "QUEEN"){
            item = "10"
             dealerCardsValueArrayNew.push(item)
        }
        else if (item === "KING"){
            item = "10"
             dealerCardsValueArrayNew.push(item)
        }
        else if (item === "JACK"){
            item = "10"
             dealerCardsValueArrayNew.push(item)
        }
        else if (item === "ACE"){
            item = "11"
            dealerCardsValueArrayNew.push(item)
        }
        else {
             dealerCardsValueArrayNew.push(item)
        } 
    })
    dealerNextMove()
    
 }

function dealerNextMove(){
    dealerTotal = parseInt(dealerCardsValueArrayNew[0]) + parseInt(dealerCardsValueArrayNew[1])
    console.log(dealerTotal)
    if(dealerTotal === 21 && dealerTotal === userValue){
        setTimeout(() => {
            alert("Draw, Deal Again")}, 1000) 
            myResetFunc() 
    }
    if (dealerTotal === 21 && dealerTotal > userValue){
        setTimeout(() => {
            alert("Dealer Wins")}, 1000)
            myResetFunc() 
            updateBalance()
    }
    if(dealerTotal < 21 && dealerTotal >= 17 && dealerTotal > userValue){
        setTimeout(() => {
            alert("Dealer Wins")}, 1000)
            myResetFunc()
            updateBalance()
    }
    else if(dealerTotal < 21 && dealerTotal >= 17 && dealerTotal < userValue){
        setTimeout(() => {
            alert("Congrats You Won!")}, 1000)  
            myResetFunc() 
            userWin()
    }
    else if(dealerTotal < 21 && dealerTotal >= 17 && dealerTotal === userValue){
        setTimeout(() => {
            alert("Draw, Deal Again")}, 1000)  
            myResetFunc()  
    }
    else if (dealerTotal <=16){
        let d3 = document.querySelector('#dCard3')
        d3.classList.remove('hidden')
        dealerTotal = dealerTotal + parseInt(dealerCardsValueArrayNew[2])
        console.log(dealerTotal)
        if (dealerTotal > 21 && true === dealerCardsValueArrayNew.includes("11"))
            for(i=0; i<dealerCardsValueArrayNew.length; i++){
                if(dealerCardsValueArrayNew[i] === "11"){
                    dealerCardsValueArrayNew[i] = 1
                    console.log("changed ace to 1")
                }
                dealerTotal = parseInt(dealerCardsValueArrayNew[0]) + parseInt(dealerCardsValueArrayNew[1]) + parseInt(dealerCardsValueArrayNew[2]) 
            }
        
        if (dealerTotal > 21){
            setTimeout(() => {
                alert("Congrats, Dealer Busted. You Won!")}, 1000)
                myResetFunc() 
                userWin()
        }


        else if(dealerTotal <= 21 && dealerTotal >= 17 && dealerTotal > userValue){
            setTimeout(() => {
                alert("Dealer Wins")}, 1000)
                myResetFunc() 
                updateBalance()
        }
        else if(dealerTotal <= 21 && dealerTotal >= 17 && dealerTotal < userValue){
            setTimeout(() => {
                alert("Congrats You Won!")}, 1000)    
                myResetFunc() 
                userWin()
        }
        else if(dealerTotal <= 21 && dealerTotal >= 17 && dealerTotal === userValue){
            setTimeout(() => {
                alert("Draw, Deal Again")}, 1000)   
                myResetFunc()  
        }
        else if(dealerTotal <= 16){
            let d4 = document.querySelector('#dCard4')
            d4.classList.remove('hidden')
            dealerTotal = dealerTotal + parseInt(dealerCardsValueArrayNew[3])
            console.log(dealerTotal)
            if (dealerTotal > 21 && true === dealerCardsValueArrayNew.includes("11"))
                for(i=0; i<dealerCardsValueArrayNew.length; i++){
                    if(dealerCardsValueArrayNew[i] === "11"){
                        dealerCardsValueArrayNew[i] = 1
                        console.log("changed ace to 1")
                }
                dealerTotal = parseInt(dealerCardsValueArrayNew[0]) + parseInt(dealerCardsValueArrayNew[1]) + parseInt(dealerCardsValueArrayNew[2]) + parseInt(dealerCardsValueArrayNew[3])
            }
            
            if (dealerTotal > 21){
                setTimeout(() => {
                    alert("Congrats, Dealer Busted. You Won!")}, 1000)
                    myResetFunc() 
                    userWin()
            }
            if(dealerTotal <= 21 && dealerTotal >= 17 && dealerTotal > userValue){
                setTimeout(() => {
                    alert("Dealer Wins")}, 1000)  
                    myResetFunc() 
                    updateBalance()
            }
            else if(dealerTotal <= 21 && dealerTotal >= 17 && dealerTotal < userValue){
                setTimeout(() => {
                    alert("Congrats You Won!")}, 1000)  
                    myResetFunc()   
                    userWin()
            }
            else if(dealerTotal <= 21 && dealerTotal >= 17 && dealerTotal === userValue){
                setTimeout(() => {
                    alert("Draw, Deal Again")}, 1000)   
                    myResetFunc()  
            }
            else if (dealerTotal <= 16){
                let d5 = document.querySelector('#dCard5')
                d5.classList.remove('hidden')
                dealerTotal = dealerTotal + parseInt(dealerCardsValueArrayNew[4])
                console.log(dealerTotal)
                if (dealerTotal > 21 && true === dealerCardsValueArrayNew.includes("11"))
                    for(i=0; i<dealerCardsValueArrayNew.length; i++){
                        if(dealerCardsValueArrayNew[i] === "11"){
                            dealerCardsValueArrayNew[i] = 1
                            console.log("changed ace to 1")
                }
                dealerTotal = parseInt(dealerCardsValueArrayNew[0]) + parseInt(dealerCardsValueArrayNew[1]) + parseInt(dealerCardsValueArrayNew[2]) + parseInt(dealerCardsValueArrayNew[3]) + parseInt(dealerCardsValueArrayNew[4])
            }

                if (dealerTotal > 21){
                    setTimeout(() => {
                        alert("Congrats, Dealer Busted. You Won!")}, 1000)
                        myResetFunc() 
                        userWin()
                }

                if(dealerTotal <= 21 && dealerTotal >= 17 && dealerTotal > userValue){
                    setTimeout(() => {
                        alert("Dealer Wins")}, 1000)
                        myResetFunc() 
                        updateBalance()
                    
                }
                else if(dealerTotal <= 21 && dealerTotal >= 17 && dealerTotal < userValue){
                    setTimeout(() => {
                        alert("Congrats You Won!")}, 1000)   
                        myResetFunc()  
                        userWin()
                }
                else if(dealerTotal <= 21 && dealerTotal >= 17 && dealerTotal === userValue){
                    setTimeout(() => {
                        alert("Draw, Deal Again")}, 1000)   
                        myResetFunc()  
                }
                else if (dealerTotal <= 16){
                    let d6 = document.querySelector('#dCard6')
                    d6.classList.remove('hidden')
                    dealerTotal = dealerTotal + parseInt(dealerCardsValueArrayNew[5])
                    console.log(dealerTotal)
                    if (dealerTotal > 21 && true === dealerCardsValueArrayNew.includes("11"))
                        for(i=0; i<dealerCardsValueArrayNew.length; i++){
                            if(dealerCardsValueArrayNew[i] === "11"){
                                dealerCardsValueArrayNew[i] = 1
                                console.log("changed ace to 1")
                }
                dealerTotal = parseInt(dealerCardsValueArrayNew[0]) + parseInt(dealerCardsValueArrayNew[1]) + parseInt(dealerCardsValueArrayNew[2]) + parseInt(dealerCardsValueArrayNew[3]) + parseInt(dealerCardsValueArrayNew[4]) + parseInt(dealerCardsValueArrayNew[5])
            }
                    if (dealerTotal > 21){
                        setTimeout(() => {
                            alert("Congrats, Dealer Busted. You Won!")}, 1000)
                            myResetFunc() 
                            userWin()
                    }
    
                    if(dealerTotal <= 21 && dealerTotal >= 17 && dealerTotal > userValue){
                        setTimeout(() => {
                            alert("Dealer Wins")}, 1000)
                            myResetFunc() 
                            updateBalance()
                        
                    }
                    else if(dealerTotal <= 21 && dealerTotal >= 17 && dealerTotal < userValue){
                        setTimeout(() => {
                            alert("Congrats You Won!")}, 1000)   
                            myResetFunc()  
                            userWin()
                    }
                    else if(dealerTotal <= 21 && dealerTotal >= 17 && dealerTotal === userValue){
                        setTimeout(() => {
                            alert("Draw, Deal Again")}, 1000)    
                            myResetFunc() 
                    }
                    else if (dealerTotal <= 16){
                        let d7 = document.querySelector('#dCard7')
                        d7.classList.remove('hidden')
                        dealerTotal = dealerTotal + parseInt(dealerCardsValueArrayNew[6])
                        console.log(dealerTotal)
                        if (dealerTotal > 21 && true === dealerCardsValueArrayNew.includes("11"))
                        for(i=0; i<dealerCardsValueArrayNew.length; i++){
                            if(dealerCardsValueArrayNew[i] === "11"){
                                dealerCardsValueArrayNew[i] = 1
                                console.log("changed ace to 1")
                }
                dealerTotal = parseInt(dealerCardsValueArrayNew[0]) + parseInt(dealerCardsValueArrayNew[1]) + parseInt(dealerCardsValueArrayNew[2]) + parseInt(dealerCardsValueArrayNew[3]) + parseInt(dealerCardsValueArrayNew[4]) + parseInt(dealerCardsValueArrayNew[5]) + parseInt(dealerCardsValueArrayNew[6])
            }
        
                        if (dealerTotal > 21){
                            setTimeout(() => {
                                alert("Congrats, Dealer Busted. You Won!")}, 1000)
                                myResetFunc() 
                                userWin()
                        }
        
                        if(dealerTotal <= 21 && dealerTotal >= 17 && dealerTotal > userValue){
                            setTimeout(() => {
                                alert("Dealer Wins")}, 1000)
                                myResetFunc() 
                                updateBalance()
                            
                        }
                        else if(dealerTotal <= 21 && dealerTotal >= 17 && dealerTotal < userValue){
                            setTimeout(() => {
                                alert("Congrats You Won!")}, 1000)  
                                myResetFunc()   
                                userWin()
                        }
                        else if(dealerTotal <= 21 && dealerTotal >= 17 && dealerTotal === userValue){
                            setTimeout(() => {
                                alert("Draw, Deal Again")}, 1000)  
                                myResetFunc()   
                        }
                    }
                }
            }
        }
    }
}


document.addEventListener("DOMContentLoaded", () => {
    const dealBtn = document.querySelector("#dealBtn");
    dealBtn.addEventListener("click", () => {
        fetch('http://deckofcardsapi.com/api/deck/new/draw/?count=14')
        .then(response => response.json())
        .then(data => dealCards(data))
    })
})