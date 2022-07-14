import { ReactNode } from 'react';
import styles from '../styles/FieldError.module.scss'

type FieldErrorPropsT = {
  children: ReactNode;
};

const FieldError = ({children}: FieldErrorPropsT) => {
  if (!children) return null;
  return (
    <p className={styles.fieldError} data-testid="field-error">{children}</p>
  );
};

export default FieldError;
