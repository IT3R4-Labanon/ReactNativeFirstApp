import React from 'react';
import { StyleSheet, Text, View, Image, TextInput  } from 'react-native';

export function Heading({children, style, ...props}) {
  return (
    <Text {...props} style={[styles.text, style]}>
        {children}
    </Text>
  );
}

const styles = StyleSheet.create({
  text:{
      color: 'purple',
      fontSize: 30,
  },
});