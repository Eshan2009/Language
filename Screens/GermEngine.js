import React, { Component } from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';

export default class Horoscope extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={{ fontSize: 30, backgroundColor: 'lightblue' }}>
          {' '}
          Do you want to become an engineer?{' '}
        </Text>
        <Text> </Text>
      

         <TouchableOpacity
              style={styles.buttons}
               onPress={() => this.props.navigation.navigate('screen1')}>
              <Text style={{ fontSize:20, color:"white"}}>Yes</Text>
            </TouchableOpacity>


        <TouchableOpacity style={styles.buttons}>
         onPress={() => this.props.navigation.navigate('screen1')}>
          <Text style={{ fontSize: 20, color: 'white' }}>No</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttons}
          onPress={() => this.props.navigation.navigate('HomeScreen')}>
          <Text style={{ fontSize: 20, color: 'white' }}>Back</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 100,
  },
  points: {
    fontSize: 20,
  },
  buttons: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderRadius: 15,
    backgroundColor: 'green',
    margin: 10,
    width: 200,
    height: 50,
  },
});