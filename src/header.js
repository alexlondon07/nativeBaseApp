import React, { Component } from 'react';
import { Header, Left, Icon, Button, Body , Title} from 'native-base';
import BackButton from './back-button';
import HomeButton from './home-button';

const CustomHeader =  props =>{ 
    return (
        <Header>
            <Left>
                { props.hasBackButtom ? 
                    <BackButton navigation = { props.navigation }/>
                    :  
                    <HomeButton navigation = { props.navigation} /> 
                }
            </Left>
            <Body>
                <Title> { props.title }</Title>
            </Body>
        </Header>
    );
}
export default CustomHeader;
