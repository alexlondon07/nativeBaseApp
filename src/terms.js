import React, { Component } from 'react'
import { Text, View } from 'react-native'
import CustomHeader from './header';

export default class Terms extends Component {

    static navigationOptions = ({ navigation }) => {
        return {
            header: props => (
                <CustomHeader
                    title = { 'Términos' }
                    navigation = { navigation }
                    hasBackButtom= { props.navigation.state.routes.length > 1 }
                />
            )
        }
    }
    render() {
        return (
        <View>
            <Text> Términos y Condiciones </Text>
        </View>
        )
    }
}