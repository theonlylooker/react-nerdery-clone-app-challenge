import React, { useEffect, useState } from "react";
import axios, { Axios, AxiosError } from "axios";
import { currentConsumer } from "../consumers/index";

const useAsync = <T,>(
  URL: string
): { data: T | null; error: unknown; loading: boolean } => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string>();
  useEffect(() => {
    setLoading(true);
    const fetch = async () => {
      try {
        const response = await currentConsumer<T>(URL);
        const data = response.data;
        setData(data);
        setLoading(false);
      } catch (error) {
        if (error instanceof Error) setError(error.message);
        else setError(String(error));
      }
    };
    fetch();
  }, [URL]);
  return { data, error, loading };
};

export default useAsync;
