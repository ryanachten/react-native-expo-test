import * as React from 'react';
import { Button } from 'react-native';
import { Card, List, ListItem } from 'react-native-elements';
import { connect } from 'react-redux';
import { emailChanged, loginUser, passwordChanged } from '../actions';
import NavigationService from '../navigation/NavigationService';

class EmployeeListScreen extends React.Component {

  public static navigationOptions = {
    headerRight: (
      <Button
        onPress={() => NavigationService.navigate('CreateEmployee')}
        title="Create"
        color="#000"
      />
    ),
    title: 'Employee List',
  };

  private render() {
    const { email, password } = this.props;
    const employees = [
       { title: 'Ryan',  icon: 'mood' },
       { title: 'Matt',  icon: 'mood' },
       { title: 'Sam',   icon: 'mood' },
       { title: 'Mike',  icon: 'mood' },
       { title: 'Chad',  icon: 'mood' },
    ];
    return (
      <Card>
        <List>
          {employees.map(employee => (
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
    email, password,
  });
};

const mapDispatchToProps = {
  emailChanged,
  loginUser,
  passwordChanged,
};

export default connect(mapStateToProps, mapDispatchToProps)(EmployeeListScreen);
