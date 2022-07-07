import { createSlice } from '@reduxjs/toolkit';

const rows = [
  {
    os: '13412341',
    'ev-ex': 'IC',
  },
  {
    os: '13412341',
    'ev-ex': 'IC',
  },
  {
    os: '13412341',
    'ev-ex': 'IC',
  },
];

export const counterSlice = createSlice({
  name: 'MainForm',
  initialState: {
    tableData: rows,
    osData: {},
    shouldAddItem: false,
    osDetails: {
      osPieces: '',
      osClient: '',
    },
  },
  reducers: {
    setOsDetails: (state, action) => {
      state.osData = {
        osPieces: action.payload.pieces,
        osClient: action.payload.client
      }
    }
  }
});

export const { setOsDetails } = counterSlice.actions;

export default counterSlice.reducer;
