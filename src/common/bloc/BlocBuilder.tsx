'use client';
import { useState, useEffect, ReactNode } from 'react';

import { Bloc } from './Bloc';
import { useBloc } from './BlocProvider';

interface BlocBuilderProps<T> {
  builder: (state: T) => ReactNode;
  buildWhen?: (oldState: T, newState: T) => boolean;
}

export const BlocBuilder = <B extends Bloc<T>, T>({
  builder,
  buildWhen = (_: T, __: T) => true,
}: BlocBuilderProps<T>) => {
  const bloc = useBloc() as B;
  const [state, setState] = useState(bloc.state);

  useEffect(() => {
    const stateSubscription = (oldState: T, state: T) => {
      if (buildWhen(oldState, state)) {
        setState(state);
      }
    };

    bloc.subscribe(stateSubscription);
    return function () {
      return bloc.unsubcribe(stateSubscription);
    };
  }, [bloc, buildWhen]);

  return builder(state);
};
