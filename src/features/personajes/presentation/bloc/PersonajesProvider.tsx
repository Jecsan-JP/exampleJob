import React, { ReactNode } from 'react';
import { BlocProvider } from '@/common/bloc/BlocProvider';
import PersonajesBloc from './PersonajesBloc';

interface PersonajesProviderProps {
  children: ReactNode;
}

export const PersonajesProvider = (props: PersonajesProviderProps) => {
    const bloc = new PersonajesBloc();
    return <BlocProvider bloc={bloc}> {props.children} </BlocProvider>;
}
