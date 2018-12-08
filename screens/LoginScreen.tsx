import * as React from 'react';
import { Button, Card, FormInput, FormLabel } from 'react-native-elements';
import { connect } from 'react-redux';
import { emailChanged, loginUser, passwordChanged } from '../actions';

class LoginScreen extends React.Component {

  public static navigationOptions = {
    title: 'Log In',
  };

  private handleEmailChanged(text) {
    this.props.emailChanged(text);
  }

  private handlePasswordChanged(text) {
    this.props.passwordChanged(text);
  }

  private handleSubmit() {
    const { email, password } = this.props;
    this.props.loginUser({ email, password });
  }

  private render() {
    const { email, password } = this.props;
    return (
      <Card>
        <FormLabel>Email</FormLabel>
        <FormInput
            autoCapitalize="none"
            placeholder="email@test.com"
            onChangeText={this.handleEmailChanged.bind(this)}
            value={email}
          />
        <FormLabel>Password</FormLabel>
        <FormInput
          autoCapitalize="none"
          onChangeText={this.handlePasswordChanged.bind(this)}
          placeholder="password"
          secureTextEntry
          value={password}
        />
        <Button title="Submit"
          onPress={this.handleSubmit.bind(this)}
        />
      </Card>
    );
  }
}

const mapStateToProps = (state) => {
  const { email, password } = state.auth;
  return ({
    email, password,
  });
};

const mapDispatchToProps = {
  emailChanged,
  loginUser,
  passwordChanged,
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
