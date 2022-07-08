import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from 'hooks/redux';
import OSIntput from '@components/OSInput/component/OSIntput';
import Table from '@components/Table/component/Table';
import { selectOsData, selectOsDetails, selectTableData } from '@redux/selectors';
import { setOsDetails, setTableData } from '@redux/slice';
import { fetchOsDetails, fetchSaveData } from '@redux/thunks';

const MainForm = () => {
  const dispatch = useAppDispatch();
  const tableData = useAppSelector(selectTableData);
  const osData = useAppSelector(selectOsData);
  const osDetails = useAppSelector(selectOsDetails);
  const [shouldAddItem, setShouldAddItem] = useState(false);
  const temp = 0;

  useEffect(() => {
    console.log({ osData });
    dispatch(fetchOsDetails(osData));
  }, [osData, dispatch]);

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
            }
          },
        ]
      };
      dispatch(fetchSaveData(data));
      setShouldAddItem(false);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [shouldAddItem, osData?.oscode,]);

  return (
    <>
      <OSIntput
        osDetails={osDetails}
        setShouldAddItem={setShouldAddItem}
      />
      <Table data={tableData} />
    </>
  );
};

export default MainForm;
