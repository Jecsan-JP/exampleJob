import React, { ReactNode } from 'react';
import { BlocProvider } from '@/common/bloc/BlocProvider';
import AppBloc from './AppBloc';

interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider = (props: AppProviderProps) => {
    const bloc = new AppBloc();
    return <BlocProvider bloc={bloc}> {props.children} </BlocProvider>;
}
