window.addEventListener('DOMContentLoaded', () => {
  console.log('Hello there...')

  const selected = document.querySelectorAll('.selector')
  const selectStart = document.querySelector('.start')

  const soundHover = document.querySelector('.soundHover')
  const soundSelect = document.querySelector('.soundSelect')

  console.log(selected)

  selected.forEach(name => {
    name.addEventListener('mouseenter', () => {
      name.classList.add('hover')
      soundHover.playbackRate = 1
      soundHover.currentTime = 0
      soundHover.play()
      console.log('touch')
      // event.target.classList.remove('clicked')
    })
    name.addEventListener('mouseout', () => {
      name.classList.remove('hover')
      soundHover.playbackRate = 0.5
      console.log('let go')
      // event.target.classList.remove('clicked')
    })

    name.addEventListener('mousedown', () => {
      name.classList.add('mousedown')
      soundSelect.currentTime = 0
      soundSelect.playbackRate = 1
      soundSelect.play()
    })

  })

  selectStart.addEventListener('mouseenter', () => {
    selectStart.classList.add('hover')
    console.log('touch')
    // event.target.classList.remove('clicked')
  })


  selectStart.addEventListener('mousedown', () => {
    soundSelect.currentTime = 0
    soundSelect.playbackRate = 1
    soundSelect.play()
  })
  selectStart.addEventListener('mousedown', () => {
    soundSelect.currentTime = 0
    soundSelect.playbackRate = 1
    soundSelect.play()
  })



})
