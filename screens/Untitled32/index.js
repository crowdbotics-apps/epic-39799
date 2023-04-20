import React from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';

const ChatScreen = () => {
  return <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require('../assets/profile-pic.png')} style={styles.profilePic} />
        <Text style={styles.username}>John Doe</Text>
      </View>
      <View style={styles.chatContainer}>
        {
        /* Dummy chat messages */
      }
        <View style={styles.messageContainer}>
          <View style={styles.message}>
            <Text style={styles.messageText}>Hey, how are you?</Text>
          </View>
          <View style={[styles.message, styles.sentMessage]}>
            <Text style={styles.messageText}>I'm good, thanks for asking!</Text>
          </View>
          <View style={styles.message}>
            <Text style={styles.messageText}>What have you been up to?</Text>
          </View>
          <View style={[styles.message, styles.sentMessage]}>
            <Text style={styles.messageText}>Not much, just working on some projects.</Text>
          </View>
        </View>
        {
        /* Input field for sending messages */
      }
        <View style={styles.inputContainer}>
          <TextInput placeholder="Type a message..." style={styles.input} />
          <TouchableOpacity style={styles.sendButton}>
            <Image source={require('../assets/send-icon.png')} style={styles.sendIcon} />
          </TouchableOpacity>
        </View>
      </View>
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc'
  },
  profilePic: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10
  },
  username: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  chatContainer: {
    flex: 1,
    justifyContent: 'space-between'
  },
  messageContainer: {
    paddingHorizontal: 20,
    paddingBottom: 20
  },
  message: {
    backgroundColor: '#f2f2f2',
    borderRadius: 20,
    padding: 10,
    marginBottom: 10,
    maxWidth: '80%'
  },
  sentMessage: {
    alignSelf: 'flex-end',
    backgroundColor: '#0084ff'
  },
  messageText: {
    fontSize: 16
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: '#ccc'
  },
  input: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginRight: 10
  },
  sendButton: {
    backgroundColor: '#0084ff',
    borderRadius: 20,
    padding: 10
  },
  sendIcon: {
    width: 20,
    height: 20,
    tintColor: '#fff'
  }
});
export default ChatScreen;