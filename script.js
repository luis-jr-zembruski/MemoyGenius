let order = []
let clickedOrder = []
let score = 0

//0 - green
//1 - red
//2 - yellow
//3 - blue

const blue = document.querySelector('.blue')
const red = document.querySelector('.red')
const green = document.querySelector('.green')
const yellow = document.querySelector('.yellow')

const sheffleOrder = () => {
  let colorOrder = Math.floor(Math.random() * 4)
  order[order.length] = colorOrder
  clickedOrder = []
  // order.push(colorOrder)

  for (let i in order) {
    let elementColor = createColorElement(order[i])
    lightColor(elementColor, Number(i) + 1)
  }
}

const lightColor = (element, number) => {
  number = number * 500
  setTimeout(() => {
    element.classList.add('selected')
  }, number - 250)
  setTimeout(() => {
    element.classList.remove('selected')
  }, number)
}

const checkOrder = () => {
  for (let i in clickedOrder) {
    if (clickedOrder[i] !== order[i]) {
      gameOver()
      break
    }
  }
  if (clickedOrder.length == order.length) {
    alert(`Pontuação final: ${score}\nVocê acertou! Iniciando próximo nível...`)
    nextLevel()
  }
}

const click = color => {
  clickedOrder[clickedOrder.length] = color
  createColorElement(color).classList.add('selected')

  setTimeout(() => {
    createColorElement(color).classList.remove('selected')
    checkOrder()
  }, 250)
}

const createColorElement = color => {
  switch (color) {
    case 0:
      return green
    case 1:
      return red
    case 2:
      return yellow
    case 3:
      return blue
  }
}

const nextLevel = () => {
  score++
  sheffleOrder()
}

const gameOver = () => {
  alert(`Pontuação final: ${score}\nVocê perdeu!`)
  order = []
  clickedOrder = []

  playGame()
}

const playGame = () => {
  alert('Iniciando jogo...')
  score = 0
  nextLevel()
}

green.onclick = () => click(0)
red.onclick = () => click(1)
yellow.onclick = () => click(2)
blue.onclick = () => click(3)

playGame()
