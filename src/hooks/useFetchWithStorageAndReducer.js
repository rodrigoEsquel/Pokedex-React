import { useEffect, useState, useReducer } from "react";

// WIP

const initialState = {data: null}

const reducer = (state, action) => {  
}

const useFetchWithStorageAndReducer = (recurso, param) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [data, setData] = useState(null);

  useEffect( () => {
    if (!param) {
      setData(null);
    } else if (localStorage.getItem(param)) {
      setData(localStorage.getItem(param));
    } else {
      const fetch = async () => {
          try {
            const cacheData = await recurso(param)
            localStorage.setItem(param,cacheData);
            setData (cacheData)
          } catch (error) {
            console.log('Pokemon no valido')
          }
        }
        fetch()
    }
  } ,[recurso, param]);

  return [state.data];
}

export default useFetchWithStorageAndReducer;