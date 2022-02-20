import React, { Component } from 'react';
import { Text, View,TouchableOpacity, StyleSheet } from 'react-native';

export default class Horoscope extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={{ fontSize:30, backgroundColor:"lightblue"}}>Which job do you want to do</Text>
       
       

         <TouchableOpacity
              style={styles.buttons}
               onPress={() => this.props.navigation.navigate('Weather')}>
              <Text style={{ fontSize:20, color:"white"}}>Teaching</Text>
            </TouchableOpacity>

             <TouchableOpacity
              style={styles.buttons}
               onPress={() => this.props.navigation.navigate('News')}>
              <Text style={{ fontSize:20, color:"white"}}>Police or Army</Text>
            </TouchableOpacity>

             <TouchableOpacity
              style={styles.buttons}
               onPress={() => this.props.navigation.navigate('Joke')}>
              <Text style={{ fontSize:20, color:"white"}}>Animal related job</Text>
            </TouchableOpacity>

             <TouchableOpacity
              style={styles.buttons}
               onPress={() => this.props.navigation.navigate('Joke')}>
              <Text style={{ fontSize:20, color:"white"}}>Service and fast food jobs</Text>
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