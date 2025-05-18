import { useState } from 'react';


const useFetchAllProducts  = () => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const fetchData = async () => {
        setLoading(true);
        setError(null);

        const url = 'https://dummyjson.com/products';

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

    return { data, error, loading, fetchData };

}

export default useFetchAllProducts;