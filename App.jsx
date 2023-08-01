const Stack = createNativeStackNavigator();
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import Home from './components/Home';
import AllStories from './components/AllStories';

import Story from './components/Story';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const App = () => {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Story"
            component={Story}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="AllStories"
            component={AllStories}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};
export default App;
