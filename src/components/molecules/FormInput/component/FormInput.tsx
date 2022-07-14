import { UseFormRegisterReturn } from 'react-hook-form';
import TextInput, { TextInputPropsT } from '@components/atoms/TextInput';
import Error from '@components/atoms/FieldError';

type FormInputPropsT<T> = {
  register: () => UseFormRegisterReturn;
  error?: string;
} & TextInputPropsT;

const FormInput = <T extends Record<string, unknown>>(
  { register, error, ...rest}: FormInputPropsT<T>
) => {
  return (
    <div>
      <TextInput {...register()} {...rest}/>
      <Error>{error}</Error>
    </div>
  );
};

export default FormInput;
