axios.get('https://instabuy.com.br/apiv2_2/product.json?subcategory_id=57eec92f072d415b67c24175')
  .then((response) => {
    let { data } = response.data
    console.log(data[0])

    let urlImage = 'https://s3-us-west-2.amazonaws.com/ib.image.medium/m-' + data[0].thumb
    document.querySelector('.label_image').src = urlImage
    document.querySelector('.label_name').innerHTML = data[0].name
    document.querySelector('.label_brand').innerHTML = data[0].brand
    document.querySelector('.label_desc').innerHTML = data[0].description
    document.querySelector('.label_price').innerHTML = 'R$ ' + data[0].pc[0].price    
  })
  .catch((error) => {
    console.log(error)
  })