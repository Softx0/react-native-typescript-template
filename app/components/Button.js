import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default function Button() {
  return (
    <View style={styles.container}>
      <Text>Button</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#737437',
  },
});
