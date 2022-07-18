import { ReactNode } from 'react';
import styles from '../styles/Stats.module.scss';

type DigitizedStatsPropsT = {
  icon: ReactNode;
  quantity: ReactNode;
  label: ReactNode;
};

export const Stats = ({
  icon,
  quantity,
  label,
}: DigitizedStatsPropsT) => {
  return (
    <div className={styles.stats}>
      <div className={styles.statsIcon}>
        {icon}
      </div>
      <div className={styles.statsData}>
        <p>{quantity}</p>
        <p>{label}</p>
      </div>
    </div>
  );
};

export default Stats;
