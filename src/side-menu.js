import React, { Component } from 'react'
import { 
    ImageBackground,
    StyleSheet,
    Image
} from 'react-native'
import { Container, Content, List, ListItem, Left, Icon, Text, Right } from 'native-base';

const routes = [
    {
        screen: 'HomeScreen',
        title: 'Inicio',
        icon: 'home'
    },
    {
        screen: 'SettingsStack',
        title: 'Configuración',
        icon: 'ios-settings'
    }
];

export default class SideMenu extends Component {
    render() {
        const { navigation } = this.props;
        return (
        <Container>
            <Content> 
                <ImageBackground
                    source = {{ uri: 'https://cdn.dribbble.com/users/136211/screenshots/2008336/bg-pattern-blue-sm.png' }}
                    style = { styles.imageBackground }
                >
                <Image
                    source = {{ uri: 'https://png2.kisspng.com/20180626/uws/kisspng-avatar-user-computer-icons-software-developer-5b327cc9cc15f7.872727801530035401836.png' }}
                    style = { styles.avatar }
                />
                </ImageBackground>
                <List 
                    dataArray = { routes }
                    renderRow = { item =>{
                        return(
                            <ListItem
                                button
                                onPress = { () => navigation.navigate( item.screen )}
                            >
                                <Left>
                                    <Icon name = { item.icon } />
                                    <Text> { item.title } </Text>
                                </Left>
                                <Right>
                                    <Icon name = "arrow-forward" />
                                </Right>
                            </ListItem>
                        );
                    }}
                />
            </Content>
        </Container>
        );
    }
}

const styles = StyleSheet.create({
    imageBackground: {
        height: 120,
        justifyContent: 'center', //Centrar Verticalmente
        alignItems: 'center',
    },
    avatar: {
        width: 70,
        height: 70,
        borderRadius: 35
    }
});
