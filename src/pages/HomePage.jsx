import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import SearchInput from '../components/SearchInput';

import useFetchAllProducts from '../utils/useFetchAllProducts';
import ProductCard from '../components/ProductCard';

const HomePage = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const {
        data,
        error,
        loading,
        fetchData
    } = useFetchAllProducts();

    useEffect(() => { 
        fetchData();
    }, [])

   if(loading) return <p>Loading...</p>
   if(error) return <p> Error {error}</p>
   if(!data) return <p>No data</p>
  return (
    <>
        <div className='container--search' aria-label="Buscador">
            <SearchInput />
        </div>
        <article className='container--grid'>
            <div className="" aria-label='Elementos de la página'>

               { data && data.length > 0? (

                   data.map((product) => (
                       <>
                           <Link to={`/product/:${product?.id}`}>
                               <ProductCard key={product?.id} item={product} />
                           </Link>
                       </>
                   ))
               ) : (
                <div className="">
                    <button className="clear-tag" onClick={() => searchRef.current?.clear()} >Limpiar formulario</button>
                </div>
               )}
            </div>
        </article>
    </>
    
  )
}

export default HomePage