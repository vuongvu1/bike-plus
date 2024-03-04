import { useState, useEffect } from "react";
import { mockData } from "../contexts/mockData";
import { useMockLoading } from "./useMockLoading";

export const useFetchMockData = () => {
  const [data, setData] = useState({});
  const [isLoading] = useMockLoading(2000);

  useEffect(() => {
    if (!isLoading) {
      setData(mockData);
    }
  }, [isLoading]);

  return { data, isLoading };
};
