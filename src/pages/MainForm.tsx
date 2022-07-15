import { CSSProperties, useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from 'redux/hooks';
import Table from '@components/molecules/Table/component/Table';
import { selectOsData, selectTableData } from '@redux/selectors';
import { fetchOsDetails, fetchSaveData } from '@redux/thunks';
import { OSCode } from '@components/molecules/OSCode';
import { OSDetails } from '@components/molecules/OSDetails';
import Card from '@components/atoms/Card';
import { Breadcrumb } from '@components/molecules/Breadcrumb';
import LoadTimeCounter from '@components/atoms/LoadTimeCounter';

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

  const containerFlex: CSSProperties = {
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  };
  return (
    <div style={{ padding: '20px' }}>
      <div style={containerFlex}>
        <Breadcrumb />
        <LoadTimeCounter time='00:00:00.000000' />
      </div>
      <Card>
        <OSCode />
        <OSDetails setShouldAddItem={setShouldAddItem} />
      </Card>
      <div style={{ height: '2rem' }}></div>
      <Card>
        <Table data={tableData} />
      </Card>
    </div>
  );
};

export default MainForm;
