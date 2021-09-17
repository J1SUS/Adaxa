import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from "react-native-responsive-screen";
import Twitter from "../../icons/twitter-icon.svg"


export default function SignInButtonTwitter() {
  return (
    <TouchableOpacity style={SignInButton.layout}>
      <View style={SignInButton.iconTwitter}>
        <Twitter width={wp(8)} height={wp(8)} />
      </View>
      <Text style={{color: 'white'}}>INICIA SESIÓN CON TWITTER</Text>
    </TouchableOpacity>
  );
}

const SignInButton = StyleSheet.create({
    layout: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        fontSize: wp(6),
        borderRadius: 25,
        backgroundColor: "#1da1f2",
        maxWidth: wp("80%"),
        maxHeight: wp("13%"),
        color: "#fefefe",
        paddingVertical: "1%",
        paddingHorizontal: "5%",
        marginTop: wp(3)
    },
    iconTwitter: {
        position: "relative",
        marginLeft: 0,
        right: wp(3)
    }
})