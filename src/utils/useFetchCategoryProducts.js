import { useState, useEffect } from 'react';

const useFetchCategoryProducts = (category, { enabled = true } = {}) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!enabled || !category) return;

    const controller = new AbortController();

    const fetchCategory = async () => {
      setLoading(true);
      try {
        const res = await fetch(`https://dummyjson.com/products/category/${category}`, {
          signal: controller.signal
        });
        if (!res.ok) throw new Error('Category fetch failed');
        const result = await res.json();
        setData(result.products || []);
      } catch (err) {
        if (err.name !== 'AbortError') setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCategory();
    return () => controller.abort();
  }, [category, enabled]);

  return { data, loading, error };
};

export default useFetchCategoryProducts;
