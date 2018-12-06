import React from 'react';
import { connect } from 'react-redux';
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
      <View>
        <Text>Login Screen yo!</Text>
        <TextInput
            style={styles.input}
            placeholderTextColor='rgb(64, 64, 64)'
            placeholder='email@test.com'
            onChangeText={this.handleEmailChanged.bind(this)}
            // value={email}
          />
        <TextInput
          style={styles.input}
          placeholderTextColor='rgb(64, 64, 64)'
          placeholder='password'
        />
        <TouchableOpacity style={styles.button}>
          <Text>Here's a button yo</Text>
        </TouchableOpacity>
      </View>
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
