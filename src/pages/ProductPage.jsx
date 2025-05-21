import React from 'react';
import { useParams } from 'react-router-dom';
import useFetchIdProduct from '../utils/useFetchIdProduct';
import Breadcrumb from '../components/Breadcrumb';

const ProductPage = () => {
  const { id } = useParams();
  const { data: product, error, loading } = useFetchIdProduct(id);

  const fillStars = (rating) => {
    const filledStars = '★'.repeat(rating);
    const emptyStars = '☆'.repeat(5 - rating);
    return filledStars + emptyStars;
  }

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
            <p className="product--rating">{fillStars(Math.ceil(product.rating))}</p>

            <p className="product--description">
              {product.description}
            </p>
            <div className='product--price'><span>{product.price}€</span></div>
            <ul className='product--list'>
              <li className={`list--availability${product.availabilityStatus === 'In Stock' ? '' : '__out'}`}>{product.availabilityStatus}</li>
         
              <li>{product.shippingInformation}</li>
              <li>{product.warrantyInformation}</li>
            </ul>
            

            <div className="product--reviews">
              { product && product.reviews.length > 0 ? (
                product.reviews.map((review, idx) => (
                  <div key={idx} className="product-review--container">
                    <span className='product-review--rate'>{fillStars(review.rating)}</span>
                    <p className='product-review--comment'>{review.comment}</p>
                    <span className='product-review--author'>{review.reviewerName}</span>
                  </div>)
                )) : (
                  <p>No hay comentarios</p>
                )
            }
            </div>
          </div>
          
        </div>
    
      </div>
    </>
  );
};

export default ProductPage;
