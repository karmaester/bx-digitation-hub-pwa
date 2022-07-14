import { forwardRef, ReactNode, Ref } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';
import styles from '../styles/RadioButton.module.scss';

type RadioButtonT = {
  value: string;
  children: ReactNode;
} & Omit<UseFormRegisterReturn, 'ref'>;;

const RadioButton = ({children, ...rest}: RadioButtonT, ref: Ref<HTMLInputElement>) => {
  return (
    <label className={styles.radioButton}>
      <input type="radio" ref={ref} {...rest}/>
      <span>{children}</span>
    </label>
  );
};

export default forwardRef(RadioButton);
