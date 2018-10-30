import { DrawerNavigator , createStackNavigator } from 'react-navigation';

import Home from './home';
import SideMenu from './side-menu';
import Settings from './settings';
import Terms from './terms';

const stackSettings = createStackNavigator({
    SettingsScreen:{  
        screen: Settings 
    },
    TermsScreen:{  
        screen: Terms 
    },
},{
    initialRouteName: 'SettingsScreen'
})

export const Nav = DrawerNavigator({
    HomeScreen:{  screen: Home },
    SettingsStack:{  screen: stackSettings }
},{
    contentComponent: SideMenu
});