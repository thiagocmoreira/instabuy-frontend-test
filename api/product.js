axios.get('https://instabuy.com.br/apiv2_2/product.json?subcategory_id=57eec92f072d415b67c24175')
  .then((response) => {
    let { data } = response.data
    populateCards(data)
  })
  .catch((error) => {
    console.log(error)
  })

function collectCards() {
  let cards = document.querySelectorAll('.card')
  return cards
}

function createCard(product) {
  html = $('<div class="column">')
    .append($('<div class="ui special cards">')
      .append($('<div class="card">')
        .append($('<div class="blurring dimmable image">')
          .append($('<div class="ui dimmer">')
            .append($('<div class="content">')
              .append($('<div class="center">')
                .append($('<div class="ui inverted button">')
                  .append($('<i class="shop icon"></i>')
                  .append('<span>Adicionar ao Carrinho</span>')
                  )
                )
              )
            )
          )

          .append($('<div class="ui fluid image label-product">')
            .append($('<div class="ui green ribbon label">')
              .append($('<i class="envira icon"></i>')
              )
              .append('Feira')
            )
          )
          .append('<img class="get-image" src="' + product.image + '">')
        )

        .append($('<div class="content">')
          .append($('<a class="header get-name">' + product.name + '</a>')
          )        
          .append($('<div class="meta">')
            .append($('<span class="date get-brand">' + product.brand + '</span>')
            )
          )
          .append($('<div class="description">')
            .append($('<div class="ui rating" data-rating="4" data-max-rating="5">')
            )
          )
        )                

        .append($('<div class="extra content">')
          .append($('<a class="price get-price">')
            .append($('<span>R$ ' + product.price + '</span>')
            )
          )
        )
      )
    )

  $(".ui.three.column.grid.products").append(html)
  $('.ui.rating').rating()
}

function populateCards(products) {
  for(let product of products) {
    let newProduct = {
      image: 'https://s3-us-west-2.amazonaws.com/ib.image.medium/m-' + product.thumb,
      name: product.name,
      brand: product.brand,
      price: product.pc[0].price
    }
    createCard(newProduct)
  }
}