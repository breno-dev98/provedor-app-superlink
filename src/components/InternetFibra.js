import { Card } from "react-native-paper";
import React from "react";
import { Section } from "./Section";
import { MaterialIcons } from "@expo/vector-icons";
import { colors } from "../constants/colors";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

export function InternetFibra({
    title = "OFERTA PROMO 700MB (500 MB + BONUS 200MB) COM AP"
}) {
    const navigation = useNavigation();

    return (
        <Section title="Internet Fibra">
            <Card style={styles.card}>
                <View style={styles.row}>
                    <MaterialIcons
                        name="wifi"
                        color={colors.red.DEFAULT}
                        size={24}
                        style={styles.icon}
                    />
                    <Text style={styles.titleText}>{title}</Text>
                </View>

                <TouchableOpacity onPress={() => navigation.navigate("ConfiguracaoWifi")} style={styles.linkRow}>
                    <Text style={styles.linkText}>Configuração de WiFi</Text>
                    <MaterialIcons name="arrow-forward-ios" color={colors.red.DEFAULT} size={14} />
                </TouchableOpacity>
            </Card>
        </Section>
    );
}

const styles = StyleSheet.create({
    card: {
        padding: 20,
        backgroundColor: colors.white.DEFAULT,
    },
    row: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 12,
    },
    icon: {
        marginRight: 8,
    },
    titleText: {
        flex: 1,
        color: colors.gray.dark,
    },
    linkRow: {
        flexDirection: "row",
        alignItems: "center",
        gap: 15,
        justifyContent: "flex-end",
    },
    linkText: {
        color: colors.red.DEFAULT,
        fontWeight: "500",
        fontSize: 16,
    },
});
