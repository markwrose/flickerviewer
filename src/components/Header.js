import React, { Component} from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';


export default class Header extends React.Component {
    render() {
        return (
          <View style={styles.header}>
            <Image
              source= {require('../components/img/download.png')}
              style={styles.cart}
            />
            <Text style={styles.logo}>Flickr Random Viewer</Text>
          </View>
        );
    }
}

const styles = StyleSheet.create({
    header:{
      flex: 1,
      width: '100%',
      height: 80,
      marginTop: 20,
      backgroundColor: '#fff',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 20,
      borderBottomWidth: 8,
      borderBottomColor: '#ccc'
    },
    cart: {
      width: 40,
      height: 40
    },
    logo: {
      fontSize: 20,
      marginLeft: 10,
      fontStyle: 'italic',
      color: '#292929'
    }
});
