import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default class TopBar extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Left</Text>
        <View>
        <Text style={styles.title}>{this.props.title}</Text>
        <Text style={{fontSize: 10}}>{this.props.refreshDate || ','}</Text>
        </View>
        <Text>Right</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 52,
    flexDirection: 'row',
    backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 20,
  }
})