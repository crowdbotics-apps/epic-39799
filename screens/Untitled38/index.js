import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

const SupportScreen = () => {
  return <View style={styles.container}>
      <Text style={styles.title}>Support/ Send Feedback</Text>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} placeholder="Name" placeholderTextColor="#A9A9A9" />
        <TextInput style={styles.input} placeholder="Email" placeholderTextColor="#A9A9A9" />
        <TextInput style={styles.input} placeholder="Message" placeholderTextColor="#A9A9A9" multiline={true} numberOfLines={5} />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Send</Text>
        </TouchableOpacity>
      </View>
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30
  },
  inputContainer: {
    width: '80%'
  },
  input: {
    backgroundColor: '#F5F5F5',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5
  },
  button: {
    backgroundColor: '#FF6347',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold'
  }
});
export default SupportScreen;