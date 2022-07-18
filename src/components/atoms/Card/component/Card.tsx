import { CSSProperties, ReactNode } from 'react';
import styles from '../styles/Card.module.scss';

type CardPropsT = {
  className?: string;
  style?: CSSProperties;
  children: ReactNode;
};

const Card = ({ className = '', style, children }: CardPropsT) => {
  const classes = [styles.card, className].filter(Boolean).join(' ');
  return (
    <div className={classes} style={style}>
      {children}
    </div>
  );
};

export default Card;
