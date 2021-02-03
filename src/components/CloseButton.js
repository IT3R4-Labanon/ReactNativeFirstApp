import React from 'react';
import { StyleSheet, Text, TouchableOpacity  } from 'react-native';
import Icon from 'react-native-ionicons';

export function CloseButton({title, style, onPress}) {
  return (
    <TouchableOpacity style={[styles.container, style]} onPress={onPress}>
    <Icon name={'close-button'} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container:{
  },
});