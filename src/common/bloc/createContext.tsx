import React from 'react';

export function createContext<T>() {
  const context = React.createContext<T | undefined>(undefined);

  const useContext = () => {
    const ctx = React.useContext(context);
    if (!ctx)
      throw new Error(
        'El contexto debe estar dentro de un proveedor con un valor'
      );

    return ctx;
  };

  return [context, useContext] as const;
}
