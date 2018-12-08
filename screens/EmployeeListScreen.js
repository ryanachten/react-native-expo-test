import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-native';
import NavigationService from '../navigation/NavigationService';
import { Card, List, ListItem } from 'react-native-elements';
import { emailChanged, passwordChanged, loginUser } from '../actions';

class EmployeeListScreen extends React.Component {

  static navigationOptions = {
    title: 'Employee List',
    headerRight: (
      <Button
        onPress={() => NavigationService.navigate('CreateEmployee')}
        title="Create"
        color="#000"
      />
    ),
  };

  render() {
    const { email, password } = this.props;
    const employees = [
       {title: 'Ryan',  icon: 'mood'},
       {title: 'Matt',  icon: 'mood'},
       {title: 'Sam',   icon: 'mood'},
       {title: 'Mike',  icon: 'mood'},
       {title: 'Chad',  icon: 'mood'}
    ];
    return (
      <Card>
        <List>
          {employees.map( (employee) => (
            <ListItem
              key={employee.title}
              title={employee.title}
              icon={employee.icon}
            />
          ))}
        </List>
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

export default connect(mapStateToProps, mapDispatchToProps)(EmployeeListScreen);
