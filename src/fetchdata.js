import { useState, useEffect } from "react";
const useFetch = (url) => {
  const [isLoading, setIsLoading] = useState(false);
  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      try {
        const resp = await fetch(url);
        const data = await resp.json();
        setApiData(data);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { isLoading, apiData };
};

export default useFetch;
