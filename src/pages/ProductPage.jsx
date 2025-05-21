import React from 'react';
import { useParams } from 'react-router-dom';
import useFetchIdProduct from '../utils/useFetchIdProduct';
import Breadcrumb from '../components/Breadcrumb';

const ProductPage = () => {
  const { id } = useParams();
  const { data: product, error, loading } = useFetchIdProduct(id);

  console.log(product)

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!product) return <p>No data</p>;

  return (
    <>
      <div className="product--container">
      <Breadcrumb title={product.title} />
        <div className="product--grid">
          <div className="product--image">
            <img src={`${product.thumbnail}`} alt={product.title} />
          </div>
          <div className="product--info">
          <p className="product--title">{product.title}</p>
          

          <p className="product--description">
              {product.description}
            </p>
            <ul className='product--list'>
              <li className={`list--availability${product.availabilityStatus === 'In Stock' ? '' : '__out'}`}>{product.availabilityStatus}</li>
              <li>{product.shippingInformation}</li>
              <li>{product.warrantyInformation}</li>
            </ul>
            
            <span className='product--price'>{product.price}€</span>
          </div>
          {product.reviews.length > 0 &&
              product.reviews.map((review) => {
                <div className="product-review--container">
                  <p>{review.comment}</p>
                </div>
              })
          }
        </div>
    
      </div>
    </>
  );
};

export default ProductPage;
