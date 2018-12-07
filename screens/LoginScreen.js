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
import { emailChanged } from '../actions';

class LoginScreen extends React.Component {

  handleEmailChanged(text) {
    this.props.emailChanged(text);
  }

  render() {
    const { email } = this.props;
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
        />
        <Button title='Submit' />
      </Card>
    );
  }
}

const mapStateToProps = (state) => {
  const { email } = state.auth;
  return (
    {
      email
    }
  );
}

export default connect(mapStateToProps, { emailChanged })(LoginScreen);
