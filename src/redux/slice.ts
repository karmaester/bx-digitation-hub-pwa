import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchOsDetails, fetchSaveData } from '@redux/thunks';
import { AppStateT, TableDataRowT, OsDataT, OsDetailsT } from '@redux/types';

const data: TableDataRowT[] = [
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
  checkpoints: [
    { value: 'IC', name: 'IC' },
    { value: 'AV', name: 'AV' },
    { value: 'EX', name: 'EX' },
  ],
  tableData: {
    data,
    status: 'idle',
    error: null
  },
  osData: {
    oscode: '',
    'ev-ex': ''
  },
  osDetails: {
    data: {
      osPieces: '',
      osClient: ''
    },
    status: 'idle',
    error: null
  }
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setTableData: (state, action: PayloadAction<TableDataRowT>) => {
      state.tableData.data.push(action.payload)
    },
    setOsData: (state, action: PayloadAction<OsDataT>) => {
      state.osData = action.payload
    },
    setOsDetails: (state, action: PayloadAction<OsDetailsT>) => {
      state.osDetails.data = action.payload
    }
  },
  extraReducers(builder) {
    builder
      .addCase(fetchOsDetails.pending, (state) => {
        state.osDetails.status = 'loading';
      })
      .addCase(fetchOsDetails.fulfilled, (state, action) => {
        state.osDetails.status = 'succeded';
        state.osDetails.data = action.payload;
      })
      .addCase(fetchOsDetails.rejected, (state, action) => {
        state.osDetails.status = 'failed';
        state.osDetails.error = action.error.message as string;
      })
      .addCase(fetchSaveData.pending, (state) => {
        state.tableData.status = 'loading';
      })
      .addCase(fetchSaveData.fulfilled, (state, action) => {
        state.tableData.status = 'succeded';
        state.tableData.data.push({ os: state.osData.oscode, 'ev-ex': state.osData['ev-ex'] });
      })
      .addCase(fetchSaveData.rejected, (state, action) => {
        state.tableData.status = 'failed';
        state.tableData.error = action.error.message as string;
      });
  }
});

export const { setTableData, setOsData, setOsDetails } = appSlice.actions;

export default appSlice.reducer;
