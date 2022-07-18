import { UseFormRegister, Path, RegisterOptions, FieldError, DeepMap, UseFormRegisterReturn } from 'react-hook-form';
import Select, { SelectPropsT } from '@components/atoms/Select';
import Error from '@components/atoms/FieldError';

type FormSelectPropsT  = {
  register: () => UseFormRegisterReturn;
  error?: string;
} & SelectPropsT;

const FormSelect = (
  {options, register, error, ...rest}: FormSelectPropsT
) => {
  return (
    <div>
      <Select options={options} {...register()} {...rest}/>
      <Error>{error}</Error>
    </div>
  );
};

export default FormSelect;
