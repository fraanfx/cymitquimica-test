import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import SearchInput from '../components/SearchInput';
import CategorySelect from '../components/CategorySelect';

import useFetchAllProducts from '../utils/useFetchAllProducts';
import useFetchSearchProducts from '../utils/useFetchSearchProducts';
import useFetchCategoryProducts from '../utils/useFetchCategoryProducts';
import useGetCategories from '../utils/useGetCategories';


import ProductCard from '../components/ProductCard';

const HomePage = () => {
    const searchRef = useRef(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [category, setCategory] = useState('');


  const { data: categories, loading: loadingCategories } = useGetCategories();

  const { data: allProducts, error: errorProducts,  loading: loadingAll } = useFetchAllProducts({
    enabled: !searchTerm && !category, 
  });

  const { data: searchProducts, error: errorSearch, loading: loadingSearch } = useFetchSearchProducts(searchTerm, {
    enabled: !!searchTerm,
  });

  const { data: categoryProducts, error: errorCategory, loading: loadingCategory } = useFetchCategoryProducts(category, {
    enabled: !!category && !searchTerm,
  });

    const handleSearchChange = (value) =>{
        setSearchTerm(value);
        setCategory('');
    }

    const handleCategoryChange = (value) => {
        setCategory(value);
        setSearchTerm('');
        searchRef.current?.clear();
      };


    
    const loading = loadingAll || loadingSearch || loadingCategory;

    const error =  errorProducts || errorSearch || errorCategory;

    const products = searchTerm
    ? searchProducts
    : category
    ? categoryProducts
    : allProducts;

   if(loading) return <p>Loading...</p>
   if(error) return <p> Error {error}</p>
   if(!products) return <p>No data</p>
  return (
    <>
        <div className='container--search' aria-label="Buscador">
            <SearchInput ref={searchRef} onSearchClick={handleSearchChange} placeholder="Busca en nuestra tienda" />
        </div>
        <div className="container--select">
        <CategorySelect
            categories={categories}
            selected={category}
            onChange={handleCategoryChange}
            />
        </div>
        <article className='container--grid'>
            <div className="" aria-label='Elementos de la página'>
               { products && products.length > 0? (
                
                   products.map((product) => (
                       
                           <Link key={product?.id} to={`/product/${product?.id}`}>
                               <ProductCard key={product?.id} item={product} />
                           </Link>
                       
                   ))
               ) : (
                <div className="">
                    <button className="clear-tag" onClick={() => handleSearchChange('')} >Limpiar formulario</button>
                </div>
               )}
            </div>
        </article>
    </>
    
  )
}

export default HomePage