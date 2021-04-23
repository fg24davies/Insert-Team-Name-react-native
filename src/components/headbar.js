import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

function Headbar() {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>acebook</Text>
    </View>
  )
}
      
const styles = StyleSheet.create({
  header: {
    alignSelf: 'stretch',
    height: 52,
    flexDirection: 'row', // row
    backgroundColor: '#179aff',
    alignItems: 'flex-end',
    justifyContent: 'space-between', // center, space-around
    paddingLeft: 10,
    paddingRight: 10
  },

  text: {
    fontSize: 32,
  },
})

export {Headbar};
