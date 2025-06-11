import { Text, View, StyleSheet, ScrollView } from "react-native";
import React from "react";
import { Card } from "react-native-paper";
import { MaterialIcons } from "@expo/vector-icons";
import { colors } from "../constants/colors";
import { SupportCards } from "../components/SupportCards";

export default function SupportScreen() {
    return (
            <ScrollView
                style={styles.scrollView} // Adicionado estilo direto ao ScrollView
                contentContainerStyle={styles.scrollViewContent}
                showsVerticalScrollIndicator={false}
            >
                <Card style={styles.infoCard}>
                    <View style={{ flexDirection: "row", gap: 5 }}>
                        <MaterialIcons name="info" color="rgb(0,80,230)" size={24} />
                        <Text style={styles.infoTitle}>Precisa de ajuda?</Text>
                    </View>
                    <Text style={styles.infoText}>
                        Encontre as respostas para suas dúvidas e entre em contato conosco pelos canais disponíveis.
                    </Text>
                </Card>
                <SupportCards />
            </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scrollView: {
        flex: 1,
        backgroundColor: colors.white.soft,
        paddingHorizontal: 16, 
    },
    scrollViewContent: {
        flexGrow: 1,
        paddingVertical: 10,
    },
    infoCard: {
        backgroundColor: colors.white.DEFAULT,
        padding: 22,
        borderRadius: 12,
        marginBottom: 20,
    },
    infoTitle: {
        fontSize: 18,
        fontWeight: "bold",
        color: colors.gray.text,
        marginBottom: 8,
    },
    infoText: {
        fontSize: 14,
        color: colors.gray.dark,
    },
});
