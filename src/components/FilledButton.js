import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Touchable  } from 'react-native';

export function FilledButton({title, style, onPress}) {
  return (
    <TouchableOpacity style={[styles.container, style]} onPress={onPress}>
    <Text style={styles.text}>{title.toUpperCase()}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container:{
      backgroundColor: 'purple',
      width: '80%',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 8,
      padding: 10
  },
  text: {
     color: 'white', 
     fontWeight: '500',
     fontSize: 15,
  },
});