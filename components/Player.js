import React, { useState } from 'react';
import { Text, StyleSheet, View } from 'react-native';

// PROPS
// fullName
// position
// number

// STATES
// team
// current Position
// status [plaing / bank]
class Player extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      number,
    } = this.props;

    return (
      <View style={styles.player}>
        <Text style={{
          color: "white",
        }}>{number}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  player: {
    borderRadius: 999,
    backgroundColor: "blue",
    width: 35,
    height: 35,
    justifyContent: "center",
    alignItems: "center",
    margin: 10
  }
})

export default Player;
