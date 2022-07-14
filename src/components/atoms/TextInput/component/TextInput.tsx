import { forwardRef, InputHTMLAttributes, Ref } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';
import styles from '../styles/TextInput.module.scss';

export type TextInputPropsT = {
  placeHolder?: string;
} & Omit<Partial<UseFormRegisterReturn>, 'ref'>;;

const TextInput = (props: TextInputPropsT, ref: Ref<HTMLInputElement>) => {
  return (
    <input className={styles.textInput} type="text" ref={ref} {...props}/>
  );
};

export default forwardRef(TextInput);
