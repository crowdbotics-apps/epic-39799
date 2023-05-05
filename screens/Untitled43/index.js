import { StyleSheet } from "react-native";
import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

const CharacterScreen = () => {
  return <View style={_styles.pqXZlxXy}>
      <Image source={require('../assets/character.png')} style={_styles.bzwRdLVD} />
      <Text style={_styles.ZcBwnpPc}>List of all characters</Text>
      <View style={_styles.DYGrQynO}>
        <View style={_styles.oQKenECo}>
          <Image source={require('../assets/character1.png')} style={_styles.COYPubYq} />
          <Text style={_styles.bhpJbMkw}>Character 1</Text>
          <TouchableOpacity style={_styles.YpbjyXNi}>
            <Image source={require('../assets/favorite.png')} style={_styles.vMHNROGX} />
          </TouchableOpacity>
        </View>
        <View style={_styles.cpgUiKxa}>
          <Image source={require('../assets/character2.png')} style={_styles.WRQspXpA} />
          <Text style={_styles.ykPiMaQj}>Character 2</Text>
          <TouchableOpacity style={_styles.bbigPeWq}>
            <Image source={require('../assets/favorite.png')} style={_styles.fOGfuikY} />
          </TouchableOpacity>
        </View>
        <View style={_styles.pbvGGMwk}>
          <Image source={require('../assets/character3.png')} style={_styles.qWLPqpZk} />
          <Text style={_styles.jxJISMPq}>Character 3</Text>
          <TouchableOpacity style={_styles.VzobjAqy}>
            <Image source={require('../assets/favorite.png')} style={_styles.rfYpIvEU} />
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity style={_styles.nRVGdxZk}>
        <Image source={require('../assets/back.png')} style={_styles.fULOnFQj} />
      </TouchableOpacity>
    </View>;
};

export default CharacterScreen;

const _styles = StyleSheet.create({
  pqXZlxXy: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  bzwRdLVD: {
    width: 200,
    height: 200
  },
  ZcBwnpPc: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 20
  },
  DYGrQynO: {
    width: "80%",
    marginTop: 20
  },
  oQKenECo: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10
  },
  COYPubYq: {
    width: 50,
    height: 50,
    marginRight: 10
  },
  bhpJbMkw: {
    fontSize: 18
  },
  YpbjyXNi: {
    marginLeft: "auto"
  },
  vMHNROGX: {
    width: 30,
    height: 30
  },
  cpgUiKxa: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10
  },
  WRQspXpA: {
    width: 50,
    height: 50,
    marginRight: 10
  },
  ykPiMaQj: {
    fontSize: 18
  },
  bbigPeWq: {
    marginLeft: "auto"
  },
  fOGfuikY: {
    width: 30,
    height: 30
  },
  pbvGGMwk: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10
  },
  qWLPqpZk: {
    width: 50,
    height: 50,
    marginRight: 10
  },
  jxJISMPq: {
    fontSize: 18
  },
  VzobjAqy: {
    marginLeft: "auto"
  },
  rfYpIvEU: {
    width: 30,
    height: 30
  },
  nRVGdxZk: {
    position: "absolute",
    bottom: 20,
    left: 20
  },
  fULOnFQj: {
    width: 30,
    height: 30
  }
});