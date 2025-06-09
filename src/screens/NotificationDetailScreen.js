import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useRoute } from "@react-navigation/native";
import { Card, Divider } from "react-native-paper";
import { colors } from "../constants/colors";

export default function NotificationDetailScreen() {
    const route = useRoute();
    const { notification } = route.params || {};

    if (!notification) {
        return (
            <View style={styles.container}>
                <Text style={styles.errorText}>Notificação não encontrada.</Text>
            </View>
        );
    }

    return (
        <View style={styles.container}>
                    <Text style={styles.title}>{notification.title}</Text>
            <Card style={styles.card}>
                <Card.Content>
                    <View style={{flexDirection: "row", justifyContent: "space-between"}}>
                        <View style={{flexDirection: "column"}}>
                            <Text style={styles.date}>ID</Text>
                            <Text style={{ color: colors.gray.dark }}>{notification.id}</Text>
                        </View>
                        <View>
                            <Text style={styles.date}>Data de recebimento</Text>
                            <Text style={{ textAlign: "right", color: colors.gray.dark }}>{notification.date}</Text>
                        </View>
                    </View>
                    <Divider style={{marginVertical: 10}} />
                    <View>
                        <Text style={styles.date}>Mensagem</Text>
                        <Text style={styles.description}>{notification.description}</Text>
                    </View>
                </Card.Content>
            </Card>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        backgroundColor: colors.gray.extraLight || "#f2f2f2",
    },
    card: {
        backgroundColor: colors.white.DEFAULT,
        borderRadius: 12,
        elevation: 2,
        padding: 8,
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        color: colors.gray.dark,
        marginBottom: 8,
    },
    date: {
        fontSize: 14,
        color: colors.gray.text,
        fontWeight: "500"
    },
    description: {
        fontSize: 14,
        color: colors.gray.dark,
    },
    errorText: {
        fontSize: 16,
        color: "red",
        textAlign: "center",
    },
});
