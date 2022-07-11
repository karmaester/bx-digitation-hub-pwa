import { FC, HTMLProps, ReactNode } from 'react';

export interface OptionPropsT extends HTMLProps<HTMLOptionElement> {
  children: ReactNode;
};

export const Option: FC<OptionPropsT> = ({ children, ...rest }) => {
  return <option {...rest}>{children}</option>;
};
