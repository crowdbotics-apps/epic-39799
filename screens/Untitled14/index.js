import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const PrivacyPolicyScreen = () => {
  return <View style={styles.container}>
      <Text style={styles.title}>Privacy Policy</Text>
      <Text style={styles.text}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod
        mauris vel sapien tincidunt, vel bibendum velit bibendum. Nulla
        facilisi. Sed euismod, velit vel bibendum bibendum, velit elit
        sollicitudin velit, vel bibendum velit elit vel velit. Sed euismod
        mauris vel sapien tincidunt, vel bibendum velit bibendum. Nulla
        facilisi. Sed euismod, velit vel bibendum bibendum, velit elit
        sollicitudin velit, vel bibendum velit elit vel velit.
      </Text>
      <Text style={styles.text}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod
        mauris vel sapien tincidunt, vel bibendum velit bibendum. Nulla
        facilisi. Sed euismod, velit vel bibendum bibendum, velit elit
        sollicitudin velit, vel bibendum velit elit vel velit. Sed euismod
        mauris vel sapien tincidunt, vel bibendum velit bibendum. Nulla
        facilisi. Sed euismod, velit vel bibendum bibendum, velit elit
        sollicitudin velit, vel bibendum velit elit vel velit.
      </Text>
      <Text style={styles.text}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod
        mauris vel sapien tincidunt, vel bibendum velit bibendum. Nulla
        facilisi. Sed euismod, velit vel bibendum bibendum, velit elit
        sollicitudin velit, vel bibendum velit elit vel velit. Sed euismod
        mauris vel sapien tincidunt, vel bibendum velit bibendum. Nulla
        facilisi. Sed euismod, velit vel bibendum bibendum, velit elit
        sollicitudin velit, vel bibendum velit elit vel velit.
      </Text>
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20
  },
  text: {
    fontSize: 16,
    marginBottom: 10
  }
});
export default PrivacyPolicyScreen;