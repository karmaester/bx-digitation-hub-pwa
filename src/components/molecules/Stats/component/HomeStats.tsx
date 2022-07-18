import Stats from './Stats';
import {RouteIcon, PalleteIcon} from '@components/atoms/icons';

type HomeStatsPropsT = {
  osTotal: number;
  offRouteOsTotal: number
};

const formatNumber = (number: number): string => number.toLocaleString();

export const HomeStats = ({osTotal, offRouteOsTotal}: HomeStatsPropsT) => {
  const style = {
    display: 'flex',
    gap: '1em',
    flexFlow: 'row wrap',
    justifyContent: 'center'
  };
  return (
    
    <div style={style}>
      <Stats icon={<PalleteIcon/>} quantity={formatNumber(osTotal)} label="OS total en el día"/>
      <Stats icon={<RouteIcon/>} quantity={formatNumber(offRouteOsTotal)} label="OS total que se salió de la ruta"/>
    </div>
  );
};
