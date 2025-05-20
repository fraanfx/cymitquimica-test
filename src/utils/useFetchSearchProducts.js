import { useState, useEffect } from 'react';

const useFetchSearchProducts = (searchTerm, { enabled = true } = {}) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!enabled || !searchTerm) return;

    const controller = new AbortController();

    const fetchSearch = async () => {
      setLoading(true);
      try {
        const res = await fetch(`https://dummyjson.com/products/search?q=${searchTerm}`, {
          signal: controller.signal
        });
        if (!res.ok) throw new Error('Search fetch failed');
        const result = await res.json();
        setData(result.products || []);
      } catch (err) {
        if (err.name !== 'AbortError') setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchSearch();
    return () => controller.abort();
  }, [searchTerm, enabled]);

  return { data, loading, error };
};

export default useFetchSearchProducts;
