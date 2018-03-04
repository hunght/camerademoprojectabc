import { AppRegistry } from 'react-native';
import App from './App';
import SVGView from './SVGView';
import CropImage from './CropImage';

import { StackNavigator } from 'react-navigation';

const StackNav = StackNavigator(
  {
    App: { screen: App },
    CropImage: { screen: CropImage },
    SVGView: { screen: SVGView }
  },
  {
    headerMode: 'none'
  }
);
AppRegistry.registerComponent('camerademoprojectabc', () => StackNav);
