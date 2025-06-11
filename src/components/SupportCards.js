import { Card } from "react-native-paper";
// Assuming you have a 'Section' component, otherwise remove or define it
// import { Section } from "./Section";
import { MaterialIcons } from "@expo/vector-icons";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { colors } from "../constants/colors"; // Make sure colors path is correct

// If you don't have a Section component, you can use a simple View or fragment.
// For example: const Section = ({ children }) => <View style={{ flex: 1 }}>{children}</View>;
// Or just remove <Section> and </Section> tags from the return statement.
const Section = ({ children }) => <View style={{ flex: 1 }}>{children}</View>; // Placeholder if Section is not defined elsewhere


export function SupportCards() {
    const optionsCards = [
        { icon: "live-help", title: "Central de ajuda" },
        { icon: "call", title: "Ligamos para você" },
        { icon: "forum", title: "Fale conosco" },
        { icon: "chat", title: "Chat" },
        { icon: "email", title: "E-mail" },
        { icon: "share", title: "Redes Sociais" },
        { icon: "work", title: "Vagas de Emprego" },
        { icon: "history", title: "Histórico de atendimento" },
        { icon: "directions-off", title: "Rota inoperante" },
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
        width: "47%", // Adjust as needed for spacing
        backgroundColor: colors.white.DEFAULT,
        borderRadius: 10,
        elevation: 2, // Android shadow
        shadowColor: "#000", // iOS shadow
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
