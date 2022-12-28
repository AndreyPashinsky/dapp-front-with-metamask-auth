import { configureStore } from '@reduxjs/toolkit';
import MetamaskConnectReducer from '../features/Metamask/MetamaskConnectSlice';

export const store = configureStore({
  reducer: {
    counter: MetamaskConnectReducer,
  },
});
