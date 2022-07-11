import { useForm, SubmitHandler } from "react-hook-form";
import OSDetailsComponent from '../component/OSDetails';
import { useAppSelector } from 'hooks/redux';
import { selectTableStatus, selectOsDetailsData} from '@redux/selectors';

type Inputs = {
  ospieces: string;
  osclient: string;
};

export const OSDetails = ({setShouldAddItem}: any) => {
  const osDetails = useAppSelector(selectOsDetailsData);
  const tableStatus = useAppSelector(selectTableStatus);
  const { register, handleSubmit, watch, formState: { errors }, setValue } = useForm<Inputs>();
  setValue('ospieces', osDetails.osPieces);
  setValue('osclient', osDetails.osClient);
  const onEventSubmit: SubmitHandler<Inputs> = () => setShouldAddItem(true);
  const OSDetailsProps = {
    onSubmit: handleSubmit(onEventSubmit),
    registers: {
      pieces: () => register('ospieces', {disabled: true}),
      client: () => register('osclient', {disabled: true})
    },
    submitText: `${tableStatus === 'loading' ? '...' : 'Save event'}`
  };
  return <OSDetailsComponent {...OSDetailsProps}/>
};
