import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { RotasPublicas } from './src/routes/RotasPublicas';

const App = () => {
  return (
    <NavigationContainer>
      <RotasPublicas />
    </NavigationContainer>
  );
};

export default App;