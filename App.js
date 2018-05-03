/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View, 
  StatusBar
} from 'react-native';
import CoinView from './components/CoinView'
// import TopBar from './components/TopBar'
import { TopBar } from './components'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      refreshDate: '-'
    }
  }

  _setRefreshDate(date) {
    console.log('Update: ' + date)
    this.setState({
      refreshDate: date
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          hidden={true}
          backgroundColor="blue"
          barStyle="light-content"/>
        <TopBar title="Show Me The COIN" refreshDate={this.state.refreshDate} ></TopBar>
        <CoinView style={styles.coinView} refreshDate={(date) => this._setRefreshDate(date)}></CoinView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#fff',
  },
  coinView: {
    width: '100%',
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'skyblue',
    // alignItems: 'center',
    // justifyContent: 'space-around'
  }
});
