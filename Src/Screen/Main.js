import { createDrawerNavigator, createAppContainer } from  'react-navigation';
import Dashboard from './Dashboard';
import Settings from './Settings';

const MyDrawerNavigator = createDrawerNavigator({
    Home: {
      screen: Dashboard,
    },
    Settings: {
      screen: Settings,
    },
  });
  

  export default MyApp = createAppContainer(MyDrawerNavigator);