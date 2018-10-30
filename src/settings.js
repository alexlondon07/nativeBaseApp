import React, { Component } from 'react'
import { Text, Container, Content} from 'native-base';
import CustomHeader from './header';

class Settings extends Component {

    static navigationOptions = ({ navigation }) => {
        return {
            header: props => (
                <CustomHeader
                    title = { 'Configuración' }
                    navigation = { navigation }
                    hasBackButtom= { props.navigation.state.routes.length > 1 }
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