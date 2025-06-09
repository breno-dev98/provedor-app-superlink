import React from "react";
import { Section } from "./Section";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { Card } from "react-native-paper";
import { colors } from "../constants/colors";
import { FontAwesome6 } from "@expo/vector-icons";

export default function YourInvoice() {
    return (
        <Section title="Sua Fatura">
            <View style={styles.container}>
                <Card style={styles.backgroundCard} />
                <Card style={styles.foregroundCard}>
                    <Card.Content>
                        {/* Linha principal com ícone, informações e vencimento */}
                        <View style={styles.gridRow}>
                            {/* Coluna 1: Ícone */}
                            <View style={styles.iconColumn}>
                                <View style={styles.iconWrapper}>
                                    <FontAwesome6 name="receipt" size={20} color={colors.white.DEFAULT} />
                                </View>
                            </View>

                            {/* Colunas 2 a 4: Informações principais */}
                            <View style={styles.infoColumn}>
                                <Text style={styles.price}>R$ 325,40</Text>
                                <Text style={styles.status}>
                                    <Text style={{ color: colors.green.DEFAULT }}>em aberto</Text>
                                </Text>
                                <Text style={styles.billingAddress}>Rua F, 500 - Aldeota - Fortaleza/CE, 60598-695</Text>
                            </View>

                            {/* Colunas 5 e 6: Data de vencimento */}
                            <View style={styles.dateColumn}>
                                <Text style={styles.dueDate}>10/06/2025</Text>
                                <Text style={styles.dueLabel}>Vencimento</Text>
                            </View>
                        </View>

                        {/* Botão abaixo do conteúdo */}
                        <View style={styles.buttonWrapper}>
                            <TouchableOpacity style={styles.button}>
                                <Text style={styles.buttonText}>Pagar Fatura</Text>
                                <FontAwesome6 name="arrow-right" style={styles.buttonIcon} />
                            </TouchableOpacity>
                        </View>
                    </Card.Content>
                </Card>
            </View>
        </Section>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingBottom: 8,
        position: "relative",
    },
    backgroundCard: {
        backgroundColor: colors.red.dark,
        width: "100%",
        height: "100%",
        borderRadius: 12,
        position: "absolute",
        top: 0,
        left: 0,
    },
    foregroundCard: {
        backgroundColor: colors.white.DEFAULT,
        width: "97.5%",
        alignSelf: "flex-end",
        borderRadius: 12,
        zIndex: 1,
        elevation: 4,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.08,
        shadowRadius: 4,
        paddingBottom: 16,
        borderTopLeftRadius: 2,
        borderBottomLeftRadius: 2,
    },
    gridRow: {
        flexDirection: "row",
        alignItems: "flex-start",
        gap: 8,
        marginBottom: 16,
    },
    iconColumn: {
        flex: 1,
        alignItems: "center",
        justifyContent: "flex-start",
    },
    infoColumn: {
        flex: 3,
        justifyContent: "flex-start",
        gap: 4,
    },
    price: {
        fontSize: 18,
        fontWeight: "bold",
        color: colors.gray.dark,
    },
    status: {
        fontSize: 12,
        color: colors.gray.text,
        backgroundColor: colors.gray.hover,
        borderRadius: 5,
        textAlign: "center",
        paddingHorizontal: 24,
        paddingVertical: 2,
        alignSelf: "flex-start",
    },
    billingAddress: {
        fontSize: 13,
        color: colors.gray.dark,
    },
    dateColumn: {
        flex: 2,
        alignItems: "flex-end",
        justifyContent: "flex-start",
    },
    dueLabel: {
        fontSize: 12,
        color: colors.gray.text,
    },
    dueDate: {
        fontSize: 14,
        fontWeight: "bold",
        color: colors.red.DEFAULT,
    },
    buttonWrapper: {
        width: "100%",
        marginTop: 8,
    },
    button: {
        backgroundColor: colors.red.DEFAULT,
        paddingVertical: 10,
        borderRadius: 8,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: 6,
    },
    buttonText: {
        color: colors.white.DEFAULT,
        fontWeight: "bold",
        fontSize: 14,
    },
    buttonIcon: {
        color: colors.white.DEFAULT,
    },
    iconWrapper: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: colors.red.light,
        justifyContent: "center",
        alignItems: "center",
    },
    
});
