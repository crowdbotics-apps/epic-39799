import { useNavigation } from "@react-navigation/native";
import { Pressable } from "react-native";
import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';

const SocialLoginScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {// handle login logic
  };

  const handleForgotPassword = () => {// handle forgot password logic
  };

  const handleGoogleLogin = () => {// handle google login logic
  };

  const handleFacebookLogin = () => {// handle facebook login logic
  };

  const handleAppleLogin = () => {// handle apple login logic
  };

  return <View style={styles.container}>
      <Image source={require('../assets/logo.png')} style={styles.logo} />
      <Text style={styles.title}>Social Login</Text>
      <View style={styles.inputContainer}>
        <TextInput placeholder="Email" style={styles.input} value={email} onChangeText={setEmail} />
        <TextInput placeholder="Password" style={styles.input} value={password} onChangeText={setPassword} secureTextEntry />
        <TouchableOpacity onPress={handleForgotPassword}>
          <Pressable onPress={() => {
          navigation.navigate("Untitled10");
        }}><Text style={styles.forgotPassword}>Forgot Password?</Text></Pressable>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Pressable onPress={() => {
        navigation.navigate("ScreenAI39");
      }}><Text style={styles.loginButtonText}>Login</Text></Pressable>
      </TouchableOpacity>
      <View style={styles.socialLoginContainer}>
        <TouchableOpacity style={styles.socialLoginButton} onPress={handleGoogleLogin}>
          <Image source={require('../assets/google.png')} style={styles.socialLoginIcon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialLoginButton} onPress={handleFacebookLogin}>
          <Image source={require('../assets/facebook.png')} style={styles.socialLoginIcon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialLoginButton} onPress={handleAppleLogin}>
          <Image source={require('../assets/apple.png')} style={styles.socialLoginIcon} />
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
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20
  },
  inputContainer: {
    width: '80%',
    marginBottom: 20
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10
  },
  forgotPassword: {
    textAlign: 'right',
    color: '#999'
  },
  loginButton: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
    marginBottom: 20
  },
  loginButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center'
  },
  socialLoginContainer: {
    flexDirection: 'row'
  },
  socialLoginButton: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 5,
    marginRight: 10,
    borderWidth: 1,
    borderColor: '#ccc'
  },
  socialLoginIcon: {
    width: 20,
    height: 20
  }
});
export default SocialLoginScreen;