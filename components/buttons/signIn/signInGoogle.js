import React from "react";
import { TouchableOpacity, Text, StyleSheet, View } from "react-native";
import Google from "../../icons/google-icon.svg";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from "react-native-responsive-screen"

export default function SignInGoogle() {
    return (
        <TouchableOpacity style={SignInButton.layout}>
        <View style={SignInButton.icon, SignInButton.iconGoogle}>
            <Google width={wp(7)} height={wp(7)} />
        </View>
        <Text style={{ color: "white" }}>INICIA SESIÓN CON GOOGLE</Text>
    </TouchableOpacity>
    )
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
    iconGoogle: {
        position: "relative",
        backgroundColor: "white",
        borderBottomLeftRadius: 25,
        borderTopLeftRadius: 25,
        marginRight: wp(0),
        marginLeft: 0,
        padding: 8,
        right: wp(4)
    }
})