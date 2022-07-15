import { ReactNode } from 'react';
import styles from '../styles/Card.module.scss';

type CardPropsT = {
  children: ReactNode;
};

const Card = ({children}: CardPropsT) => {
  return (
    <div className={styles.card}>
      {children}
    </div>
  );
};

export default Card;
