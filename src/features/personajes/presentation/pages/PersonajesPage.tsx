import React from 'react';
import { BlocBuilder } from '@/common/bloc/BlocBuilder';
import { PersonajesProvider } from '../bloc/PersonajesProvider';
import PersonajesBloc from '../bloc/PersonajesBloc';
import PersonajesState from '../bloc/PersonajesState';

export const PersonajesPage = () => {
  return (
    <PersonajesProvider>
      <PersonajesContent />
    </PersonajesProvider>
  );
}

const PersonajesContent = () => {
  return (
    <BlocBuilder<PersonajesBloc, PersonajesState>
      builder={(state: PersonajesState) => {
       return (<>Personajes </>);
      }
      }
    />
  );
}
