import store from 'redux/store';

export type RootStateT = ReturnType<typeof store.getState>;
export type AppDispatchT = typeof store.dispatch;

export type AppStateT = {
  tableData: TableDataRowT[];
  osData: OsDataT;
  osDetails: OsDetailsT;
};
export type TableDataRowT = {os: string, 'ev-ex': string};
export type OsDataT = {oscode: string, 'ev-ex': string};
export type OsDetailsT = {osPieces: string, osClient: string};