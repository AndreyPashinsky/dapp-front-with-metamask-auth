import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { connectMetaAsync, setAccount } from './MetamaskConnectSlice';
import { Icon } from '@iconify/react';
import truncateEthAddress from 'truncate-eth-address'

export function MetamaskConnect() {
  
  const dispatch = useDispatch();
  const dispatch_connectMetamaskAsync = () => dispatch(connectMetaAsync())
  const dispatch_changeAccountsAsync = () => dispatch(setAccount())
  const { account } = useSelector((state) => state.counter)
  

  useEffect(() => {    
    if (window.ethereum) {      
      window.ethereum.on("accountsChanged", dispatch_connectMetamaskAsync);
      window.ethereum.on("chainChanged", dispatch_changeAccountsAsync);           
    }  
    return () => {
      window.ethereum.removeListener("accountsChanged", dispatch_connectMetamaskAsync);
      window.ethereum.removeListener("chainChanged", dispatch_changeAccountsAsync); 
    }
  }, );
  
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