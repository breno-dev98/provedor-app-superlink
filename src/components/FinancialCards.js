import { Card } from "react-native-paper";
import { Section } from "./Section";
import { MaterialIcons } from "@expo/vector-icons";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { colors } from "../constants/colors";

export function FinancialCards() {
    const optionsCards = [
        { icon: "receipt", title: "Minhas \nfaturas" },
        { icon: "calendar-month", title: "Alterar vencimento" },
        { icon: "paid", title: "Pagamento automático" },
        { icon: "access-time-filled", title: "Histórico de Transações" },
        { icon: "wallet", title: "Declaração de débito" },
    ];

    return (
        <Section>
            <View style={styles.cardWrapper}>
                {optionsCards.map((option, index) => (
                    <Card key={index} style={styles.card}>
                        <TouchableOpacity style={styles.innerCard} onPress={() => alert(`Função ${option.title} em desenvolvimento..`)}>
                            <MaterialIcons
                                name={option.icon}
                                color={colors.red.DEFAULT}
                                size={30}
                                style={styles.icon}
                            />
                            <Text style={styles.cardText}>{option.title}</Text>
                        </TouchableOpacity>
                    </Card>
                ))}
            </View>
        </Section>
    );
}

const styles = StyleSheet.create({
    cardWrapper: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
        gap: 10,
    },
    card: {
        width: "47%",
        backgroundColor: colors.white.DEFAULT,
        marginBottom: 12,
        borderRadius: 10,
        elevation: 2, // sombra Android
        shadowColor: "#000", // sombra iOS
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
    },
    innerCard: {
        padding: 20,
    },
    icon: {
        marginBottom: 8,
    },
    cardText: {
        color: colors.gray.dark,
        fontWeight: "500",
        fontSize: 14,
    },
});
