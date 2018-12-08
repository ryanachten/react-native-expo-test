import * as React from 'react';
import { Button, Card, FormInput, FormLabel } from 'react-native-elements';
import { connect } from 'react-redux';
import { emailChanged, loginUser, passwordChanged } from '../actions';

class EmployeeCreateScreen extends React.Component {

  public static navigationOptions = {
    title: 'Create Employee',
  };

  private render() {
    const { email, password } = this.props;
    return (
      <Card>
        <FormLabel>Create screen yo!</FormLabel>
        <FormInput
            autoCapitalize="none"
            placeholder="email@test.com"
          />
        <Button title="Submit" />
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
};

export default connect(mapStateToProps, mapDispatchToProps)(EmployeeCreateScreen);
