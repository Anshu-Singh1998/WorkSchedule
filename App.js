import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import FirstScreen from './src/components/FirstScreen';
import SecondScreen from './src/components/SecondScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="FirstScreen">
        <Stack.Screen
          name="FirstScreen"
          component={FirstScreen}
          options={{title: 'FirstScreen'}}
        />
        <Stack.Screen
          name="SecondScreen"
          component={SecondScreen}
          options={{title: 'SecondScreen'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
