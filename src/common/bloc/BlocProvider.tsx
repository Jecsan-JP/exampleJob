import React, { ReactNode, useEffect } from 'react';

import { Bloc } from './Bloc';
import { createContext } from './createContext';

interface BlocProviderProps<B extends Bloc<any>> {
  bloc: B;
  children: ReactNode;
}

const [BlocContext, useBloc] = createContext<Bloc<any>>();

const BlocProvider = <B extends Bloc<any>>({ bloc, children }: BlocProviderProps<B>) => {
  useEffect(() => {
    bloc.didMount();

    return () => {
      bloc.didClose();
      bloc.checkProviderIfBlocIsClosed();
    };
  }, [bloc]);

  return <BlocContext.Provider value={bloc}>{children}</BlocContext.Provider>;
};

export { BlocProvider, useBloc };
