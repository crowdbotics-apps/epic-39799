import { useNavigation } from "@react-navigation/native";
import { Pressable } from "react-native";
import { StyleSheet } from "react-native";
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';

const SignUpScreen = () => {
  const navigation = useNavigation();
  return <View style={_styles.kJRQsxki}>
      <Pressable onPress={() => {
      navigation.navigate("Untitled11");
    }}><View style={_styles.ZyJmCmwZ}>
        <Text style={_styles.sfVbAgZV}>Sign Up</Text>
        <Text style={_styles.KkbKsTwt}>Create an account to continue</Text>
      </View></Pressable>
      <View style={_styles.TdccKfcC}>
        <TextInput placeholder="Email" style={_styles.IvIYatXp} />
        <TextInput placeholder="Password" secureTextEntry style={_styles.KNStltKt} />
      </View>
      <View style={_styles.qRvCGLSR}>
        <TouchableOpacity style={_styles.bLITVBrt}>
          <Image source={require('../assets/facebook.png')} style={_styles.XPImIcgm} />
          <Text style={_styles.uXBXWlLL}>Sign up with Facebook</Text>
        </TouchableOpacity>
        <TouchableOpacity style={_styles.HCToNgEj}>
          <Image source={require('../assets/google.png')} style={_styles.JVNGdVRo} />
          <Text style={_styles.yXFgSiiG}>Sign up with Google</Text>
        </TouchableOpacity>
        <TouchableOpacity style={_styles.vTWcogaH}>
          <Image source={require('../assets/apple.png')} style={_styles.xJLvxsge} />
          <Text style={_styles.yrVBrcSQ}>Sign up with Apple</Text>
        </TouchableOpacity>
      </View>
      <View style={_styles.oZhfyJvQ}>
        <Text style={_styles.ENXiQEKu}>By signing up, you agree to our </Text>
        <TouchableOpacity>
          <Pressable onPress={() => {
          navigation.navigate("Terms and Conditions");
        }}><Text style={_styles.sFthGwdT}>Terms and Conditions</Text></Pressable>
        </TouchableOpacity>
        <Text style={_styles.poncXgdu}> and </Text>
        <TouchableOpacity>
          <Pressable onPress={() => {
          navigation.navigate("Untitled14");
        }}><Text style={_styles.uxlBNsRP}>Privacy Policy</Text></Pressable>
        </TouchableOpacity>
      </View>
    </View>;
};

export default SignUpScreen;

const _styles = StyleSheet.create({
  kJRQsxki: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20
  },
  ZyJmCmwZ: {
    marginTop: 50
  },
  sfVbAgZV: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#333"
  },
  KkbKsTwt: {
    fontSize: 16,
    color: "#666",
    marginTop: 10
  },
  TdccKfcC: {
    marginTop: 50
  },
  IvIYatXp: {
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    fontSize: 16,
    paddingVertical: 10
  },
  KNStltKt: {
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    fontSize: 16,
    paddingVertical: 10,
    marginTop: 20
  },
  qRvCGLSR: {
    marginTop: 50
  },
  bLITVBrt: {
    backgroundColor: "#3b5998",
    paddingVertical: 15,
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  XPImIcgm: {
    width: 20,
    height: 20,
    marginRight: 10
  },
  uXBXWlLL: {
    color: "#fff",
    fontSize: 16
  },
  HCToNgEj: {
    backgroundColor: "#db4437",
    paddingVertical: 15,
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20
  },
  JVNGdVRo: {
    width: 20,
    height: 20,
    marginRight: 10
  },
  yXFgSiiG: {
    color: "#fff",
    fontSize: 16
  },
  vTWcogaH: {
    backgroundColor: "#000",
    paddingVertical: 15,
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20
  },
  xJLvxsge: {
    width: 20,
    height: 20,
    marginRight: 10
  },
  yrVBrcSQ: {
    color: "#fff",
    fontSize: 16
  },
  oZhfyJvQ: {
    marginTop: 50,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  ENXiQEKu: {
    fontSize: 10,
    color: "#666",
    textAlign: "left",
    width: 0,
    height: 0
  },
  sFthGwdT: {
    fontSize: 16,
    color: "#3b5998"
  },
  poncXgdu: {
    fontSize: 16,
    color: "#666"
  },
  uxlBNsRP: {
    fontSize: 16,
    color: "#3b5998"
  }
});