import { useState, useEffect } from 'react';

const useFetch = (recurso, param) => {
  const [data, setData] = useState();

  useEffect(()=>{
    return setData(recurso(param))
  }, [recurso,param]);

  return data;
}

export default useFetch;