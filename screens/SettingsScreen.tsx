import { ExpoConfigView } from '@expo/samples';
import * as React from 'react';

export default class SettingsScreen extends React.Component {
  public static navigationOptions = {
    title: 'app.json',
  };

  private render() {
    /* Go ahead and delete ExpoConfigView and replace it with your
     * content, we just wanted to give you a quick view of your config */
    return <ExpoConfigView />;
  }
}
