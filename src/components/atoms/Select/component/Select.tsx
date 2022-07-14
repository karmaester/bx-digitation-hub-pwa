import { forwardRef, Ref, SelectHTMLAttributes } from 'react';
import { ChangeHandler, UseFormRegisterReturn } from 'react-hook-form';
import styles from '../styles/Select.module.scss';

type OptionT = {
  value: string;
  name: string;
};

export type SelectPropsT = {
  options: OptionT[];
} & Omit<Partial<UseFormRegisterReturn>, 'ref'>;

const Select = ({options, ...rest}: SelectPropsT, ref: Ref<HTMLSelectElement>) => {
  return (
    <select className={styles.select} ref={ref} {...rest}>
      { options.map(({name, value}) => (
          <option key={value} value={value}>{name}</option>
        )) }
    </select>
  );
};

export default forwardRef(Select);
