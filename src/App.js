/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import './App.scss';
import { motion } from 'framer-motion';

function App() {
  return (
    <div className="App">
      <motion.div animate={{ rotate: 360 }}
    transition={{ duration: 2 }}>
        <h1>Hello</h1>
      </motion.div>
    </div>
  );
}

export default App;
