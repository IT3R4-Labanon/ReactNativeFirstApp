import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, } from 'react-native';

import { FilledButton } from '../components/FilledButton';
import { Heading } from '../components/Heading';
import { Input } from '../components/Input';
import { TextButton } from '../components/TextButton';
import { Error } from '../components/Error';
import { AuthContext } from '../contexts/AuthContext';

export function LoginScreen({navigation}) {

  const {login} = React.useContext(AuthContext);

  const [email, setEmail] =React.useState('');

  const [password, setPassword] =React.useState('');

  return (
    <View style={styles.container}>
      
      <Heading style={styles.title} >LOGIN</Heading>

      <Error error={''} />

      <Input style={styles.input} 
      placeholder={'Username'} 
      onChangeText={setEmail}
      value={email} />

      <Input style={styles.input} 
      placeholder={'Password'} 
      secureTextEntry 
      value={password}
      onChangeText={setPassword} />

      <FilledButton 
        title={'Login'} 
        style={styles.LoginButton} 
            onPress={() => {
            login(email, password);
        }}
      />
    
      <TextButton
      title={'Sign UP!'} 
      onPress={() => {
        navigation.navigate('Registration');
      }} />
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