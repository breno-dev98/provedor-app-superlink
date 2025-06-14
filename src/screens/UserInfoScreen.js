import React, { useContext } from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { Card, TextInput } from "react-native-paper";
import { colors } from "../constants/colors";
import { UserContext } from "../context/UserContext";

export default function UserInfoScreen() {
    const {user} = useContext(UserContext)
    return (
        <Card style={{ padding: 20, margin: 20, backgroundColor: colors.white.DEFAULT }}>
            <View style={{ gap: 16 }}>
                {/* Nome */}
                <TextInput
                    label="Nome"
                    value={`${user?.firstName} ${user?.lastName}`}
                    mode="outlined"
                    disabled
                    style={{ backgroundColor: colors.white.DEFAULT }}
                />

                {/* Documento */}
                <TextInput
                    label="Documento"
                    value="695.968.775-95"
                    mode="outlined"
                    disabled
                    style={{ backgroundColor: colors.white.DEFAULT }}
                />

                {/* Telefone */}
                <TextInput
                    label="Telefone"
                    value={user?.phone}
                    mode="outlined"
                    disabled
                    style={{ backgroundColor: colors.white.DEFAULT }}
                />

                {/* Telefone 2 */}
                <TextInput
                    label="Telefone 2"
                    value={user?.phone}
                    mode="outlined"
                    disabled
                    style={{ backgroundColor: colors.white.DEFAULT }}
                />

                {/* Email */}
                <TextInput
                    label="E-mail"
                    value={user?.email}
                    mode="outlined"
                    disabled
                    style={{ backgroundColor: colors.white.DEFAULT }}
                />

                {/* Botão Alterar Senha */}
                <TouchableOpacity
                    style={{
                        backgroundColor: colors.red.DEFAULT,
                        paddingVertical: 12,
                        borderRadius: 8,
                        alignItems: "center",
                        marginTop: 10
                    }}
                    onPress={() => console.log("Alterar Senha pressionado")}
                >
                    <Text style={{ color: colors.white.DEFAULT, fontWeight: "bold" }}>
                        Alterar Senha
                    </Text>
                </TouchableOpacity>
            </View>
        </Card>
    );
}
