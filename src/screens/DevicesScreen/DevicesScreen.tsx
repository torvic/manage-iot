import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const DevicesScreen = () => {
  return (
    <View style={styles.page}>
      {/* Render product component */}
      <Text>This is my devices screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    padding: 10,
  },
});

export default DevicesScreen;
