/**
 * @format
 */

import {AppRegistry} from 'react-native';
//import App from './App';
import {name as appName} from './app.json';
import {Text, View} from 'react-native';
// import Header from './src/components/Header';
// import CarList from './src/components/CarList';
import Header from './src/components_1/Header';
import CarList from './src/components_1/CarList';
import MobileList from './src/components_1/Component2/MobileList';
//import { Header } from 'react-native/Libraries/NewAppScreen';

const App = () => {
  // return <Text>Hello</Text>
  // return <Header/>
  return (
    <View>
      <Header title="Mobiles" />
      <MobileList />
    </View>
  );
};

AppRegistry.registerComponent(appName, () => App);
