import { createSlice } from '@reduxjs/toolkit';

const rows = [
  {
    os: '13412341',
    'ev-ex': 'IC',
  },
  {
    os: '13412342',
    'ev-ex': 'IC',
  },
  {
    os: '13412343',
    'ev-ex': 'IC',
  },
];

export const appSlice = createSlice({
  name: 'app',
  initialState: {
    tableData: rows,
    osData: {
      oscode: ''
    },
    osDetails: {
      osPieces: '',
      osClient: '',
    },
  },
  reducers: {
    setTableData: (state, action) => {
      state.tableData.push(action.payload)
    },
    setOsData: (state, action) => {
      state.osData = action.payload
    },
    setOsDetails: (state, action) => {
      state.osDetails = {
        osPieces: action.payload.pieces,
        osClient: action.payload.client
      }
    }
  }
});

export const { setTableData, setOsData, setOsDetails } = appSlice.actions;

export default appSlice.reducer;
