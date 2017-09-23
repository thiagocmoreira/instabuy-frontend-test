axios.get('https://instabuy.com.br/apiv2_2/product.json?subcategory_id=57eec92f072d415b67c24175')
  .then((response) => {
    let { data } = response.data
    populateCards(data)
  })
  .catch((error) => {
    console.log(error)
  })
