import React, {Component} from 'react';
import { StyleSheet, Text, TextInput, View, ScrollView } from 'react-native';

var obj = require('./config.json');
const disInterval = obj.timeInterval;
const apiKey = obj.apiKey

import Header from './src/components/Header'
import Banner from './src/components/Banner'
import FlickrViewer from './src/components/flickrviewer'

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      displayInterval: disInterval
    }
  }
  static defaultProps = {
    displayInterval: disInterval
  }

    render() {
      return (
          <ScrollView style={styles.container}>
            <Header />
            <Banner />
            <FlickrViewer displayInterval={this.state.displayInterval} apiKey={apiKey} />
          </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff'

    }
});
