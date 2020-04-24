import React, { useState } from 'react';
import { StyleSheet, Text, View, Picker } from 'react-native';
import Player from './components/Player';

export default function App() {
  const options = [
    [1, 4, 4, 2],
    [1, 3, 4, 3],
    [1, 5, 3, 2],
    [1, 4, 3, 3],
    [1, 3, 5, 2],
    "custom"
  ];

  const [ optionSelected, setOption ] = useState(options[0].toString());

  const team1 = {
    gk: [
      {
        number: 	1,
        fullName:	"Petr Čech",
      },{
        number: 	40,
        fullName:	"Ross Turnbull",
      },{
        number: 	22,
        fullName:	"Hilário",
      },
    ],
    defender: [
    {
      number: 	33,
      fullName:	"Alex",
    },
    {
      number: 	34,
      fullName:	"Ryan Bertrand",
    },
    {
      number: 	17,
      fullName:	"Bosingwa",
    },
    {
      number: 	3,
      fullName:	"Ashley Cole",
    },
    {
      number: 	4,
      fullName:	"David Luiz",
    },
    {
      number: 	2,
      fullName:	"Branislav Ivanović",
    },
    {
      number: 	19,
      fullName:	"Paulo Ferreira",
    },
    {
      number: 	26,
      fullName:	"John Terry",
    },
  ],
  md: [
    {
      number: 	10,
      fullName:	"Yossi Benayoun",
    },{
      number: 	62,
      fullName:	"Nathaniel Chalobah",
    },{
      number: 	47,
      fullName:	"Billy Clifford",
    },{
      number: 	5,
      fullName:	"Michael Essien",
    },{
      number: 	8,
      fullName:	"Frank Lampard",
    },{
      number: 	15,
      fullName:	"Florent Malouda",
    },{
      number: 	46,
      fullName:	"Josh McEachran",
    },{
      number: 	33,
      fullName:	"John Mikel",
    },{
      number: 	12,
      fullName:	"Florent Malouda",
    },{
      number: 	16,
      fullName:	"Ramires",
    },{
      number: 	7,
      fullName:	"Jacopo Sala",
    },{
      number: 	55,
      fullName:	"Gökhan Töre",
    },{
      number: 	18,
      fullName:	"Yuriy Zhirkov",
    },
  ],
  forward:[
    {
      number: 	39,
      fullName:	"Nicolas Anelka",
    },{
      number: 	11,
      fullName:	"Didier Drogba",
    },{
      number: 	9,
      fullName:	"Fernando Torres",
    },{
      number: 	21,
      fullName:	"Salomon Kalou",
    },
  ]
  };

  const startTeam1 = {
    color: "blue",
    players: [1, 3, 2, 4, 19, 33, 5, 10, 16, 11, 21]
  };

  const startTeam2 = {
    color: "red",
    players: [40, 3, 2, 4, 19, 33, 5, 10, 16, 11, 21]
  };
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
      return team.players.splice(0, parseInt(optionSelected.split(",")[indice]))
    } else if (indice == 2) {
      return team.players.splice(0, parseInt(optionSelected.split(",")[indice]))
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

  const renderField = team => {
    return (
      <View style={{ flex: 1 }}>
        {getFormation(team, 0).map((number, key) => <Player position={{
          x: 50,
          y: 20
        }} number={number} key={key} />)}
        {getFormation(team, 1).map((number, key) => <Player position={{
          x: 100,
          y: 200
        }} number={number} key={key} />)}
        {getFormation(team, 2).map((number, key) => <Player position={{
          x: 100,
          y: 400
        }} number={number} key={key} />)}
        {getFormation(team, 3).map((number, key) => <Player position={{
          x: 100,
          y: 600
        }} number={number} key={key} />)}
      </View>
    );
  }

  const renderDinamic = team => {
    <View style={{
      flex: 1,
    }}>
      <View style={styles.row}>
        {team.players.map((number, key) => {
          return <Player position={{
            x: 100,
            y: 100
          }} number={number} key={key} />
        })}
      </View>
    </View>
  }

  return (
    <View style={styles.container}>
      <View style={styles.campo}>
        <View style={styles.information}>
          <Text>Informacion seteada</Text>
          <Picker
            selectedValue={optionSelected}
            style={{ height: 50, width: 150 }}
            onValueChange={(itemValue, itemIndex) => setOption(itemValue)}
          >
            {options.map(op => <Picker.Item label={op.toString()} value={op.toString()} />)}
          </Picker>
        </View>
        {optionSelected == "custom" ? renderDinamic(startTeam1) : renderField(startTeam1)}
        <View style={styles.information}>
          <Text>menu inferior</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    paddingTop: 34,
  },
  campo: {
    flex: 1,
    backgroundColor: 'green',
  },
  information: {
    backgroundColor: "pink",
    height: 70,
    justifyContent: 'center',
  },
  row: {
    borderTopWidth: 2,
    borderTopColor: "grey",
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  }
});
