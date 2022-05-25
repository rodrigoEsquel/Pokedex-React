import { useEffect, useState } from "react";

const useFetchWithStorage = (recurso, param) => {
  const [data, setData] = useState(null);

  useEffect( () => {
      console.log(param);
    if (!param) {
      console.log('Seteo null');
      setData(null);
    } else if (localStorage.getItem(param)) {
      console.log('Traigo dato de el localStorage');
      setData(localStorage.getItem(param));
    } else {
      console.log('Traigo dato de la api');
      const fetch = async () => {
          try {
            const rec = await recurso(param);
            localStorage.setItem(param,rec);
            setData (rec)
          } catch (error) {
            console.log(error)
          }
        }
        fetch();
    }
  }, [recurso, param]);

  return [data];
}

export default useFetchWithStorage;