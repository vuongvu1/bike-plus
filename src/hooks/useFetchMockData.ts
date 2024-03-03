import { useState, useEffect } from "react";
import { mockData } from "../data/mockData";

export const useFetchMockData = () => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setData(mockData);
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, [data]);

  return { data, loading };
};
