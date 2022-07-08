import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { RootStateT, AppDispatchT } from 'redux/types';

export const useAppDispatch: () => AppDispatchT = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootStateT> = useSelector;
