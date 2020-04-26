import React, { useState } from "react";
import {
  Container,
  Header,
  Title,
  Tabs,
  Tab,
  Button,
  Left,
  Right,
  Body,
  Icon,
} from "native-base";
import { StyleSheet, Text, View, Picker } from "react-native";
import Camp from "./components/Camp";

import { AppLoading } from 'expo';
import * as Font from "expo-font";
import { Ionicons } from "@expo/vector-icons";

const startTeam1 = {
  color: "blue",
  players: [1, 3, 2, 4, 19, 33, 5, 10, 16, 11, 21]
};

const startTeam2 = {
  color: "red",
  players: [40, 3, 2, 4, 19, 33, 5, 10, 16, 11, 21]
};

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false,
    };
  }

  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      ...Ionicons.font,
    });
    this.setState({ isReady: true });
  }

  render() {
    if (!this.state.isReady) {
      return <AppLoading />;
    }

    return (
      <Container>
        <Header hasTabs>
          <Body>
            <Title>Team Manager</Title>
          </Body>
          <Right />
        </Header>
        <Tabs>
          <Tab heading="Team 1">
            <Camp team={startTeam1} />
          </Tab>

          <Tab heading="Team 2">
            <Camp team={startTeam2} />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "transparent",
    paddingTop: 34,
  },
  campo: {
    flex: 1,
    backgroundColor: "green",
  },
  information: {
    backgroundColor: "pink",
    height: 70,
    justifyContent: "center",
  },
  row: {
    borderTopWidth: 2,
    borderTopColor: "grey",
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
});
