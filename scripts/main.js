window.addEventListener('DOMContentLoaded', () => {
  console.log('www.orjon.com')
  console.log('Rock-Paper-Scissors v2.1 2019-05-09')
  console.log('http://www.orjon.com/rockpaperscissors')

  const gameStart = document.querySelector('.gameStart')
  const gameEnd = document.querySelector('.gameEnd')

  const resultWin = document.querySelector('.result .win')
  const resultDraw = document.querySelector('.result .draw')
  const resultLose = document.querySelector('.result .lose')

  const screenStart = document.querySelector('.screenStart')
  const playNormal = document.querySelector('.screenStart .gameNormal')
  const playAdvanced = document.querySelector('.screenStart .gameAdvanced')

  const selectedHand = document.querySelectorAll('.screenSelectHand img')

  const advancedHands =document.querySelectorAll('.screenSelectHand .advanced img')

  const screenSelectHand = document.querySelector('.screenSelectHand')
  const handCPU = document.querySelectorAll('.halfCPU img')
  const handPlayer = document.querySelectorAll('.halfPlayer img')



  const soundHover = document.querySelector('.soundHover')
  const soundSelect = document.querySelector('.soundSelect')

  let numberHands = 3

  let justLoaded = true

  const gameHands = ['rock','paper','scissors','lizard','spock']
  const gameTruthTable = [
    [ 0, 1,-1,-1, 1],
    [-1, 0, 1, 1,-1],
    [ 1,-1, 0,-1, 1],
    [ 1,-1, 1, 0, 1],
    [-1, 1,-1, 1, 0]
  ]

  let handPlayedCPU = undefined
  let handPlayedPlayer = undefined


  playNormal.addEventListener('mousedown', () => {
    soundHover.playbackRate = 1
    soundHover.currentTime = 0
    soundHover.play()
    justLoaded = true
    screenStart.classList.add('hide')
    screenSelectHand.classList.remove('hide')
    advancedHands.forEach(name => {
      name.classList.add('hide')
    })
  })

  playAdvanced.addEventListener('mousedown', () => {
    soundHover.playbackRate = 1
    soundHover.currentTime = 0
    soundHover.play()
    justLoaded = true
    numberHands = 5
    screenStart.classList.add('hide')
    screenSelectHand.classList.remove('hide')
  })


  selectedHand.forEach(name => {
    name.addEventListener('mouseover', () => {
      name.classList.add('over')
      if (!justLoaded) {
        soundHover.playbackRate = 1
        soundHover.currentTime = 0
        soundHover.play()
      }
    })

    name.addEventListener('mouseout', () => {
      name.classList.remove('over')
      soundHover.playbackRate = 0.5
      justLoaded = false
    })

    name.addEventListener('mousedown', (e) => {
      name.classList.remove('mousedown')
      handPlayedPlayer = gameHands.indexOf(e.target.classList[0])
      gameStart.classList.add('hide')
      gameEnd.classList.remove('hide')
      soundSelect.currentTime = 0
      soundSelect.playbackRate = 1
      soundSelect.play()
      handPlayedCPU = (Math.floor(Math.random() * numberHands))
      showResults()
    })

  })


  function showResults() {
    handCPU[handPlayedCPU].classList.remove('hide')
    handPlayer[handPlayedPlayer].classList.remove('hide')
    console.log('Player hand: '+ gameHands[handPlayedPlayer])
    console.log('CPU hand: '+ gameHands[handPlayedCPU])
    console.log('CPU hand: '+ handPlayedCPU)
    if (gameTruthTable[handPlayedCPU][handPlayedPlayer] > 0) {
      resultWin.classList.remove('hide')
    } else if (gameTruthTable[handPlayedCPU][handPlayedPlayer] === 0) {
      resultDraw.classList.remove('hide')
    } else {
      resultLose.classList.remove('hide')
    }
  }
})
