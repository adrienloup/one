import { useEffect, useState } from 'react';

export function useFetch<D>(
  url: string,
  options: { headers: HeadersInit | undefined } = { headers: {} }
) {
  const [loading, setLoading] = useState(true);
  const [errors, setErrors] = useState(null);
  const [data, setData] = useState<D>();

  useEffect(() => {
    fetch(url, {
      ...options,
      headers: {
        Accept: 'applications/json; charset=UTF-8',
        ...options.headers,
      },
    })
      .then((responce) => responce.json())
      .then((data: D) => {
        setData(data);
        setLoading(false);
      })
      .catch((e) => setErrors(e))
      .finally(() => setLoading(false));
  }, []);

  return {
    loading,
    errors,
    data,
  };
}
