import axios, { AxiosRequestConfig } from "axios";
import { useState, useEffect } from "react";

/**
 *
 * @param config : {@link AxiosRequestConfig}
 * @returns {data}  data : Response for api
 * @returns {error} error : Error message
 */
function useFetch<T>(config: AxiosRequestConfig, url: string) {
  const [data, setData] = useState<T[]>();
  const [isLoad, setIsLoad] = useState(false);
  const [error, setError] = useState<string | null>();

  const fetchData = async () => {
    await axios({ ...config, url })
      .then((response) => {
        if (response.data) {
          setData(response.data as T[]);
        }
      })
      .catch((err) => setError(err))
      .finally(() => setIsLoad(false));
  };

  useEffect(() => {
    setIsLoad(true);
    setTimeout(() => fetchData(), 3000);
  }, [url]);

  return { data, error, isLoad };
}

export { useFetch };
