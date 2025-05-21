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
            <img src={`${product.images[0]}`} alt={product.title} />
          </div>
          <div className="product--info">
            <ol className='product--list'>
              <li>{product.availabilityStatus}</li>
            </ol>
            <p className="product--description">
              {product.description}
            </p>
            <span className='product--price'>{product.price}€</span>
          </div>

        </div>
        {product.title}
      </div>
    </>
  );
};

export default ProductPage;
