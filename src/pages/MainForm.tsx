import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from 'hooks/redux';
import Table from '@components/molecules/Table/component/Table';
import { selectOsData, selectTableData } from '@redux/selectors';
import { fetchOsDetails, fetchSaveData } from '@redux/thunks';
import { OSCode } from '@components/molecules/OSCode';
import { OSDetails } from '@components/molecules/OSDetails';

const MainForm = () => {
  const tableData = useAppSelector(selectTableData);
  const osData = useAppSelector(selectOsData);
  const [shouldAddItem, setShouldAddItem] = useState(false);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchOsDetails(osData));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [osData.oscode, dispatch]);

  useEffect(() => {
    if (shouldAddItem === true) {
      const data = {
        serviceOrder: osData?.oscode.toString(),
        client: 'Client2',
        operator: 'Operator2',
        events: [
          {
            type: 'LW',
            timestamp: '54654',
            observation: 'Observation',
            location: {
              lat: 12.158242,
              long: -162.228897,
            },
          },
        ],
      };
      dispatch(fetchSaveData(data));
      setShouldAddItem(false);
    }
  }, [shouldAddItem, osData?.oscode, dispatch]);

  return (
    <>
      <div style={{fontSize: 'small'}}>
        <OSCode />
        <OSDetails setShouldAddItem={setShouldAddItem} />
      </div>
      <Table data={tableData} />
    </>
  );
};

export default MainForm;
