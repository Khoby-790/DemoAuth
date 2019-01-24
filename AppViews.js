import { createSwitchNavigator, createAppContainer } from  'react-navigation'
import SignUp from './Src/Screen/SignUp';
import Login from './Src/Screen/Login';
import Main from './Src/Screen/Main';

export default createAppContainer(createSwitchNavigator({
    login: Login,
    signUp: SignUp,
    main: Main
}, {
    initialRouteName: 'login'
}))