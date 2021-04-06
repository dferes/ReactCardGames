import React, { useState } from 'react';
import axios from 'axios';
import uuid from 'uuid';

const useFlip = () => {
  const [ isUp, setIsUp ] = useState(true);
  const toggleCard = () =>  (setIsUp(isUp => !isUp));
  
  return [ isUp, toggleCard ];
}

const useAxios = (url) => {
  const [ responses, setResponse ] = useState([]);
  
  const getResponse = async (url, prependString='') => {
    const newRes = await axios.get(`${url}${prependString}`);
    setResponse(oldData => [...oldData, { ...newRes.data, id: uuid()}]);
  };
  return [ responses, getResponse];
}

export default useFlip;
export {useFlip, useAxios};