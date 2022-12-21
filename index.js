let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""

let player = {
    "name":"ranjit",
    "cash":100
}

document.getElementById('username').textContent = "name - "+player.name
document.getElementById('cash').textContent = "cash - "+"$"+player.cash

function startGame() {
    if (!isAlive && !hasBlackJack) {
        window.alert("game started!")
        isAlive = true
        let firstCard = getCard()
        let secondCard = getCard()
        cards = [firstCard, secondCard]
        sum = cards[0] + cards[1]
        renderGame()
    } else if (isAlive && !hasBlackJack) {
        window.alert("game is already started!")
    }
}

function getCard() {

    let rnum = Math.floor((Math.random() * 13) + 1)
    if (rnum > 10) {
        return 1
    } else if (rnum == 1) {
        return 11
    } else {
        return rnum;
    }
}

function renderGame() {
    if (sum > 21) {
        message = "you are out of game!"
        player.cash -= 5
        isAlive = false
    } else if (sum == 21) {
        message = "you won !!!"
        player.cash += 5
        hasBlackJack = true
    } else {
        message = "still there is hope you can add one more card"
    }

    document.getElementById('message').textContent = message
    document.getElementById('cards').textContent = "Cards : "
    for (let i = 0; i < cards.length; i += 1) {
        document.getElementById('cards').textContent += cards[i] + " "
    }
    document.getElementById('sum').textContent = "Sum : " + sum
    document.getElementById('cash').textContent = "cash - "+"$"+player.cash
}

function addCard() {
    if (isAlive && !hasBlackJack) {
        sum += cards[cards.length - 1]
        cards.push(getCard())
        renderGame()
    } else {
        window.alert("restart page to play again!!")
    }
}