import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

import Collections from './components/Collections';
import CollectionImages from './components/CollectionImages';
import PreviewImage from './components/PreviewImage';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();


export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
      <Stack.Navigator screenOptions ={{headerShown :false}}>
      <Stack.Screen name ={'Collections'} component = {Collections}/>
          <Stack.Screen name ={'CollectionImages'} component = {CollectionImages} />
              <Stack.Screen name ={'PreviewImage'} component = {PreviewImage} />
      </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    //backgroundColor:'red'

  },
});
