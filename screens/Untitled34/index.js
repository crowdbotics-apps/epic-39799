import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const NotificationsScreen = () => {
  return <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Notifications</Text>
      </View>
      <View style={styles.notification}>
        <Image source={require('../assets/notification-icon.png')} style={styles.notificationIcon} />
        <View style={styles.notificationDetails}>
          <Text style={styles.notificationTitle}>New message</Text>
          <Text style={styles.notificationMessage}>
            You have a new message from John Doe
          </Text>
          <Text style={styles.notificationTime}>2 hours ago</Text>
        </View>
      </View>
      <View style={styles.notification}>
        <Image source={require('../assets/notification-icon.png')} style={styles.notificationIcon} />
        <View style={styles.notificationDetails}>
          <Text style={styles.notificationTitle}>New follower</Text>
          <Text style={styles.notificationMessage}>
            You have a new follower on Instagram
          </Text>
          <Text style={styles.notificationTime}>5 hours ago</Text>
        </View>
      </View>
      <View style={styles.notification}>
        <Image source={require('../assets/notification-icon.png')} style={styles.notificationIcon} />
        <View style={styles.notificationDetails}>
          <Text style={styles.notificationTitle}>New email</Text>
          <Text style={styles.notificationMessage}>
            You have a new email from Jane Doe
          </Text>
          <Text style={styles.notificationTime}>1 day ago</Text>
        </View>
      </View>
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: 20
  },
  header: {
    alignItems: 'center',
    marginBottom: 20
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  notification: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20
  },
  notificationIcon: {
    width: 50,
    height: 50,
    marginRight: 20
  },
  notificationDetails: {
    flex: 1
  },
  notificationTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5
  },
  notificationMessage: {
    fontSize: 16,
    marginBottom: 5
  },
  notificationTime: {
    fontSize: 14,
    color: '#999'
  }
});
export default NotificationsScreen;