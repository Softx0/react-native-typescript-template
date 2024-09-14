import { Text, View } from 'react-native';
import React from 'react';
import { createStyleSheet } from 'react-native-unistyles';

export default function Button() {
  return (
    <View style={styles.container}>
      <Text>Button</Text>
    </View>
  );
}

const styles = createStyleSheet({
  container: {
    backgroundColor: '#737437',
  },
});
