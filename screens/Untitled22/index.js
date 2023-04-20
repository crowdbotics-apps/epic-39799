import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const PaymentsScreen = () => {
  return <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Payments</Text>
      </View>
      <View style={styles.paymentContainer}>
        <TouchableOpacity style={styles.paymentOption}>
          <Image source={require('../assets/icons/credit-card.png')} style={styles.paymentIcon} />
          <Text style={styles.paymentText}>Credit Card</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.paymentOption}>
          <Image source={require('../assets/icons/paypal.png')} style={styles.paymentIcon} />
          <Text style={styles.paymentText}>PayPal</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.paymentOption}>
          <Image source={require('../assets/icons/bitcoin.png')} style={styles.paymentIcon} />
          <Text style={styles.paymentText}>Bitcoin</Text>
        </TouchableOpacity>
      </View>
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  header: {
    backgroundColor: '#6C63FF',
    height: 80,
    justifyContent: 'center',
    alignItems: 'center'
  },
  headerText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold'
  },
  paymentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  paymentOption: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    width: '80%'
  },
  paymentIcon: {
    width: 30,
    height: 30,
    marginRight: 20
  },
  paymentText: {
    fontSize: 18,
    fontWeight: 'bold'
  }
});
export default PaymentsScreen;