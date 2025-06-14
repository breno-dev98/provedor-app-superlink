// Header.js
import React, { useContext, useEffect, useState } from "react";
import { Image, Text, TouchableOpacity, View, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { colors } from "../constants/colors";
import { useNavigation } from "@react-navigation/native";
import { UserContext } from "../context/UserContext";
import logoIcon from "../../assets/logo-icon.jpg"
export default function Header() {
    const {user} = useContext(UserContext)

    const navigation = useNavigation();
    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                <View style={styles.leftWrapper}>
                    <View style={{backgroundColor: colors.white.soft, width: 45, height: 45, borderRadius: 50, justifyContent: "center", alignItems: "center"}}>
                        <Image
                            source={logoIcon}
                            style={{ width: 40, height: 40, resizeMode: "cover", borderRadius: 50 }}
                        />
                    </View>
                    <View>
                        <Text style={styles.greeting}>Olá,</Text>
                        <Text style={styles.username}>{user?.firstName}!</Text>
                    </View>
                </View>
                <View style={styles.rightWrapper}>
                    <TouchableOpacity style={styles.iconButton}>
                        <Feather name="bell" size={24} color={colors.white.DEFAULT} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate("Perfil")} style={styles.iconButton}>
                        <Feather name="user" size={24} color={colors.white.DEFAULT} />
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeArea: {
        backgroundColor: colors.red.DEFAULT,
        justifyContent: "center",
        paddingTop: 20
    },
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 16,
    },
    leftWrapper: {
        flexDirection: "row",
        gap: 10,
        alignItems: "center",
    },
    greeting: {
        color: colors.white.DEFAULT,
        fontSize: 20,
    },
    username: {
        fontWeight: "bold",
        color: colors.white.DEFAULT,
        fontSize: 20,
    },
    rightWrapper: {
        flexDirection: "row",
        gap: 10,
    },
    iconButton: {
        width: 40,
        height: 40,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.red.light,
        borderRadius: 100,
    },
});