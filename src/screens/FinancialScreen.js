import { Text, View, StyleSheet, ScrollView } from "react-native"; // Importe ScrollView
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context"; // Importe SafeAreaView
import { FinancialCards } from "../components/FinancialCards";
import { Card } from "react-native-paper";
import { MaterialIcons } from "@expo/vector-icons";
import { colors } from "../constants/colors";

export default function FinancialScreen() {
    return (
        // Envolver com SafeAreaView para respeitar as áreas seguras do dispositivo
        <View style={styles.container}>
            {/* Adicionar ScrollView para permitir rolagem e aplicar background */}
            <ScrollView
                style={styles.scrollView} // Aplica flex: 1 e background aqui
                contentContainerStyle={styles.scrollViewContent}
                showsVerticalScrollIndicator={false} // Oculta a barra de rolagem
            >
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
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // O background color agora vai para o SafeAreaView para preencher a tela toda
        backgroundColor: colors.white.soft
    },
    scrollView: {
        flex: 1, // Faz o ScrollView preencher todo o espaço disponível
        paddingHorizontal: 16, // Move o padding horizontal para o ScrollView
    },
    scrollViewContent: {
        flexGrow: 1, // Permite que o conteúdo do ScrollView se expanda
        paddingVertical: 10, // Adiciona um pequeno padding vertical, se desejar
    },
    infoCard: {
        backgroundColor: colors.white.DEFAULT,
        padding: 22,
        borderRadius: 12,
        marginBottom: 20, // Adiciona margem para separar do próximo componente
    },
    infoTitle: {
        fontSize: 18,
        fontWeight: "bold",
        color: "rgb(0, 0, 200)", // Mantenha o azul original ou ajuste conforme seus colors
        marginBottom: 8,
    },
    infoText: {
        fontSize: 14,
        color: colors.gray.dark,
    },
});
