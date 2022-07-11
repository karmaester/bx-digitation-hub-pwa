import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import OSCodeComponent from '../component/OSCode';
import { useAppDispatch, useAppSelector } from 'hooks/redux';
import { selectOsDetailsStatus, selectOsDataCheckpoints, selectOsData } from '@redux/selectors';
import { setOsData } from '@redux/slice';

type Inputs = {
  event: string;
  observation: string;
  oscode: string;
};

export const OSCode = () => {
  const checkpoints = useAppSelector(selectOsDataCheckpoints);
  const osDetailsStatus = useAppSelector(selectOsDetailsStatus);
  const osData = useAppSelector(selectOsData);
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    getValues
  } = useForm<Inputs>();

  const onOSSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
    dispatch(
      setOsData({
        oscode: data.oscode,
        'ev-ex': data.event,
      })
    );
  };

  const OSCodeProps = {
    onSubmit: handleSubmit(onOSSubmit),
    registerInput: {
      event: () => register('event', {onChange: ({target: {value}}) => dispatch(setOsData({"ev-ex": value, oscode: osData.oscode}))}),
      observation: () => register('observation'),
      oscode: () => register('oscode'),
    },
    options: checkpoints,
    submitText: `${osDetailsStatus === 'loading' ? '...' : 'Get OS details'}`
  };

  return <OSCodeComponent {...OSCodeProps} />;

};
