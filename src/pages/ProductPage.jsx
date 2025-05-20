import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import useFetchIdProduct from '../utils/useFetchIdProduct';

import Breadcrumb from '../components/Breadcrumb';



const ProductPage = () => {

  const { id } = useParams();
  const { data, error, loading, fetchDataId } = useFetchIdProduct(id);

  const [product, setProduct] = useState(null);

  useEffect(() => {
    if(id){
      fetchDataId(id);
      setProduct(data)
      console.log(data)
    }else {
      console.log('id is null');
    }
  }, [id]);

  if(loading) return <p>Loading...</p>
  if(error) return <p>Error: {error}</p>
  if(!data) return  <p>No data</p>

  return (
    <>
      <Breadcrumb />
      <div className="product--container">
        
      </div>

    </>
  )
}

export default ProductPage