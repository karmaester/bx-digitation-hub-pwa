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
import {
  Accordion,
  AccordionBody,
  AccordionButton,
  AccordionHeader,
  AccordionItem,
} from '@components/atoms/Accordion';
import { ChevronIcon } from '@components/atoms/icons';

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
    flexDirection: 'column',
    gap: '1rem',
    padding: '1rem'
  };

  const items = [
    { title: 'hola 1', body: 'mundo 1' },
    { title: 'hola 2', body: 'mundo 2' },
    { title: 'hola 3', body: 'mundo 3' },
    { title: 'hola 4', body: 'mundo 4' },
    { title: 'hola 5', body: 'mundo 5' },
  ];
  return (
    <div style={containerFlex}>
      <div style={{display: 'flex', justifyContent: 'space-between'}}>
        <Breadcrumb />
        <LoadTimeCounter time='00:00:00.000000' />
      </div>

        <Accordion>
          {items.map((item: any, i: number) => (
            <AccordionItem key={i} itemId={i}>
              <AccordionHeader>
                <span>{item.title}</span>
                <AccordionButton>
                  <ChevronIcon angle={180} />
                </AccordionButton>
              </AccordionHeader>
              <AccordionBody>
                <span>{item.body}</span>
              </AccordionBody>
            </AccordionItem>
          ))}
        </Accordion>

      <Card>
        <AccordionItem>
          <AccordionHeader>
            <span>Test Item Only</span>
            <AccordionButton>
              <ChevronIcon angle={180} />
            </AccordionButton>
          </AccordionHeader>
          <AccordionBody>
            <span>It is working</span>
          </AccordionBody>
        </AccordionItem>
      </Card>

      <Card>
        <OSCode />
        <OSDetails setShouldAddItem={setShouldAddItem} />
      </Card>
      <Card>
        <Table data={tableData} />
      </Card>
    </div>
  );
};

export default MainForm;
