// CardStatusConnection.js
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Card } from "react-native-paper";
import { Feather } from "@expo/vector-icons";
import { colors } from "../constants/colors";

export function CardStatusConnection({ status = true, speed = "100 Mbps" }) {

    return (
        <Card style={styles.card}>
            <View style={styles.cardContent}>
                <View>
                    <Text style={styles.title}>Status da Conexão</Text>
                    <Text style={[styles.status, { color: status ? colors.green.DEFAULT : colors.red.DEFAULT }]}>
                        {status ? "Online" : "Offline"}
                    </Text>
                    <Text style={styles.speed}>Velocidade: {speed}</Text>
                </View>
                <View style={[
                    styles.iconWrapper,
                    {
                        backgroundColor: status
                            ? colors.green.extraLight
                            : colors.red.extraLight,
                    },
                ]}>
                    <Feather
                        name={status ? "wifi" : "wifi-off"}
                        size={32}
                        color={status ? colors.green.DEFAULT : colors.red.DEFAULT}
                    />
                </View>
            </View>
        </Card>
    );
}

const styles = StyleSheet.create({
    card: {
        borderRadius: 12,
        margin: 16,
        backgroundColor: colors.white.DEFAULT,
        elevation: 3,
        shadowColor: colors.black.DEFAULT,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 3.84,
    },
    cardContent: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 16,
    },
    title: {
        flexShrink: 1,
    },
    status: {
        marginTop: 4,
        fontSize: 20,
        fontWeight: 'bold'
    },
    speed: {
        marginTop: 4,
    },
    iconWrapper: {
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 50,
        padding: 10
    },
});