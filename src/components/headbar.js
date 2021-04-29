import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { LogoutButton } from './logoutButton';
import { useNavigation } from '@react-navigation/native';
//import { baseProps } from 'react-native-gesture-handler/lib/typescript/handlers/gestureHandlers';

function Headbar(props) {

  const navigation = useNavigation();
  let logoutButton = null;

  // console.log(navigation.getParam('loggedInStatus'))
  console.log(props);

  if (props.loggedInStatus === true) {
    logoutButton = <LogoutButton />
  }

  return (
    <View style={styles.header}>
      <Text style={styles.text}>IkeBook</Text>
      {logoutButton}
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
    fontWeight: 'bold',
    color: '#FFED00'
  }
})

export {Headbar};
