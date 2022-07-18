import Stats from './Stats';
import PalleteIcon from '@components/atoms/icons/PalleteIcon';

type DigitizedPiecesStatsPropsT = {
  quantity: number;
};

export const SessionPiecesStats = ({quantity}: DigitizedPiecesStatsPropsT) => {
  return (
    <Stats icon={<PalleteIcon/>} quantity={`${quantity} Piezas`} label="Digitadas"/>
  );
};
