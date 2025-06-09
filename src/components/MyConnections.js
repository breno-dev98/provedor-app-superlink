import { Card } from "react-native-paper";
import { Section } from "./Section";
import { MaterialIcons } from "@expo/vector-icons";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { colors } from "../constants/colors";

export function MyConnections() {
    const optionsCards = [
        { icon: "share", title: "Compartilhar Wi-Fi" },
        { icon: "computer", title: "Dispositivos conectados" },
        { icon: "sync-alt", title: "Alterar canal da ONU" },
    ];

    return (
        <Section title="Minhas conexões">
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
