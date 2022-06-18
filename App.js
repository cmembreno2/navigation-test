import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import ComponentScreen from './src/screens/ComponentScreen';
import ListScreen from './src/screens/ListScreen';
import ImageScreen from './src/screens/ImageScreen'

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'App',headerRight: () => (
            <Button
              onPress={() => alert('This is a button!')}
              title="Info"
              color="#000000"
            />
          ), }}/>
        <Stack.Screen name="ComponentScreen" component={ComponentScreen} />    
        <Stack.Screen name="ListScreen" component={ListScreen}/>
        <Stack.Screen name="ImageScreen" component={ImageScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
