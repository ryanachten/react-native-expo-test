import React from 'react';
import { connect } from 'react-redux';
import { Button, Card, FormLabel, FormInput } from 'react-native-elements'
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
import { emailChanged, passwordChanged } from '../actions';

class LoginScreen extends React.Component {

  static navigationOptions = {
    title: 'Log In',
  };

  handleEmailChanged(text) {
    this.props.emailChanged(text);
  }

  handlePasswordChanged(text) {
    this.props.passwordChanged(text);
  }

  render() {
    const { email, password } = this.props;
    return (
      <Card>
        <FormLabel>Email</FormLabel>
        <FormInput
            placeholder='email@test.com'
            onChangeText={this.handleEmailChanged.bind(this)}
            value={email}
          />
        <FormLabel>Password</FormLabel>
        <FormInput
          placeholder='password'
          onChangeText={this.handlePasswordChanged.bind(this)}
          value={password}
        />
        <Button title='Submit' />
      </Card>
    );
  }
}

const mapStateToProps = (state) => {
  const { email, password } = state.auth;
  return ({
    email, password
  });
}

const mapDispatchToProps = {
  emailChanged,
  passwordChanged
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
