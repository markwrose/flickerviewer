import React, { Component} from 'react';
import { StyleSheet, Text, Image } from 'react-native';

import ApiUtils from './ApiUtils'

export default class FlickrViewer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            displayInterval: this.props.displayInterval,
            randomPicture: [],
            apiKey: this.props.apiKey,
            apiAddr: 'https://api.flickr.com/services/rest/?method=flickr.photos.getRecent&api_key='+this.props.apiKey+'&per_page=1&format=json&nojsoncallback=1',
            picURL: undefined,

        };
    }

    componentDidMount() {
        this.timer = setInterval(()=> this.getPic(), this.state.displayInterval)
    }

    async getPic(){
        fetch(this.state.apiAddr)
        .then(ApiUtils.checkStatus)
        .then(d => d.json())
        .then(d => {
            this.setState({
                randomPicture: d.photos.photo[0]
            })
        })
        .catch(e => e)

    }

    render() {
        return (

            <Image
                source={{uri: 'https://farm'+this.state.randomPicture.farm
                +'.staticflickr.com/'+this.state.randomPicture.server
                +'/'+this.state.randomPicture.id+'_'+this.state.randomPicture.secret+'.jpg'}}
                style={styles.FlickrViewer}
                />

        )
    }

}
const styles = StyleSheet.create({
  FlickrViewer: {
    flex: 3,
    padding: 20,
    width: '100%',
    height: 400,
    alignItems: 'center',
    justifyContent: 'center',
  },
  photo: {
    width: '100%',
    height: '100%'
  },
});
//AppRegistry.registerComponent('FlickrRandomViewer', () => FlickrRandomViewer);
