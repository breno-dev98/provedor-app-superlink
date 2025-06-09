import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { Card } from "react-native-paper";
import { colors } from "../constants/colors";

export default function WiFiScreen({ status = true, ssid = "super-326748", password = "a7q9s5q" }) {
    return (
        <View style={styles.container}>
            <Card style={styles.card}>
                <View style={styles.header}>
                    <Text style={styles.title}>Wi-Fi</Text>
                    <Text style={styles.status}>
                        Status:{" "}
                        <Text style={status ? styles.visible : styles.hidden}>
                            {status ? "visível" : "ocultado"}
                        </Text>
                    </Text>
                </View>
                <View style={styles.infoGroup}>
                    <Text style={styles.label}>Nome da rede (SSID)</Text>
                    <Text style={styles.value}>{ssid}</Text>
                </View>
                <View style={styles.infoGroup}>
                    <Text style={styles.label}>Senha</Text>
                    <Text style={styles.value}>{password}</Text>
                </View>
                <View style={styles.actions}>
                    <TouchableOpacity style={[styles.button, styles.outlineButton]}>
                        <Text style={styles.buttonText}>Alterar Senha</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.button, styles.filledButton]}>
                        <Text style={[styles.buttonText, styles.filledButtonText]}>
                            Compartilhar{"\n"}WiFi
                        </Text>
                    </TouchableOpacity>
                </View>
            </Card>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 22,
    },
    card: {
        padding: 18,
        borderRadius: 5,
        flexDirection: "column",
        gap: 10,
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 12,
        alignItems: "center"
    },
    title: {
        fontSize: 24,
        fontWeight: "500",
    },
    status: {
        fontSize: 14,
        color: colors.gray.dark
    },
    visible: {
        color: colors.green.DEFAULT,
        fontWeight: "500",
    },
    hidden: {
        color: colors.red.DEFAULT,
        fontWeight: "500",
    },
    infoGroup: {
        marginBottom: 12,
    },
    label: {
        fontSize: 16,
        fontWeight: "500",
        marginBottom: 4,
    },
    value: {
        fontSize: 16,
        color: colors.gray.dark
    },
    actions: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 12,
    },
    button: {
        flex: 1,
        paddingVertical: 10,
        paddingHorizontal: 10,
        borderRadius: 6,
        alignItems: "center",
        justifyContent: "center",
        marginHorizontal: 4,
    },
    outlineButton: {
        borderWidth: 1,
        borderColor: colors.gray.text,
        backgroundColor: "transparent",
    },
    filledButton: {
        backgroundColor: colors.red.light,
    },
    buttonText: {
        fontSize: 14,
        textTransform: "none",
        textAlign: "center",
    },
    filledButtonText: {
        color: "#fff",
    },
});
