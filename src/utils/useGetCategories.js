import { useState, useEffect } from 'react';


const useGetCategories  = ({ enabled = true } = {}) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const getCategories = async () => {
        setLoading(true);
        setError(null);

        const url = `https://dummyjson.com/products/categories`;
        try{
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`); 
              }
              const result = (await response.json());
              setData(result);
            } catch (err) {
              const message = err ? err.message : 'Something went wrong';
              setError(message);
            } finally {
              setLoading(false);
            }
    };

    useEffect(() => {
        if (enabled) {
          getCategories();
        }
      }, [enabled]);
    return { data, error, loading, getCategories };

}

export default useGetCategories;