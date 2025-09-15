import React, { useState } from "react";
import { Text, View, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { Card } from "react-native-paper";
import { colors } from "../constants/colors";

export function NotificationDropdown() {
    const [notificacoes, setNotificacoes] = useState([
        { id: 1, title: "Novo Plano de Fibra", description: "Conheça o nosso novo plano de 500MB com instalação grátis.", read: false },
        { id: 2, title: "Manutenção Programada", description: "Teremos uma manutenção programada no dia 25/06 entre 02h e 05h da manhã.", read: false },
        { id: 3, title: "Atualização de Velocidade", description: "Sua velocidade foi automaticamente atualizada para 300MB sem custo adicional.", read: false },
        { id: 4, title: "Promoção por Tempo Limitado", description: "Assine agora o plano de 1GB e ganhe 2 meses grátis!", read: false },
        { id: 5, title: "Fatura Disponível", description: "Sua fatura referente ao mês de junho já está disponível no app.", read: false },
        { id: 6, title: "Suporte 24h", description: "Agora temos atendimento via WhatsApp 24 horas por dia para tirar suas dúvidas.", read: false },
        { id: 7, title: "Indique e Ganhe", description: "Indique amigos e ganhe desconto na sua mensalidade a cada nova instalação confirmada.", read: false },
    ]);

    const handleMarkAllAsRead = () => {
        const updated = notificacoes.map((item) => ({
            ...item,
            read: true,
        }));
        setNotificacoes(updated);
    };

    return (
        <View style={styles.dropdownContainer}>
            <Card style={styles.card}>
                {/* Header do Dropdown */}
                <View style={styles.headerRow}>
                    <Text style={styles.title}>Notificações</Text>
                    <TouchableOpacity onPress={handleMarkAllAsRead}>
                        <Text style={styles.markAll}>Marcar todas como lida</Text>
                    </TouchableOpacity>
                </View>

                {/* Lista de notificações com Scroll */}
                <ScrollView style={styles.scrollArea}>
                    {notificacoes.map((item, index) => (
                        <View
                            key={item.id}
                            style={{
                                flexDirection: "row",
                                gap: 10,
                                paddingHorizontal: 16,
                                paddingVertical: 24.2,
                                backgroundColor: index % 2 === 0 ? colors.gray.extraLight : colors.white.DEFAULT,
                            }}
                        >
                            <View
                                style={{
                                    width: 8,
                                    height: 8,
                                    backgroundColor: colors.red.DEFAULT,
                                    borderRadius: 50,
                                    marginTop: 10,
                                    display: item.read ? "none" : "flex",
                                }}
                            />
                            <View style={{ paddingRight: 16 }}>
                                <Text style={styles.notificationTitle}>{item.title}</Text>
                                <Text numberOfLines={2} style={styles.notificationDescription}>{item.description}</Text>
                            </View>
                        </View>
                    ))}
                </ScrollView>
            </Card>
        </View>
    );
}

const styles = StyleSheet.create({
    dropdownContainer: {
        backgroundColor: 'transparent',
        borderRadius: 12,
        overflow: 'hidden',
        maxHeight: 500,
    },
    card: {
        backgroundColor: '#fff',
        width: '100%',
        borderRadius: 5,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    headerRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottomWidth: 1,
        borderBottomColor: colors.gray.hover,
        padding: 16,
    },
    title: {
        fontSize: 16,
        color: '#333',
    },
    markAll: {
        fontSize: 10,
        color: colors.gray.text,
        textDecorationLine: "underline",
    },
    scrollArea: {
        maxHeight: 400, // Limite de altura do scroll
    },
    notificationTitle: {
        fontSize: 16,
        color: colors.black.DEFAULT,
        fontWeight: "500",
    },
    notificationDescription: {
        fontSize: 14,
        color: colors.gray.dark,
        fontWeight: "500",
    },
});
