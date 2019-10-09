import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import './config/ReactotronConfig';

// import console = require('console');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#7159c1',
  },
  welcome: {
    fontSize: 20,
    color: 'white',
  },
});

console.log('hello world');

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Bem vindo ao React Native</Text>
    </View>
  );
}
