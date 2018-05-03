import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';


export default class CoinDetail extends Component {
  render() {
    let date = new Date()
    let now = date.toLocaleString()

    return (
      <View style={styles.container}>
        <Image style={{ width: 50, height: 50, marginRight: 5, marginLeft: 5 }}
          source={{ uri: this.props.iconUri }}
        />
        <Text style={[ styles.rank]}>{'#' + (this.props.rank || 'Rank')}</Text>
        <View sytle={{flexDirection: 'column'}}>
          <View>
            <Text style={[ styles.name]}>{this.props.name || 'Name'}</Text>
            <Text style={[ styles.volume]}>{'Volume: ' + (this.props.volume || 0)}</Text>
          </View>
          <View style={{
            flexDirection: 'row',
            marginTop: 10,
            marginBottom: 5,
            alignItems: 'center'
          }}>
            <Text style={[ styles.price]}>{'Price: ' + (this.props.price || 0)}</Text>
          </View>
        </View>  
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 80,
    flexDirection: 'row',
    backgroundColor: 'white',
    alignItems: 'center',
    // justifyContent: 'space-around',
    marginTop: 5,
    marginBottom: 5,
    borderBottomColor: '#bbb',
    borderBottomWidth: 1,
  },
  text: {
    color: 'black',
  },
  rank: {
    fontSize: 20,
    marginRight: 15,
  },
  name: {
    fontSize: 20,
    marginRight: 15,
  },
  price: {
    marginLeft: 5,
    fontSize: 17,
    fontWeight: 'bold',
    marginRight: 15,
  },
  volume: {
    marginTop: 3,
    fontSize: 13,
    color: '#a8a5a5',
    marginRight: 15,
  }
});