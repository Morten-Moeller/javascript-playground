console.clear()
const box = document.querySelector('.box')
const buttonRotate = document.querySelector('.button-rotate')
const buttonBackground = document.querySelector('.button-background')
const buttonRadius = document.querySelector('.button-radius')
const buttonShake = document.querySelector('.button-shake')

buttonRotate.addEventListener('click', () => {
  box.classList.toggle('rotation-back')
  box.classList.toggle('rotation')
})

buttonBackground.addEventListener('click', () => {
  box.classList.toggle('background')
})

buttonRadius.addEventListener('click', () => {
  box.classList.toggle('radius')
})

buttonShake.addEventListener('click', () => {
  box.classList.add('shake')
  setTimeout(() => {
    box.classList.remove('shake')
    console.log('remove class shake')
  }, 2500)
})
