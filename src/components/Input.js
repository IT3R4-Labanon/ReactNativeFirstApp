import React from 'react';
import { StyleSheet, TextInput, Text  } from 'react-native';

export function Input({style, ...props}) {
  return <TextInput {...props} style={[styles.input, style]} />; 
  
}

const styles = StyleSheet.create({
  input:{
      backgroundColor: '#ccc',
      width: '80%',
      padding: 5,
      borderRadius: 8,

  },
});