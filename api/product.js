axios.get('https://instabuy.com.br/apiv2_2/product.json?subcategory_id=57eec92f072d415b67c24175')
  .then((response) => {
    let { data } = response.data
    data.splice(3, 8)
    // createCard()
    let cards = collectCards()
    populateCards(cards, data)
  })
  .catch((error) => {
    console.log(error)
  })

function collectCards() {
  let cards = document.querySelectorAll('.card')
  return cards
}

// function createCard() {
//   console.log('Passei aqui')
//   $("<p id='test'>My <em>new</em> text</p>").appendTo('body')
// }

function populateCards(cards, products) {
  for(let product of products) {
    let index = products.indexOf(product)

    let urlImage = 'https://s3-us-west-2.amazonaws.com/ib.image.medium/m-' + product.thumb
    cards[index].querySelector('.get-image').src = urlImage
    cards[index].querySelector('.header.get-name').innerHTML = product.name
    cards[index].querySelector('.get-brand').innerHTML = product.brand
    cards[index].querySelector('.get-price').innerHTML = 'R$ ' + product.pc[0].price
  }
}