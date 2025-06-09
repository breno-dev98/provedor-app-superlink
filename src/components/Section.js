import React from "react";
import { View, Text, StyleSheet } from "react-native";

export function Section({ title, children }) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <View style={styles.content}>
                {children}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 12,
        paddingHorizontal: 16,
    },
    title: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 8,
    },
    content: {
        // Espaço reservado para conteúdo flexível (pode ajustar conforme layout desejado)
    },
});
