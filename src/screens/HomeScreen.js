import React from 'react';
import {Text,StyleSheet,Button,View,TouchableOpacity} from 'react-native';

const HomeScreen = ({navigation})=>{
    return (
        <View>
            <Text style={styles.text}>Hi there, testing app</Text>
            <Button
                onPress={()=>navigation.navigate('ComponentScreen')}
                title="Go to component demo"
            />
            <Button
                onPress={()=>navigation.navigate('ListScreen')}
                title="Go to list demo"
            />
            <Button
                onPress={()=>navigation.navigate('ImageScreen')}
                title="Go to image demo"
            />

        </View>)
};

const styles = StyleSheet.create({
    text:{
        fontSize:30
    }
});

export default HomeScreen;