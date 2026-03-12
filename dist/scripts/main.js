window.addEventListener('DOMContentLoaded', () => {
  const gameStart = document.querySelector('.gameStart')
  const gameEnd = document.querySelector('.gameEnd')

  const resultWin = document.querySelector('.result .win')
  const resultDraw = document.querySelector('.result .draw')
  const resultLose = document.querySelector('.result .lose')

  const playNormal = document.querySelector('.gameNormal')
  const playAdvanced = document.querySelector('.gameAdvanced')

  const selectedHand = document.querySelectorAll('.selectHand img')

  const advancedHands = document.querySelectorAll('.selectHand .advanced')

  const selectHand = document.querySelector('.selectHand')
  const handCPU = document.querySelectorAll('.halfCPU img')
  const handPlayer = document.querySelectorAll('.halfPlayer img')

  const soundHover = document.querySelector('.soundHover')
  const soundSelect = document.querySelector('.soundSelect')

  const result = document.querySelector('.result')

  let numberHands = 3

  let gameMode = 'normal'

  let justLoaded = true

  const gameHands = ['rock', 'paper', 'scissors', 'lizard', 'spock']
  const gameTruthTable = [
    [0, 1, -1, -1, 1],
    [-1, 0, 1, 1, -1],
    [1, -1, 0, -1, 1],
    [1, -1, 1, 0, -1],
    [-1, 1, -1, 1, 0]
  ]

  let handPlayedCPU = undefined
  let handPlayedPlayer = undefined

  playNormal.addEventListener('mousedown', () => {
    console.log('playNormal')
    soundHover.playbackRate = 1
    soundHover.currentTime = 0
    soundHover.play()
    gameMode = 'normal'
    justLoaded = true
    playNormal.classList.add('hide')
    playAdvanced.classList.remove('hide')
    selectHand.classList.remove('hide')
    advancedHands.forEach((name) => {
      name.classList.add('hide')
    })
  })

  playAdvanced.addEventListener('mousedown', () => {
    console.log('playAdvanced')
    soundHover.playbackRate = 1
    soundHover.currentTime = 0
    soundHover.play()
    gameMode = 'advanced'
    justLoaded = true
    numberHands = 5
    playNormal.classList.remove('hide')
    playAdvanced.classList.add('hide')
    selectHand.classList.remove('hide')
    advancedHands.forEach((name) => {
      name.classList.remove('hide')
    })
  })

  selectedHand.forEach((name) => {
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
      handPlayedCPU = Math.floor(Math.random() * numberHands)
      showResults()
    })
  })

  function showResults() {
    handCPU[handPlayedCPU].classList.remove('hide')
    handPlayer[handPlayedPlayer].classList.remove('hide')
    if (gameTruthTable[handPlayedCPU][handPlayedPlayer] > 0) {
      resultWin.classList.remove('hide')
    } else if (gameTruthTable[handPlayedCPU][handPlayedPlayer] === 0) {
      resultDraw.classList.remove('hide')
    } else {
      resultLose.classList.remove('hide')
    }
  }

  result.addEventListener('mousedown', () => {
    handPlayedCPU = undefined
    handPlayedPlayer = undefined
    numberHands = gameMode === 'normal' ? 3 : 5

    resultWin.classList.add('hide')
    resultDraw.classList.add('hide')
    resultLose.classList.add('hide')

    handCPU.forEach((hand) => hand.classList.add('hide'))
    handPlayer.forEach((hand) => hand.classList.add('hide'))

    gameEnd.classList.add('hide')
    gameStart.classList.remove('hide')

    if (gameMode === 'normal') {
      playNormal.classList.add('hide')
      playAdvanced.classList.remove('hide')
      advancedHands.forEach((h) => h.classList.add('hide'))
    } else {
      playNormal.classList.remove('hide')
      playAdvanced.classList.add('hide')
      advancedHands.forEach((h) => h.classList.remove('hide'))
    }
    selectHand.classList.remove('hide')
    justLoaded = true
  })
})
