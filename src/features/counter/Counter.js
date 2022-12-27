import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { connectMetaAsync, decrement } from './counterSlice';
import { Icon } from '@iconify/react';
import truncateEthAddress from 'truncate-eth-address'

export function Counter() {
  
  const dispatch = useDispatch();
  const { account } = useSelector((state) => state.counter)

  useEffect(() => {    
    if (window.ethereum) {      
      window.ethereum.on("accountsChanged", () => dispatch(connectMetaAsync()));
      window.ethereum.on("chainChanged", () => dispatch(decrement()));           
    }  
  }, []);
  
  return (
    <div
      className={ account ? "connect-btn-true" : "connect-btn-false" }
      onClick={() => dispatch(connectMetaAsync())}
    >
      { account ? 
          <div className="btn-container">
          <Icon className="metaIcon" icon="logos:metamask-icon" width="20" />
          {truncateEthAddress(account.toString())}
          <Icon className="attachIcon" icon="et:attachments" width="15" />
          </div>  : "Connect Wallet" }      
    </div>
  );
}