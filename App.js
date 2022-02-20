import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import Constants from 'expo-constants';

//import db from "../config";

import HomeScreen from './Screens/HomeScreen';
import joborBuisness from './Screens/joborBuisness';
import Joke from './Screens/Joke';
import News from './Screens/News'
import Weather from './Screens/Weather'
import screen1 from './Screens/screen1'
import screen2 from './Screens/screen2'
import screen3 from './Screens/screen3'
import screen4 from './Screens/screen4'
import GermEngine from './Screens/GermEngine'
import WhatJob from './Screens/WhatJob'
import ScienceJob from './Screens/ScienceJob'
import HighPayJob from './Screens/HighPayJob'
import Welcome from './Screens/Welcome'

export default class App extends React.Component {
  render(){
 return (
    <View>
   <AppContainer/>
    </View>
  );
  }
}
  

var AppNavigator = createSwitchNavigator({
  HomeScreen: HomeScreen,
  joborBuisness: joborBuisness,
  Joke: Joke,                                  
  News: News,
  Weather: Weather,
  screen1: screen1,
  screen2: screen2,
  screen3: screen3,
  screen4: screen4,
  GermEngine: GermEngine,
  WhatJob: WhatJob,
  ScienceJob: ScienceJob,
  HighPayJob: HighPayJob, 
  Welcome: Welcome,
});

const AppContainer = createAppContainer(AppNavigator);


