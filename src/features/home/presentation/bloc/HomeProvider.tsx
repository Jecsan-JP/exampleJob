import React, { ReactNode } from 'react';
import { BlocProvider } from '@/common/bloc/BlocProvider';
import HomeBloc from './HomeBloc';

interface HomeProviderProps {
  children: ReactNode;
}

export const HomeProvider = (props: HomeProviderProps) => {
    const bloc = new HomeBloc();
    return <BlocProvider bloc={bloc}> {props.children} </BlocProvider>;
}
