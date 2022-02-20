import React, { Component } from 'react';
import { Text, View,TouchableOpacity, StyleSheet, Button } from 'react-native';

export default class joborBuisness extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={{ fontSize:30, backgroundColor:"lightblue"}}> What high pay job do you want to do? </Text>
        <Text> </Text>
        
        <TouchableOpacity
              style={styles.buttons}
               onPress={() => this.props.navigation.navigate('Weather')}>
              <Text style={{ fontSize:20, color:"white"}}>Doctor</Text>
            </TouchableOpacity>

             <TouchableOpacity
              style={styles.buttons}
               onPress={() => this.props.navigation.navigate('News')}>
              <Text style={{ fontSize:20, color:"white"}}>lawyer</Text>
            </TouchableOpacity>

             <TouchableOpacity
              style={styles.buttons}
               onPress={() => this.props.navigation.navigate('Joke')}>
              <Text style={{ fontSize:20, color:"white"}}>Airline Pilot</Text>
            </TouchableOpacity>

             <TouchableOpacity
              style={styles.buttons}
               onPress={() => this.props.navigation.navigate('Joke')}>
              <Text style={{ fontSize:20, color:"white"}}></Text>
            </TouchableOpacity>
        
        <TouchableOpacity
              style={styles.buttons}
              onPress={() => this.props.navigation.navigate('HomeScreen')}>
              <Text style={{ fontSize:20, color:"white"}}>Back</Text>
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