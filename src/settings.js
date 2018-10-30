import React, { Component } from 'react'
import { View } from 'react-native'
import { Title, Left, Icon, Text, Header, Button, Body, Container, Content} from 'native-base';
import CustomHeader from './header';

class Settings extends Component {

    static navigationOptions = ({ navigation }) => {
        return {
            header: (
                <CustomHeader
                    title = "Configuración"
                    nameIcon = "home"
                    isHome = {true}
                    navigation= { navigation }
                />
            )
        }
    }

    render() {
        return (
        <Container>
            <Content>
                <Text> Configuración </Text>
            </Content>
        </Container>
        )
    }
}
export default Settings;