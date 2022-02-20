import React, { Component } from 'react';
import { Text, View,TouchableOpacity, StyleSheet } from 'react-native';

export default class HomeScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={{ fontSize:30, backgroundColor:"lightblue"}}>What languages do you already know?</Text>
       
       

         <TouchableOpacity
              style={styles.buttons}
               onPress={() => this.props.navigation.navigate('WhatJob')}>
              <Text style={{ fontSize:20, color:"white"}}> ≤ 1</Text>

            </TouchableOpacity>

             <TouchableOpacity
              style={styles.buttons}
               onPress={() => this.props.navigation.navigate('joborBuisness')}>
              <Text style={{ fontSize:20, color:"white"}}>> 1</Text>
            </TouchableOpacity>

        
  
        <TouchableOpacity 
              style={back.buttons}
              onPress={() => this.props.navigation.navigate('HomeScreen')}>
              <Text style={{ fontSize:20, color:"white", backgroundColor:"red"}}>Back</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{ 
     alignItems: 'center',
     justifyContent: 'center',
     marginTop: 100 
    },
  points:{
    fontSize: 20
  },  buttons: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderRadius: 15,
    backgroundColor:"green",
    margin: 10,
    width: 200,
    height: 50,
  }
})

const back = StyleSheet.create({
  container:{ 
     alignItems: 'center',
     justifyContent: 'center',
     marginTop: 100 
    },
  points:{
    fontSize: 20
  },  buttons: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderRadius: 15,
    backgroundColor:"red",
    margin: 10,
    width: 200,
    height: 50,
  }
})


