import { Text, View, StyleSheet } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { FinancialCards } from "../components/FinancialCards";
import { Card } from "react-native-paper";
import { MaterialIcons } from "@expo/vector-icons";
import { colors } from "../constants/colors";
export default function FinancialScreen() {
    return (
        <SafeAreaView style={styles.container}>
                <Card style={styles.infoCard}>
                    <View style={{ flexDirection: "row", gap: 5 }}>
                        <MaterialIcons name="info-outline" color="blue" size={24} />
                        <Text style={styles.infoTitle}>Você sabia?</Text>
                    </View>
                    <Text style={styles.infoText}>
                        Aqui você pode baixar sua fatura, alterar o vencimento, solicitar desbloqueio de confiança e muito mais!
                    </Text>
                </Card>
                <FinancialCards />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 16,
        flex: 1,
        backgroundColor: colors.white.soft
    },
    infoCard: {
            backgroundColor: colors.white.DEFAULT,
            padding: 22,
            borderRadius: 12,
    },
    infoTitle: {
        fontSize: 18,
        fontWeight: "bold",
        color: "rgb(0, 0, 200)",
        marginBottom: 8,
    },
})