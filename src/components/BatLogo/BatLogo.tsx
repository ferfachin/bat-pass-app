import React from 'react';
import { Image, Text, View } from 'react-native';

import { styles } from './BatLogoStyles';
import batlogo from '../../../assets/bat-logo.png';

export default function BatLogo() {
  return (
    <>
      <Text style={styles.title}>BAT PASSA GENERATOR</Text>
      <Image source={batlogo} 
        style={{ 
          resizeMode: 'contain',
          height: 180
         }}
      />
    </>
  );
}