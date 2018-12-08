import React from 'react';
import { connect } from 'react-redux';
import { Button, Card, FormLabel, FormInput } from 'react-native-elements'
import { emailChanged, passwordChanged, loginUser } from '../actions';

class EmployeeCreateScreen extends React.Component {

  static navigationOptions = {
    title: 'Create Employee',
  };

  handleEmailChanged(text) {
    this.props.emailChanged(text);
  }

  handlePasswordChanged(text) {
    this.props.passwordChanged(text);
  }

  handleSubmit() {
    const { email, password } = this.props;
    this.props.loginUser({ email, password });
  }

  render() {
    const { email, password } = this.props;
    return (
      <Card>
        <FormLabel>Create screen yo!</FormLabel>
        <FormInput
            autoCapitalize='none'
            placeholder='email@test.com'
            onChangeText={this.handleEmailChanged.bind(this)}
            value={email}
          />
        <Button title='Submit'
          onPress={this.handleSubmit.bind(this)}
        />
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
  passwordChanged,
  loginUser
};

export default connect(mapStateToProps, mapDispatchToProps)(EmployeeCreateScreen);
