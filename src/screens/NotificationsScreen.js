import React, { useState } from "react";
import {
    View,
    Text,
    StyleSheet,
    FlatList,
    TouchableOpacity,
} from "react-native";
import { Card } from "react-native-paper";
import { colors } from "../constants/colors";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const initialNotifications = [
    {
        id: "1",
        title: "Superlink",
        description: "Seu contrato foi atualizado.",
        date: "06/06/2025",
        read: false,
    },
    {
        id: "2",
        title: "Superlink",
        description: "Novo plano disponível para upgrade.",
        date: "05/06/2025",
        read: false,
    },
    {
        id: "3",
        title: "Superlink",
        description: "Lembrete: sua fatura vence amanhã.",
        date: "03/06/2025",
        read: false,
    },
    {
        id: "4",
        title: "Superlink",
        description: "Lembrete: sua fatura vence amanhã.",
        date: "03/06/2025",
        read: true,
    },
    {
        id: "5",
        title: "Superlink",
        description: "Lembrete: sua fatura vence amanhã.",
        date: "03/06/2025",
        read: true,
    },
    {
        id: "6",
        title: "Superlink",
        description: "Lembrete: sua fatura vence amanhã.",
        date: "03/06/2025",
        read: true,
    },
];

export default function NotificationsScreen() {
    
    const [notifications, setNotifications] = useState(initialNotifications);
    const navigation = useNavigation();

    const markAllAsRead = () => {
        const updated = notifications.map((n) => ({ ...n, read: true }));
        setNotifications(updated);
    };

    const openNotification = (item) => {
        console.log("Abrindo notificação:", item);
        navigation.push("NotificationDetail", { notification: item });
    };

    const renderItem = ({ item, index }) => (
        <TouchableOpacity
            onPress={() => openNotification(item)}
            style={[
                styles.notificationRow,
                {
                    backgroundColor:
                        index % 2 === 0 ? colors.gray.extraLight : "#fff",
                },
            ]}
        >
            <View style={styles.titleRow}>
                {!item.read && <View style={styles.unreadDot} />}
                <Text style={styles.notificationTitle}>{item.title}</Text>
            </View>
            <View style={styles.descriptionWrapper}>
                <Text style={styles.notificationDescription}>{item.description}</Text>
            </View>
            <Text style={styles.notificationDate}>{item.date}</Text>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <Card style={styles.infoCard}>
                <View style={{ flexDirection: "row", gap: 5 }}>
                    <MaterialIcons name="info-outline" color="blue" size={24} />
                    <Text style={styles.infoTitle}>Você sabia?</Text>
                </View>
                <Text style={styles.infoText}>
                    Aqui você pode visualizar todos os seus contratos, assinar e
                    ler novamente sempre que precisar.
                </Text>
            </Card>

            <Card style={styles.listCard}>
                <View style={styles.listHeader}>
                    <Text style={styles.listTitle}>Notificações</Text>
                    <TouchableOpacity onPress={markAllAsRead}>
                        <Text style={styles.markReadBtn}>Marcar todas como lida</Text>
                    </TouchableOpacity>
                </View>
                <FlatList
                    data={notifications}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}
                    scrollEnabled={false}
                />
            </Card>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 16,
        backgroundColor: "#F2F2F2",
        flex: 1,
    },
    infoCard: {
        backgroundColor: colors.gray.extraLight,
        padding: 22,
        marginBottom: 16,
        borderRadius: 12,
    },
    infoTitle: {
        fontSize: 18,
        fontWeight: "bold",
        color: "rgb(0, 0, 200)",
        marginBottom: 8,
    },
    infoText: {
        fontSize: 14,
        color: colors.gray.text,
    },
    listCard: {
        backgroundColor: colors.white.DEFAULT,
        borderRadius: 12,
        flex: 1,
    },
    listHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 16,
    },
    listTitle: {
        fontSize: 18,
        fontWeight: "bold",
        color: colors.gray.dark,
    },
    markReadBtn: {
        fontSize: 10,
        color: colors.gray.dark,
        fontWeight: "500",
        textDecorationLine: "underline",
    },
    notificationRow: {
        paddingVertical: 12,
        paddingHorizontal: 12,
    },
    titleRow: {
        flexDirection: "row",
        alignItems: "center",
        gap: 6,
        marginBottom: 4,
    },
    unreadDot: {
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: colors.red.DEFAULT,
    },
    notificationTitle: {
        fontSize: 16,
        fontWeight: "bold",
        color: colors.gray.dark,
    },
    descriptionWrapper: {
        paddingLeft: 16,
        marginBottom: 4,
    },
    notificationDescription: {
        fontSize: 14,
        color: colors.gray.text,
    },
    notificationDate: {
        fontSize: 12,
        color: colors.gray.text,
        textAlign: "right",
    },
});
