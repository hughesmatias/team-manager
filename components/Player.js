import React, { useRef } from 'react';
import Animated from "react-native-reanimated";
import { PanGestureHandler, State } from "react-native-gesture-handler";
import { Text, StyleSheet, View, Dimensions } from 'react-native';

const { width, height } = Dimensions.get("window");

console.log(width, "width");
console.log(height, "height");

const { cond, eq, add, set, Value, event, interpolate, Extrapolate } = Animated;

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

  dragX = new Value(0);
  dragY = new Value(0);
  offsetX = new Value(this.props.position.x / 2);
  offsetY = new Value(this.props.position.y / 2);
  gestureState = new Value(-1);
  onGestureEvent = event([
    {
      nativeEvent: {
        translationX: this.dragX,
        translationY: this.dragY,
        state: this.gestureState,
      },
    },
  ]);
  transX = cond(
    eq(this.gestureState, State.ACTIVE),
    add(this.offsetX, this.dragX),
    set(this.offsetX, add(this.offsetX, this.dragX)),
  );
  transY = cond(
    eq(this.gestureState, State.ACTIVE),
    add(this.offsetY, this.dragY),
    set(this.offsetY, add(this.offsetY, this.dragY)),
  );
  borderWidth = interpolate(this.transX, {
    inputRange: [0, width],
    outputRange: [0, 5],
    extrapolate: Extrapolate.CLAMP
  });
  // opacity = interpolate(this.transY, {
  //   inputRange: [0, height],
  //   outputRange: [0.1, 1],
  // });

  render() {
    const {
      number,
      position,
      color,
    } = this.props;

    return (
<PanGestureHandler
  maxPointers={1}
  onGestureEvent={this.onGestureEvent}
  onHandlerStateChange={this.onGestureEvent}
  >
    <Animated.View
      style={[
        styles.player,
        {
          backgroundColor: color,
        },
        {
          // opacity: this.opacity,
          borderWidth: this.borderWidth,
          transform: [
            {
              translateX: this.transX,
            },
            {
              translateY: this.transY,
            },
          ],
        },
      ]}
    >
      <Text style={{
        color: "white",
      }}>{number}</Text>
    </Animated.View>
</PanGestureHandler>
    )
  }
}

const CIRCLE_SIZE = 35;

const styles = StyleSheet.create({
  player: {
    borderRadius: 999,
    width: CIRCLE_SIZE,
    height: CIRCLE_SIZE,
    marginLeft: -(CIRCLE_SIZE / 2),
    marginTop: -(CIRCLE_SIZE / 2),
    justifyContent: "center",
    alignItems: "center",
  },
})

export default Player;
