import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import FlatListScreen from './screens/FlatListScreen';
import SectionListScreen from './screens/SectionListScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="FlatList" component={FlatListScreen} />
        <Stack.Screen name="SectionList" component={SectionListScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
