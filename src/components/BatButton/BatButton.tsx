import React, { useState } from 'react';
import { Button, Pressable, Text, View } from 'react-native';
import { BatTextInput } from '../BatTextInput/BatTextInput';
import generatePass from '../../services/passwordService';
import * as Clipboard from 'expo-clipboard';

import { styles } from './BatButtonStyles';

export function BatButton() {
  const [pass, setPass] = useState('');

  function handleGenerate() {
    let generateToken = generatePass();
    setPass(generateToken);
  }

  function handleCopy() {
    Clipboard.setStringAsync(pass);
  }

  return (
    <>
      <BatTextInput
        placeholder={'Cliquem em GENERATE para gerar a senha.'}
        pass={`Sua senha é: ${pass}`}
      />

      <Pressable
        style={styles.button}
        onPress={handleGenerate}
      >
        <Text
          style={styles.text}
        >
          GENERATE
        </Text>
      </Pressable>

      <Pressable
        style={styles.button}
        onPress={handleCopy}
      >
        <Text
          style={styles.text}
        >
          ☀️ COPY
        </Text>
      </Pressable>
    </>
  );
}