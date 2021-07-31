const dice1 = document.querySelector('.img1')
const dice2 = document.querySelector('.img2')
const title = document.querySelector('.title')

window.addEventListener('load', (e) => {
    const images = []
    for (let i=1; i<7; i++) {
        images.push(`dice${i}.png`)
    }
    const getRandomDice = () => Math.floor(Math.random() * 6)
    dice1Value = getRandomDice();
    dice2Value = getRandomDice();
    dice1.src = `/img/${images[dice1Value]}`
    dice2.src = `/img/${images[dice2Value]}`
     if(dice1Value > dice2Value) {
         title.innerText = 'Player 1 Wins'
     } else if (dice1Value < dice2Value) {
         title.innerText = 'Player 2 Wins'
     } else if (dice1Value === dice2Value) {
         title.innerText = "It's a draw!"
     }
})
