``` js

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Feed from './Feed';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Feeds" component={Feed} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;


import React from 'react';
import { View, Text } from 'react-native';

function Feed() {
  return (
    <View>
      <Text>Individual Feed Screen</Text>
    </View>
  );
}

export default Feed;


```