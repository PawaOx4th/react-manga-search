import axios, { AxiosRequestConfig } from "axios";
import { useState, useEffect } from "react";

/**
 *
 * @param config : {@link AxiosRequestConfig}
 * @returns {data}  data : Response for api
 * @returns {error} error : Error message
 */
function useFetch<T>(config: AxiosRequestConfig) {
  const [data, setData] = useState<T[]>();
  const [error, setError] = useState<string | null>();

  const fetchData = async () => {
    await axios(config)
      .then((response) => {
        if (response.data) {
          setData(response.data as T[]);
        }
      })
      .catch((err) => setError(err));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { data, error };
}

export { useFetch };
