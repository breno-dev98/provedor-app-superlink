import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import { colors } from "../constants/colors";

export function ActionCard({ icon = "box", label = "Ação", onPress }) {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <View style={styles.iconCard}>
                <Feather name={icon} size={28} color={colors.red.DEFAULT} />
            </View>
            <Text style={styles.label}>{label}</Text>
        </TouchableOpacity>
    );
}

const CARD_WIDTH = 70;

const styles = StyleSheet.create({
    container: {
        width: CARD_WIDTH,
        alignItems: "center",
    },
    iconCard: {
        width: CARD_WIDTH,
        backgroundColor: colors.red.extraLight,
        borderRadius: 10,
        paddingVertical: 14,
        justifyContent: "center",
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    label: {
        marginTop: 8,
        fontSize: 12,
        fontWeight: "500",
        color: colors.black.text,
        textAlign: "center",
        width: CARD_WIDTH,
    },
});
