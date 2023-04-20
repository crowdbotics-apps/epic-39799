import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const UploadPictureScreen = () => {
  const [image, setImage] = useState(null);

  const handleChoosePhoto = () => {// code to choose photo from device's gallery
  };

  const handleTakePhoto = () => {// code to take photo using device's camera
  };

  return <View style={styles.container}>
      <Text style={styles.title}>Upload a Picture</Text>
      <View style={styles.imageContainer}>
        {image ? <Image source={{
        uri: image
      }} style={styles.image} /> : <Text style={styles.placeholderText}>No Image Selected</Text>}
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handleChoosePhoto}>
          <Text style={styles.buttonText}>Choose Photo</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleTakePhoto}>
          <Text style={styles.buttonText}>Take Photo</Text>
        </TouchableOpacity>
      </View>
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20
  },
  imageContainer: {
    width: '80%',
    height: 300,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 10
  },
  placeholderText: {
    fontSize: 18,
    color: '#ccc'
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '80%'
  },
  button: {
    backgroundColor: '#007AFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5
  },
  buttonText: {
    color: '#fff',
    fontSize: 18
  }
});
export default UploadPictureScreen;