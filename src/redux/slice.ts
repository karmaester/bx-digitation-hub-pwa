import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppStateT, TableDataRowT, OsDataT, OsDetailsT } from 'redux/types';

const tableData: TableDataRowT[] = [
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

const initialState: AppStateT = {
  tableData,
  osData: {
    oscode: ''
  },
  osDetails: {
    osPieces: '',
    osClient: '',
  },
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setTableData: (state, action: PayloadAction<TableDataRowT>) => {
      state.tableData.push(action.payload)
    },
    setOsData: (state, action: PayloadAction<OsDataT>) => {
      state.osData = action.payload
    },
    setOsDetails: (state, action: PayloadAction<OsDetailsT>) => {
      state.osDetails = action.payload
    }
  }
});

export const { setTableData, setOsData, setOsDetails } = appSlice.actions;

export default appSlice.reducer;
