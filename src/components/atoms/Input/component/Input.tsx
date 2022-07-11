import { forwardRef, HTMLProps, Ref } from 'react';

interface InputPropsI extends HTMLProps<HTMLInputElement> {};

const Input = ({...rest}: InputPropsI, ref: Ref<HTMLInputElement>) => {
  return (
    <input ref={ref} {...rest}/>
  );
};

export default forwardRef(Input);
