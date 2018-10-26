import { DrawerNavigator , createStackNavigator } from 'react-navigation';

import Home from './home';
import SideMenu from './side-menu';
import Settings from './settings';

const stackSettings = createStackNavigator({
    SettingsScreen:{  screen: Settings },
})

export const Nav = DrawerNavigator({
    HomeScreen:{  screen: Home },
    SettingsScreen:{  screen: stackSettings }
},{
    contentComponent: SideMenu
});