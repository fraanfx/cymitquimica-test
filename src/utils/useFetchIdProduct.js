import { useState } from 'react';


const useFetchIdProduct  = () => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const fetchDataId = async (id) => {
        setLoading(true);
        setError(null);

        const url = `https://dummyjson.com/product/${id}`;
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
    console.log(data)
    return { data, error, loading, fetchDataId };

}

export default useFetchIdProduct;