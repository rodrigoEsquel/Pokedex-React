import { useEffect, useReducer } from "react";

// WIP

const initialState = {loading: false, data: null, error: null}

const reducer = (state, action) => {  
  const {type, payload} = action;
  switch (type) {
    case 'ERROR':
      return {...state, loading: false, data: null, error: payload,}
    case 'LOADING':
      return {...state, loading: true, data: null, error: null,}
    case 'DATA':
      return {...state, loading: false, data: payload, error: null,}    
    default:
      return state;
  }
}

const useReduceFetchWithStorage = (recurso, param) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect( () => {
    if (!param) {
      dispatch({type: 'DATA', payload: null});
    } else if (localStorage.getItem(param)) {
      dispatch({type: 'DATA', payload: JSON.parse(localStorage.getItem(param))});
    } else {
      const fetch = async () => {
        dispatch({type: 'LOADING'});
        try {
          const resource = await recurso(param)
          localStorage.setItem(param,JSON.stringify(resource));
          dispatch({type: 'DATA', payload: resource});
        } catch (error) {
          dispatch({type: 'ERROR', payload: error});
        }
      }
        fetch()
    }
  } ,[recurso, param]);

  return state;
}

export default useReduceFetchWithStorage;