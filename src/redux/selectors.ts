import { RootStateT } from 'redux/types';

export const selectTableData = (state: RootStateT) => state.app.tableData;
export const selectOsData = ((state: RootStateT) => state.app.osData);
export const selectOsDetails = (state: RootStateT) => state.app.osDetails;
