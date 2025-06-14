import { MaterialIcons } from "@expo/vector-icons";
import React, { useContext } from "react";
import { Text, View, TouchableOpacity, Pressable } from "react-native";
import { Card, Divider } from "react-native-paper";
import { colors } from "../constants/colors";
import { useNavigation } from "@react-navigation/native";
import { useAuth } from '../context/AuthContext';
import { UserContext, UserProvider } from "../context/UserContext";

export default function Profile() {
    const navigation = useNavigation();
    const { logout } = useAuth();
    const { user } = useContext(UserContext)
    const options = [
        { icon: "settings", title: "Meus dados", description: "Visualize ou edite seus dados", route: "MeusDados" },
        { icon: "notifications", title: "Minhas Notificações", description: "Acompanhe suas notificações", route: "Notificacoes" },
        { icon: "description", title: "Meus Contratos", description: "Contratos e pendências de assinatura", route: "Contratos" },
        { icon: "assignment", title: "Política de Privacidade", description: "Veja nossa política de privacidade", route: "Privacidade" },
        { icon: "info", title: "Sobre", description: "Sobre desenvolvimento", route: "Sobre" },
    ];

    const handleLogout = () => {
        logout(); 
    };

    return (
        <View style={{ padding: 22, flex: 1, gap: 20 }}>
            {/* User Info */}
            <Card style={{ padding: 18, backgroundColor: colors.white.DEFAULT }}>
                <View style={{ flexDirection: "row", alignItems: "center", gap: 16 }}>
                    <View style={{
                        backgroundColor: colors.white.DEFAULT,
                        borderWidth: 1,
                        borderColor: colors.black.DEFAULT,
                        borderRadius: 50,
                        width: 70,
                        height: 70,
                        justifyContent: "center",
                        alignItems: "center"
                    }}>
                        <MaterialIcons name="person" size={40} color={colors.red.DEFAULT} />
                    </View>
                    <View>
                        <Text style={{ fontSize: 16, fontWeight: "bold" }}>{`${user?.firstName} ${user?.lastName}`}</Text>
                        <Text>695.968.775-95</Text>
                    </View>
                </View>
            </Card>

            {/* Options */}
            <Card style={{ padding: 14, backgroundColor: colors.white.DEFAULT }}>
                {options.map((o, i) => (
                    <View key={i}>
                        <TouchableOpacity
                            onPress={() => navigation.navigate(o.route)}
                            activeOpacity={0.7}
                        >
                            <View style={{ flexDirection: "row", alignItems: "center", gap: 16, paddingVertical: 10 }}>
                                <View style={{
                                    borderRadius: 50,
                                    width: 50,
                                    height: 50,
                                    justifyContent: "center",
                                    alignItems: "center"
                                }}>
                                    <MaterialIcons name={o.icon} size={30} color={colors.red.DEFAULT} />
                                </View>

                                <View style={{ flex: 1 }}>
                                    <Text style={{ fontSize: 14, fontWeight: "bold" }}>{o.title}</Text>
                                    <Text style={{ fontSize: 12 }}>{o.description}</Text>
                                </View>

                                <MaterialIcons name="arrow-forward-ios" size={20} color={colors.red.DEFAULT} />
                            </View>
                        </TouchableOpacity>

                        {/* Divider apenas se não for o último item */}
                        {i < options.length - 1 && <Divider style={{ marginVertical: 4 }} />}
                    </View>
                ))}
            </Card>
            <View style={{ marginHorizontal: "auto" }}>
                <Pressable onPress={handleLogout}>
                    <Text style={{ color: colors.red.DEFAULT, fontWeight: 500 }}>Sair</Text>
                </Pressable>
            </View>
        </View>
    );
}
