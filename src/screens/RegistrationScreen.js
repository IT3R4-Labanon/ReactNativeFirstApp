import React from 'react';
import { StyleSheet, View, } from 'react-native';

import { FilledButton } from '../components/FilledButton';
import { Heading }      from '../components/Heading';
import { Input }        from '../components/Input';
import { Error }        from '../components/Error';
import { CloseButton }   from '../components/CloseButton';
import { AuthContext } from '../contexts/AuthContext';

export function RegistrationScreen({navigation}) {

  const {register} = React.useContext(AuthContext);

  const [email, setEmail] =React.useState('chrisjohnlabanon@email.cmo');

  const [password, setPassword] =React.useState('gwapo');

  return (
    <View style={styles.container}>
      
      <Heading style={styles.title} >Register</Heading>

      <CloseButton 
      title={'X  Sign In! nalang  X'} 
      style={styles.CloseButton} 
      onPress={() => {
      navigation.pop();

      // <FilledButton 
      // title={'Register'} 
      // style={styles.LoginButton} 
      // onPress={() => {
      //   register(email, password);
        
      }} />
    

      <Error error={''} />

      <Input style={styles.input} 
      placeholder={'Username'} 
      onChangeText={setEmail}
      value={email}
      />

      <Input style={styles.input} 
      placeholder={'Password'} 
      secureTextEntry
      value={password}
      onChangeText={setPassword} />

      <FilledButton 
      title={'Register'} 
      style={styles.LoginButton} 
      onPress={() => {
        register(email, password);
      }} />
    
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 120,
    alignItems: 'center',asdas
   
  }, 
  
  title:{
    marginBottom: 48,
  },
  input:{
    marginVertical: 8,
  },
  LoginButton:{
    marginVertical: 30 ,
  },
  CloseButton:{
    marginVertical: 30 ,
  }

});