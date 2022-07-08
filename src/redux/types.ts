import store from 'redux/store';

export type RootStateT = ReturnType<typeof store.getState>;
export type AppDispatchT = typeof store.dispatch;

export type AppStateT = {
  tableData: {
    data: TableDataRowT[];
    status: StatusT;
    error: string | null;
  }
  osData: OsDataT;
  osDetails: {
    data: OsDetailsT;
    status: StatusT;
    error: string | null;
  }
};
export type StatusT = 'idle' | 'loading' | 'succeded' | 'failed';
export type TableDataRowT = { os: string, 'ev-ex': string };
export type OsDataT = { oscode: string, 'ev-ex': string };
export type OsDetailsT = { osPieces: string, osClient: string };