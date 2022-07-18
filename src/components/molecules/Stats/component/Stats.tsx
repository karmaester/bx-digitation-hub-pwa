import { ReactNode } from 'react';
import styles from '../styles/Stats.module.scss';

export type StatsPropsT = {
  icon: ReactNode;
  quantity: ReactNode;
  label: ReactNode;
};

export const Stats = ({ icon, quantity, label }: StatsPropsT) => {
  return (
    <div className={styles.stats}>
      <div className={styles.statsIcon}>{icon}</div>
      <div className={styles.statsData}>
        <p>{quantity}</p>
        <p>{label}</p>
      </div>
    </div>
  );
};

export default Stats;
