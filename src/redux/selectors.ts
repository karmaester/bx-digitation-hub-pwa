import { RootStateT } from 'redux/types';

export const selectOsData = ((state: RootStateT) => state.app.osData);
export const selectOsDataCheckpoints = ((state: RootStateT) => state.app.checkpoints);
export const selectOsDetails = (state: RootStateT) => state.app.osDetails.data;
export const selectOsDetailsStatus = (state: RootStateT) => state.app.osDetails.status;
export const selectOsDetailsData = (state: RootStateT) => state.app.osDetails.data;
export const selectTableData = (state: RootStateT) => state.app.tableData.data;
export const selectTableStatus = (state: RootStateT) => state.app.tableData.status;
