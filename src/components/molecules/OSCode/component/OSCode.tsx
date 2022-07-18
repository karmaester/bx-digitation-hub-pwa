import { useForm, SubmitHandler } from 'react-hook-form';
import { useState } from 'react';
import styles from '../styles/OSCode.module.scss';
import TextInput from '@components/atoms/TextInput';
import Error from '@components/atoms/FieldError';
import RadioButton from '@components/atoms/RadioButton';
import { useAppDispatch, useAppSelector } from 'redux/hooks';
import {
  selectOsDetailsStatus,
  selectOsDataCheckpoints,
  selectOsData,
} from '@redux/selectors';
import { setOsData } from '@redux/slice';
import Select from '@components/atoms/Select';
import FormSelect from '@components/molecules/FormSelect';
import FormInput from '@components/molecules/FormInput';
import Button from '@components/atoms/Button/Button';

type Inputs = {
  checkpointType: 'ev' | 'ex';
  checkpoint: string;
  observation: string;
  oscode: string;
};

export const OSCode = (): JSX.Element => {
  const checkpoints = useAppSelector(selectOsDataCheckpoints);
  const osDetailsStatus = useAppSelector(selectOsDetailsStatus);
  const osData = useAppSelector(selectOsData);
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    getValues,
    reset
  } = useForm<Inputs>();

  const [selectedCheckpointType, setSelectedCheckpointType] = useState('ev');

  const onOSSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
    dispatch(
      setOsData({
        oscode: data.oscode,
        'ev-ex': data.checkpoint,
      })
    );
    // reset();
  };

  const submitText = `${
    osDetailsStatus === 'loading' ? '...' : 'Get OS details'
  }`;

  const registerRadio = () =>
    register('checkpointType', {
      value: 'ev',
      onChange: ({ target: {value}}: {target:{value: string}}) => {
        setSelectedCheckpointType(value);
      },
    });

  const checkpointType = selectedCheckpointType === 'ev' ? 'Evento' : 'Excepcion';

  return (
    <form className={styles.form} onSubmit={handleSubmit(onOSSubmit)}>
      <div>
        <RadioButton value="ev" {...registerRadio()}>Evento</RadioButton>
        <RadioButton value="ex" {...registerRadio()}>Excepcion</RadioButton>
      </div>
      <div>
        <FormSelect
          options={[{value: '', name: `Seleccione ${checkpointType} (pinchazo)`}, ...checkpoints]}
          register={() => register('checkpoint', {required: 'Seleccione pinchazo'})}
          error={errors.checkpoint?.message}
        />
      </div>
      <div className={styles.inlineForm}>
          <textarea placeholder='Observaciones' {...register('observation')}></textarea>
      </div>
     <div className={styles.osForm}>
        <label>
          <div>Orden de Servicio*</div>
          <FormInput
            register={() => register('oscode', {
              required: 'Ingrese orden de servicio',
              pattern: { value: /[0-9]{5}/, message: 'La orden de servicio debe tener 5 dígitos.'}
            })}
            error={errors.oscode?.message}
          />
        </label>
      </div>
      {/* <input type='submit' value={submitText} /> */}
      <div style={{display: 'flex', gap: '1em'}}>
      <Button type="reset" variant='secondary'>Limpiar</Button>
      <Button type="submit" variant='primary'>{submitText}</Button>
      </div>
    </form>
  );
};
