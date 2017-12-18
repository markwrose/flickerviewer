import React, { Component} from 'react';
import { StyleSheet, Text, View} from 'react-native';


export default class Banner extends React.Component {

  render() {
      return (
        <View style={styles.banner}>

          <Text style={styles.logo}>WARNING - Content may be offensive!</Text>

        </View>

        );
    }
}

const styles = StyleSheet.create({
  banner: {
    flex: 2,
    width: '100%',
    height: 75,
    marginTop: 1,
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 2,
    borderBottomWidth: 8,
    borderBottomColor: '#ccc'
  },
  logo: {
    padding: 2,
    fontSize: 15,
    marginLeft: 0,
    fontStyle: 'italic',
    color: '#292929'
  }
});
