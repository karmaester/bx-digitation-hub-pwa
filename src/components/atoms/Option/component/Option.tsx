import { FC, HTMLProps, ReactNode } from 'react';

export interface OptionPropsT extends HTMLProps<HTMLOptionElement> {
  value: string;
  name: string;
};

export const Option: FC<OptionPropsT> = ({ value, name, ...rest }) => {
  return <option value={value} {...rest}>{name}</option>;
};
