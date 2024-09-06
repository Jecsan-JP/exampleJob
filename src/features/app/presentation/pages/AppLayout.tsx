import React, { ReactNode } from 'react';
import { AppProvider } from '../bloc/AppProvider';
import HomePage from '@/features/home/presentation/pages/HomePage';

export interface AppLayoutProps {
  children: ReactNode;
}

export const App = (props: AppLayoutProps) => {
  return <AppProvider>{props.children}</AppProvider>;
};

export const AppLayout = (props: AppLayoutProps) => {
  return <HomePage>{props.children}</HomePage>;
};

export default App;
