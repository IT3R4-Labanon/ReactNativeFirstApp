import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, } from 'react-native';
import { FilledButton } from '../components/FilledButton';
import { Heading } from '../components/Heading';
import { Input } from '../components/Input';
import { TextButton } from '../components/TextButton';
import { Error } from '../components/Error';

export function LoginScreen() {
  return (
    <View style={styles.container}>
      
      <Heading style={styles.title} >LOGIN</Heading>

      <Error error={''} />

      <Input style={styles.input} placeholder={'Username'} />

      <Input style={styles.input} placeholder={'Password'} secureTextEntry />

      <FilledButton 
      title={'Login'} 
      style={styles.LoginButton} 
      onPress={() => {}} />
    
      <TextButton
      title={'Sign UP!'} 
      onPress={() => {}} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 120,
    alignItems: 'center',
   
  }, 
  
  title:{
    marginBottom: 48,
  },
  input:{
    marginVertical: 8,
  },
  LoginButton:{
    marginVertical: 30 ,
  }
});