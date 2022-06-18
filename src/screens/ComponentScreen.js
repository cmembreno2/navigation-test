import React from 'react';
import {Text, StyleSheet} from 'react-native';

const ComponentScreen = ()=>{
    return <Text style={style.text}>This is the component screen</Text>;
};

const style = StyleSheet.create({
    text:{
        fontSize: 30
    }
});

export default ComponentScreen;