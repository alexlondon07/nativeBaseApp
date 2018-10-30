import React, { Component } from 'react'
import { Text, Container, Content, Button} from 'native-base';
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
        const { navigation } = this.props;
        return (
            <Container>
                <Content>
                    <Text> Configuración </Text>
                    <Button
                        onPress = { ()=> navigation.navigate('TermsScreen') }
                    >
                        <Text>Ir a Términos y Condiciones</Text>
                    </Button>
                </Content>
            </Container>
        )
    }
}
export default Settings;