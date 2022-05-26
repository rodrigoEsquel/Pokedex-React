import { useEffect, useState } from "react";

const useFetchWithStorage = (recurso, param) => {
  const [data, setData] = useState(null);

  useEffect( () => {
    if (!param) {
      setData(null);
    } else if (localStorage.getItem(param)) {
      setData(JSON.parse(localStorage.getItem(param)));
    } else {
      const fetch = async () => {
          try {
            const resource = await recurso(param);
            localStorage.setItem(param,JSON.stringify(resource));
            setData(resource);
          } catch (error) {
            console.log('Pokemon no valido')
          }
        }
        fetch();
    }
  }, [recurso, param]);

  return [data];
}

export default useFetchWithStorage;