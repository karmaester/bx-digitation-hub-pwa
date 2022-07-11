import { HTMLProps, ReactNode } from 'react';

export interface LabelPropsT extends HTMLProps<HTMLLabelElement> {
  children?: ReactNode;
}

export const Label = ({ children, ...rest }: LabelPropsT) => {
  return (
    <label {...rest}>
      {children}
    </label>
  );
};
