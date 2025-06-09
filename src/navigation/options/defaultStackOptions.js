// src/navigation/options/defaultStackOptions.js
import { colors } from "../../constants/colors";
import { View, Platform } from "react-native";

export const defaultStackOptions = {
    headerTintColor: colors.white.DEFAULT,
    headerTitleAlign: "center",
    headerBackground: () => (
        <View
            style={{
                flex: 1,
                backgroundColor: colors.red.DEFAULT,
                borderBottomLeftRadius: 20,
                borderBottomRightRadius: 20,
                overflow: "hidden",
            }}
        />
    ),
    headerStyle: {
        backgroundColor: "transparent", // importante para não sobrepor o headerBackground
        height: Platform.OS === "android" ? 100 : 120, // aumenta a área para o radius ser visível
        elevation: 0, // remove sombra no Android
        shadowOpacity: 0, // remove sombra no iOS
    },
};
