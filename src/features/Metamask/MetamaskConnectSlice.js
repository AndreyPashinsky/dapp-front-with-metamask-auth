import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  account: null,
  errorMessage: "",
  status: 'idle',
};

export const connectMetaAsync = createAsyncThunk(
  'metaConnect',
  async () => {
    if (window.ethereum) {
      try {
        const response = await window.ethereum.request({
          method: "eth_requestAccounts",
        })
        return response
      } catch (err) {
        console.error(err);
        console.log("There was a problem connecting to MetaMask");
      }
    } else {
      window.open('https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn', '_blank')
    }
  }
);

export const MetamaskConnectSlice = createSlice({
  name: 'metamaskconnect',
  initialState,
  reducers: {
    setAccount: (state) => {
      state.account = null;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(connectMetaAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(connectMetaAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.account = action.payload;
      })
      .addCase(connectMetaAsync.rejected, (state) => {
        state.status = 'rejected';
      })
      ;
  },
});

export const { setAccount } = MetamaskConnectSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectCount = (state) => state.counter.value;

export default MetamaskConnectSlice.reducer;