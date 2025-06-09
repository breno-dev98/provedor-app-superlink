// Header.js
import React from "react";
import { Image, Text, TouchableOpacity, View, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { colors } from "../constants/colors";
import { useNavigation } from "@react-navigation/native";

export default function Header({ username = "Breno" }) {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                <View style={styles.leftWrapper}>
                    <Image
                        source={{
                            uri: "https://imgs.search.brave.com/60CChrZoFSmmjlU8IkPolnciNoDC-3i7zhN3pSvV21A/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvZDY3MWE0YTY3/MWVmY2ZmNTcyNThm/Zjc2OGQ4ZDkzOGYz/YTc0YjE3NjE2NmNh/ZDU4Mzk5Yzg1YmIx/ODJkNmFhNi9zdXBl/cmxpbmtwcm92ZWRv/ci5jb20uYnIv",
                            width: 40,
                            height: 40,
                            resizeMode: "cover",
                        }}
                    />
                    <View>
                        <Text style={styles.greeting}>Olá,</Text>
                        <Text style={styles.username}>{username}!</Text>
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
    },
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 16,
        paddingTop: 30,
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