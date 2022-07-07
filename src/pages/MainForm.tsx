import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setTableData, setOsDetails } from 'redux/slice';
import OSIntput from '@components/OSInput/component/OSIntput';
import Table from '@components/Table/component/Table';
const rows = [
  {
    os: '13412341',
    'ev-ex': 'IC',
  },
  {
    os: '13412341',
    'ev-ex': 'IC',
  },
  {
    os: '13412341',
    'ev-ex': 'IC',
  },
];

const MainForm = () => {
  const dispatch = useDispatch();
  const tableData = useSelector((state: any) => state.app.tableData);
  const osData = useSelector((state: any) => state.app.osData);
  const osDetails = useSelector((state: any) => state.app.osDetails);
  const [shouldAddItem, setShouldAddItem] = useState(false);
  const temp = 0;

  useEffect(() => {
    console.log({ osData });
    if (osData?.oscode) {
      fetch(`http://localhost:3000/api/service-orders/${osData.oscode}`)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          dispatch(setOsDetails(data));
        });
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [osData]);

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
      fetch('http://localhost:3000/api/service-orders', {
        method: 'POST', // or 'PUT'
        body: JSON.stringify(data), // data can be `string` or {object}!
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((res) => res.json())
        .catch((error) => console.error('Error:', error))
        .then((response) => console.log('Success:', response));
      dispatch(setTableData({ os: osData.oscode, 'ev-ex': osData.evex }));
      setShouldAddItem(false);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [shouldAddItem, osData?.oscode,]);

  return (
    <>
      <OSIntput
        setOsData={() => null}
        osDetails={osDetails}
        setShouldAddItem={setShouldAddItem}
      />
      <Table data={tableData} />
    </>
  );
};

export default MainForm;
