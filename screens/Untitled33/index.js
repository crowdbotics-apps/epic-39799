import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const AdsScreen = () => {
  return <View style={styles.container}>
      <Text style={styles.title}>Check out these amazing deals!</Text>
      <View style={styles.adContainer}>
        <Image source={{
        uri: 'https://dummyimage.com/300x200/000/fff'
      }} style={styles.adImage} />
        <View style={styles.adDetails}>
          <Text style={styles.adTitle}>50% off on all products</Text>
          <Text style={styles.adDescription}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            malesuada, velit eu bibendum bibendum, elit elit bibendum.
          </Text>
          <Text style={styles.adLink}>www.example.com</Text>
        </View>
      </View>
      <View style={styles.adContainer}>
        <Image source={{
        uri: 'https://dummyimage.com/300x200/000/fff'
      }} style={styles.adImage} />
        <View style={styles.adDetails}>
          <Text style={styles.adTitle}>Limited time offer</Text>
          <Text style={styles.adDescription}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            malesuada, velit eu bibendum bibendum, elit elit bibendum.
          </Text>
          <Text style={styles.adLink}>www.example.com</Text>
        </View>
      </View>
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 30
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20
  },
  adContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    backgroundColor: '#f2f2f2',
    borderRadius: 10,
    overflow: 'hidden'
  },
  adImage: {
    width: 120,
    height: 80
  },
  adDetails: {
    flex: 1,
    padding: 10
  },
  adTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5
  },
  adDescription: {
    fontSize: 14,
    marginBottom: 5
  },
  adLink: {
    fontSize: 12,
    color: 'blue'
  }
});
export default AdsScreen;