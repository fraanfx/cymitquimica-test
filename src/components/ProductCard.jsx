import React from 'react'

const ProductCard = (product) => {
    const productItem =  product.item;
  return (
    <div aria-label="producto">
        <h3>{productItem.title}</h3>
        <h6>{}</h6>
        <div className="image--container" >
            <img src={productItem.images[0]} />
            <span className='price-tag'>
                {product.item}
            </span>
        </div>
    </div>
  )
}

export default ProductCard