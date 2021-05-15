document.addEventListener('DOMContentLoaded', () => {
  // card options
  /*
  const cardArray = [
    {
      name: 'fries',
      img: 'images/fries.png'
    },
    {
      name: 'fries',
      img: 'images/fries.png'
    },
    {
      name: 'cheeseburger',
      img: 'images/cheeseburger.png'
    },
    {
      name: 'cheeseburger',
      img: 'images/cheeseburger.png'
    },
    {
      name: 'hotdog',
      img: 'images/hotdog.png'
    },
    {
      name: 'hotdog',
      img: 'images/hotdog.png'
    },
    {
      name: 'ice-cream',
      img: 'images/ice-cream.png'
    },
    {
      name: 'ice-cream',
      img: 'images/ice-cream.png'
    },
    {
      name: 'milkshake',
      img: 'images/milkshake.png'
    },
    {
      name: 'milkshake',
      img: 'images/milkshake.png'
    },
    {
      name: 'pizza',
      img: 'images/pizza.png'
    },
    {
      name: 'pizza',
      img: 'images/pizza.png'
    },
  ]
  */

  const cardArray = [
    {
      name: 'cris',
      img: 'images/cris.png'
    },
    {
      name: 'cris',
      img: 'images/cris.png'
    },
    {
      name: 'diana',
      img: 'images/diana.png'
    },
    {
      name: 'diana',
      img: 'images/diana.png'
    },
    {
      name: 'luz',
      img: 'images/luz.png'
    },
    {
      name: 'luz',
      img: 'images/luz.png'
    },
    {
      name: 'nury',
      img: 'images/nury.png'
    },
    {
      name: 'nury',
      img: 'images/nury.png'
    },
    {
      name: 'nala',
      img: 'images/nala.png'
    },
    {
      name: 'nala',
      img: 'images/nala.png'
    },
    {
      name: 'francisco',
      img: 'images/francisco.png'
    },
    {
      name: 'francisco',
      img: 'images/francisco.png'
    },
  ]

  cardArray.sort(() => 0.5 - Math.random())

  const grid = document.querySelector('.grid')
  const resultDisplay = document.querySelector('#result')
  let cardsChosen = []
  let cardsChosenId = []
  let cardsWon = []

  function createBoard(){
    for (let i = 0; i < cardArray.length; i++){
      var card = document.createElement('img')
      card.setAttribute('src', 'images/blank.png')
      card.setAttribute('data-id', i)
      card.addEventListener('click', flipCard)
      grid.appendChild(card)
    }
  }

  // check for matches
  function checkForMatch(){
    var cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenId[0] 
    const optionTwoId = cardsChosenId[1]

    if (optionOneId === optionTwoId){
      alert('You have clicked the same image!')
      cards[optionOneId].setAttribute('src', 'images/blank.png')
      cards[optionTwoId].setAttribute('src', 'images/blank.png')      
    }else if ( cardsChosen[0] === cardsChosen[1] ){
      alert('You found a match')
      cards[optionOneId].setAttribute('src', 'images/white.png')
      cards[optionTwoId].setAttribute('src', 'images/white.png')
      cardsWon.push(cardsChosen)
    }else{
      cards[optionOneId].setAttribute('src', 'images/blank.png')
      cards[optionTwoId].setAttribute('src', 'images/blank.png')
      alert('Sorry, try again')
    }

    cardsChosen = []
    cardsChosenId = []
    resultDisplay.textContent = cardsWon.length

    if (cardsWon.length === cardArray.length/2){
      resultDisplay.textContent = 'Congratulations! You found them all!'
    }

  }

  // flip your card
  function flipCard(){
    let cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenId.push(cardId)
    this.setAttribute('src', cardArray[cardId].img)
    if(cardsChosen.length === 2){
      setTimeout(checkForMatch, 500)
    }
  }

  createBoard()

});