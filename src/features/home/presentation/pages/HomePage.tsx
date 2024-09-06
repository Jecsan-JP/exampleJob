import React, { ReactNode } from 'react';
import HomeNavBar from '../components/HomeNavBar';

export interface HomePageProps {
  children: ReactNode;
}

export default function HomePage(props: HomePageProps) {
  return (
    <>
      <HomeNavBar />
      {props.children}
    </>
  );
}
