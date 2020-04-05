import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Player from './components/Player';

export default function App() {
  const options = [
    [1, 4, 4, 2],
    [1, 3, 4, 3],
    [1, 5, 3, 2],
    [1, 4, 3, 3],
    [1, 3, 5, 2]
  ];

  const [ optionSelected, setOption ] = useState(options[0]);

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

  const startTeam1 = [1, 3, 2, 4, 19, 33, 5, 10, 16, 11, 21]
  // {
  //   gk: [1],
  //   defender: [3, 2, 4, 19],
  //   md: [33, 5, 10, 16],
  //   forward: [11, 21]
  // };

  const getFormation = (indice) => {
    if (indice == 0) {
      return startTeam1.splice(0, 1)
    } else if (indice == 1) {
      return startTeam1.splice(0, optionSelected[indice+1])
    } else if (indice == 2) {
      return startTeam1.splice(0, optionSelected[indice])
    } else {
      return startTeam1
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.campo}>
        <View style={styles.information}>
          <Text>Informacion seteada</Text>
        </View>
        <View style={styles.row}>
          {getFormation(0).map((number, key) => <Player number={number} key={key} />)}
        </View>
        <View style={styles.row}>
          {getFormation(1).map((number, key) => <Player number={number} key={key} />)}
        </View>
        <View style={styles.row}>
          {getFormation(2).map((number, key) => <Player number={number} key={key} />)}
        </View>
        <View style={styles.row}>
          {getFormation(3).map((number, key) => <Player number={number} key={key} />)}
        </View>
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
    flex: 1,
    borderTopWidth: 2,
    borderTopColor: "grey",
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  }
});
