import { forwardRef, Ref } from 'react';
import { HTMLProps } from 'react';
import { Option, OptionPropsT } from '@components/atoms/Option';

interface SelectPropsI extends HTMLProps<HTMLSelectElement> {
  options: OptionPropsT[];
};

const Select = ({options, ...rest}: SelectPropsI, ref: Ref<HTMLSelectElement>) => {
  return <select ref={ref} {...rest}>{options.map(Option)}</select>;
};

export default forwardRef(Select);
