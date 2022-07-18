import Stats from './Stats';

import OSIcon from '@components/atoms/icons/OSIcon';

type DigitizedOSStatsPropsT = {
  quantity: number;
};

export const SessionOSStats = ({quantity}: DigitizedOSStatsPropsT) => {
  return (
    <Stats icon={<OSIcon/>} quantity={`${quantity} OS`} label="Digitadas"/>
  );
};
