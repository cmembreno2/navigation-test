import React from 'react';
import {Text, StyleSheet,View} from 'react-native';

const ComponentScreen = ()=>{

    const greeting = <Text style={style.subHeaderStyle}>Hello to you!</Text>
    const name = 'Carlos Membreno'

    return(
        <View>
             <Text style={style.text}>This is the component screen</Text>
             {greeting}
             <Text style={style.subHeaderStyle}>My name is {name}</Text>        
        </View>
    );
};

const style = StyleSheet.create({
    text:{
        fontSize: 30
    },
    subHeaderStyle:{
        fontSize:20
    }
});

export default ComponentScreen;