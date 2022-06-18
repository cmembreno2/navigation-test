import React from 'react';
import {ScrollView,Text,StyleSheet} from 'react-native';
import ImageDetails from '../components/ImageDetails';

const ImageScreen=()=>{
    return <ScrollView>
        <ImageDetails title="Forest" imageSource={require('../../assets/Forest.jpg')} score={9}/>
        <ImageDetails title="Beach" imageSource={require('../../assets/Beach.jpg')} score={10}/>
        <ImageDetails title="Mountain" imageSource={require('../../assets/Mountain.jpg')} score={8}/>
    </ScrollView>
}

const styles=StyleSheet.create({});

export default ImageScreen;