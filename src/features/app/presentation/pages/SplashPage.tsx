import React from 'react';
import { motion } from 'framer-motion';

const SplashPage = () => {
  return (
    <motion.div
      className="flex h-screen items-center justify-center bg-black"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <h1 className="text-4xl font-bold text-white">Bienvenido a Mi Página</h1>
    </motion.div>
  );
};

export default SplashPage;
