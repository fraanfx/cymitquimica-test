import React from 'react'

const ProductCard = (product) => {
    const productItem =  product.item;
  return (
    <div className='container--card' aria-label="producto">
        <h3 className='card--title'>{productItem.title}</h3>
        <h6 className='card--subtitle'>{}</h6>
        <div className="image--container" >
            <img className='item--image' src={productItem.images[0]} />
            <span className='price--tag'>
                {productItem.price.toFixed(2)}€
            </span>
        </div>
    </div>
  )
}

export default ProductCard