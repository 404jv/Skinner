import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';

import { Button, Label } from './styles'

export default function HomeButton() {
  return (
    <Button
      colors={['#FADA00', '#FAC900']}
      start={[1, 0.2]}
    >
      <MaterialIcons name="home" size={30} color="#FFF"/>
      <Label>Home</Label>
    </Button>
  );
}