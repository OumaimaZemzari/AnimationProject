import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import ParallelTest from "./Components/ParallelTest";
import SpringTest from "./Components/SpringTest";
import TimingTest from "./Components/TimingTest";
import DecayTest from "./Components/DecayTest";
import SequenceTest from "./Components/SequenceTest";
//vous pouvez choisir celle que vous voulez essayer
export default function App() {
  return (
    <View style={styles.container}>
      <SequenceTest/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
