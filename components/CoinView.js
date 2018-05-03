/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

 //https://coinmarketcap.com/v1/ticket/

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ScrollView
} from 'react-native';
import CoinDetail from './CoinDetail'
import { getCoinIconUri } from '../libs/Constants'

export default class CoinView extends Component {

  constructor(props) {
    super(props)
    this.state = {
      coinDatas: [],
      isLoaded: false
    }
  }

  _getCoinDatas(limit) {
    this.setState({
      isLoaded: false,
    })

    fetch(
      `https://api.coinmarketcap.com/v2/ticker/?limit=${limit}`
    )
    .then(response =>
      response.json()
    )
    .then(data => {
      let date = new Date()
      let now = date.toLocaleString()
      
      this.props.refreshDate && this.props.refreshDate(now)
       
      this.setState({
        coinDatas: Object.values(data.data),
        isLoaded: true,
      })
    })
  }

  componentDidMount() {
    this._getCoinDatas(10)
    console.log('didmount')
    setInterval(() => {
      console.log('interval')
      this._getCoinDatas(10)
    }, 5000)
    console.log('after')
  }


  render() {
    console.log('coinDatas: ', this.state.coinDatas)
    let detailCells = this.state.coinDatas.map((data, index) => {
      const {rank, name, price_usd, quotes, last_updated} = data
      console.log('quotes.price: ', quotes.USD.price)
      console.log('quotes.volumn_24h: ', quotes.USD.volume_24h)
      console.log('quotes: ', quotes.USD)
      return <CoinDetail
        key={index}
        rank={rank}
        name={name}
        price={quotes.USD.price}
        volume={quotes.USD.volume_24h}
        iconUri={getCoinIconUri(name)}
      />
    })
    
    // let detailCells = []
    // for(var i = 0; i < this.state.coinDatas.length; i++) {
    //   let data = this.state.coinDatas[i]
    //   let coinDetail = (
    //     <CoinDetail
    //       key={data.index}
    //       rank={data.rank}
    //       name={data.name}
    //       price={data.price_usd}
    //       volumn={data.market_cap_usd}
    //     />
    //   )
    //   detailCells.push(coinDetail)
    // }

    return (
      <ScrollView style={this.props.style}>
        {detailCells}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: 'skyblue',
  },
});
