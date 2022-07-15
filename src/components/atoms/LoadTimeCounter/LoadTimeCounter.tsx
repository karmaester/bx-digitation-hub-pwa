import styles from './LoadTimeCounter.module.scss';

type LoadTimeCounterPropsT = {
  time: string;
};

const LoadTimeCounter = ({time}: LoadTimeCounterPropsT) => {
  return (
    <div className={styles.loadCounter}>
      <span className={styles.loadCounterLabel}>T&nbsp;Carga:</span>
      <span className={styles.loadCounterValue}>{time}</span>
    </div>
  );
};

export default LoadTimeCounter;
