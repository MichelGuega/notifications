import React from 'react';
import AppProvider from '@hooks/index';
import Home from '@screens/Home';

export default function App() {
  return (
    <AppProvider>
      <Home />
    </AppProvider>
  );
}
