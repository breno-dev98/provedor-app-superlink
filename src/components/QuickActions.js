import React from "react";
import { View, Text } from "react-native";
import { Section } from "./Section"; // ajuste o caminho conforme necessário
import { ActionCard } from "./ActionCard";
import { useNavigation } from "@react-navigation/native";

export function QuickActions() {
    const navigation = useNavigation();
    const screens = [
        {icon: 'wifi', label: 'Acessar meu Wifi', onPress: () => navigation.navigate("Wifi")},
        {icon: 'share-2', label: 'Compartilhar WiFi', onPress: () => navigation.navigate("Wifi")},
        {icon: 'users', label: 'Indique um amigo', onPress: () => navigation.navigate("Wifi")},
        {icon: 'headphones', label: 'Central de Ajuda', onPress: () => navigation.navigate("Wifi")},
    ]
    return (
        <Section title="Ações Rápidas">
            <View style={{flexDirection: "row", justifyContent: "space-around"}}>
                {screens.map((screen, index) => (
                    <ActionCard key={index} icon={screen.icon} label={screen.label} onPress={screen.onPress} />
                ))}
            </View>
        </Section>
    );
}
