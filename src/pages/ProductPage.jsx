import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import useFetchIdProduct from '../utils/useFetchIdProduct';

import Breadcrumb from '../components/Breadcrumb';



const  ProductPage =  () => {

  const { id } = useParams();
  const { data, error, loading, fetchDataId } = useFetchIdProduct(id);

  const [product, setProduct] = useState();

  useEffect(() => {
    if(id){
      fetchDataId(id);
      setProduct(data)
      console.log('product', product)
    }else {
      console.log('id is null');
    }
  }, [id]);

  if(loading) return <p>Loading...</p>
  if(error) return <p>Error: {error}</p>
  if(!product) return  <p>No data</p>

  return (
    <>
      <Breadcrumb title={product.title}/>
      <div className="product--container">
        
      </div>

    </>
  )
}

export default ProductPage