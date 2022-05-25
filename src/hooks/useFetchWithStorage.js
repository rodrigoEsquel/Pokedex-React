import { useEffect, useState } from "react";

const useFetchWithStorage = (recurso, param) => {
  const [data, setData] = useState(null);

  useEffect( () => {
    if (!param) {
      setData(null);
    } else if (localStorage.getItem(!param)) {
      setData(localStorage.getItem(param));
    } else {
      const fetch = async () => {
          try {
            const cacheData = await recurso(param)
            localStorage.setItem(param,cacheData);
            setData (cacheData)
          } catch (error) {
            console.log(error)
          }
        }
        fetch()
    }
  } ,[recurso, param]);

  return [data];
}

export default useFetchWithStorage;