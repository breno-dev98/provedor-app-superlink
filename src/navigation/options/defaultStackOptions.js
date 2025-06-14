// src/navigation/options/defaultStackOptions.js
import { colors } from "../../constants/colors";
import { View, Platform } from "react-native";
// Importar as funções de responsividade do seu arquivo dimensions.js
import { vs, ms } from "../../utils/dimensions"; // Ajuste o caminho conforme a localização do seu dimensions.js

export const defaultStackOptions = {
    headerTintColor: colors.white.DEFAULT,
    headerTitleAlign: "center",
    headerBackground: () => (
        <View
            style={{
                flex: 1,
                backgroundColor: colors.red.DEFAULT,
                // Aplicar escala moderada para os raios da borda para que se adaptem
                borderBottomLeftRadius: ms(20),
                borderBottomRightRadius: ms(20),
                overflow: "hidden",
            }}
        />
    ),
    headerStyle: {
        backgroundColor: "transparent", // importante para não sobrepor o headerBackground
        // Usar a escala vertical para o height do cabeçalho
        height: Platform.OS === "android" ? vs(100) : vs(100), // aumenta a área para o radius ser visível
        elevation: 0, // remove sombra no Android
        shadowOpacity: 0, // remove sombra no iOS

    },
};
