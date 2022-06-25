const xMe = document.querySelector('.x-out')
const wrapper = document.querySelector('#sign-up')
const suBtn = document.querySelector('.su-btn')
const suBlock = document.querySelector('#sign-up-block')
const xMeOut = document.querySelector('#x-me-out')
const realSubmit = document.querySelector('#realSubmit')
const tyBlock = document.querySelector('#thank-you-block')
const xOutPlease = document.querySelector('#x-out-please')
const getOrganized = document.querySelector('#getOrganized')

xMe.addEventListener('click', xOut)

function xOut(){
  wrapper.style.display = 'none'
}

suBtn.addEventListener('click', signMeUp)

function signMeUp() {
  suBlock.style.display = 'block'
}

xMeOut.addEventListener('click', reset)

function reset() {
  suBlock.style.display='none'
}

realSubmit.addEventListener('click', thanks)

function thanks() {
  tyBlock.style.display='block'
  suBlock.style.display='none'
}

xOutPlease.addEventListener('click', fresh)
getOrganized.addEventListener('click', fresh)
function fresh() {
  tyBlock.style.display='none'
}

