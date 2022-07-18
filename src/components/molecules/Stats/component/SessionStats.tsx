import Stats from './Stats';
import OSIcon from '@components/atoms/icons/OSIcon';
import {PalleteIcon} from '@components/atoms/icons';

type SessionStatsPropsT = {
  osCount: number;
  pieceCount: number
};

export const SessionStats = ({osCount, pieceCount}: SessionStatsPropsT) => {
  const style = {
    display: 'flex',
    gap: '1em'
  };
  return (
    <div style={style}>
      <Stats icon={<OSIcon/>} quantity={`${osCount} OS`} label="Digitadas"/>
      <Stats icon={<PalleteIcon/>} quantity={`${pieceCount} Piezas`} label="Digitadas"/>
    </div>
  );
};
