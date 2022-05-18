import { useEffect, useState } from "react";

const useFetch = (recurso, param) => {
  const [data, setData] = useState(null);
  

  useEffect(()=>{
    if (param) {
      const fetch = async () => {
        try {
          setData (await recurso(param))
        } catch (error) {
          console.log(error)
        }
      }
      fetch()
    } 
  },[recurso, param])

  return [data];
} 


export default useFetch;