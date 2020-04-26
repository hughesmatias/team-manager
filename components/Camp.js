import React, { useState } from 'react';
import { StyleSheet, View, ImageBackground } from 'react-native';
import Player from './Player';
import image from '../assets/football-soccer-field.jpg';

const camp = (props) => {
  // {
  //   gk: [1],
  //   defender: [3, 2, 4, 19],
  //   md: [33, 5, 10, 16],
  //   forward: [11, 21]
  // };

  const getFormation = (team, indice) => {
    if (indice == 0) {
      return team.players.splice(0, 1)
    } else if (indice == 1) {
      return team.players.splice(0, parseInt(4))
    } else if (indice == 2) {
      return team.players.splice(0, parseInt(4))
    } else {
      return team.players;
    }
  }

  const isPlaing = player => 
    startTeam1.players.includes(st => st == player) && startTeam2.players.includes(st => st == player);

  const generateTeam = (currentTeam) => {
    const lines = optionSelected.split(",");
    // currentTeam.players.push()
  }

  const renderTeam = () => {
    let team = props.team;
    return (
      <View>
        {getFormation(team, 0).map((number, key) => <Player position={{
          x: 50,
          y: 35
        }} number={number} color={team.color} key={key} />)}
        {getFormation(team, 1).map((number, key) => <Player position={{
          x: 100,
          y: 200
        }} number={number} color={team.color} key={key} />)}
        {getFormation(team, 2).map((number, key) => <Player position={{
          x: 100,
          y: 400
        }} number={number} color={team.color} key={key} />)}
        {getFormation(team, 3).map((number, key) => <Player position={{
          x: 100,
          y: 600
        }} number={number} color={team.color} key={key} />)}
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <ImageBackground source={image} style={styles.campo}>
        {renderTeam()}
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    flexDirection: "column"
  },
  campo: {
    height: '100vh',
  },
});

export default camp;
