import React from 'react';
import {
  Image,
  TextInput,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

export default class LoginScreen extends React.Component {

  render() {
    return (
      <View>
        <Text>Login Screen yo!</Text>
        <TextInput style={styles.input} placeholderTextColor='rgb(64, 64, 64)' placeholder='email@test.com' />
        <TextInput style={styles.input} placeholderTextColor='rgb(64, 64, 64)' placeholder='password' />
        <TouchableOpacity style={styles.button}>
          <Text>Here's a button yo</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: 'rgb(200, 200, 200)',
    padding: 20,
    margin: 20
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgb(200, 200, 200)',
    padding: 20,
    flex: 1,
    margin: 20
  }
});
