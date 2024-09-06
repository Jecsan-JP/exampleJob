import SplashPage from '@/features/app/presentation/pages/SplashPage';
import React, { useEffect, useState } from 'react';

const DashboardPage = () => {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 3000); // Splash de 3 segundos
    return () => clearTimeout(timer);
  }, []);

  return showSplash ? (
    <SplashPage />
  ) : (
    <div>
      <h1>Bienvenido a mi Proyecto</h1>
      <p>
        Aqui les mostrare mi manera de trabajar con Next Js y la experiencia que tengo trabajando
        con REACJ JS
      </p>
    </div>
  );
};

export default DashboardPage;
