// NavTab.js
import React from "react"; // Removido useState e useEffect pois não são mais necessários para nomeRotaAtual
import { StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useNavigationState } from "@react-navigation/native"; // Importado useNavigationState

import HomeStack from "../routes/HomeStack";
import AssignmentStack from "../routes/AssignmentStack";
import { colors } from "../constants/colors";
import FinancialStack from "../routes/FinancialStack";
import SupportStack from "../routes/SupportStack"; // Certifique-se de que o caminho está correto

const Tab = createBottomTabNavigator();

/*
 Helper para obter o nome da rota mais profunda no estado de navegação.
 É útil para identificar a tela atualmente visível, mesmo que esteja dentro de um Stack Navigator aninhado.
 */
function getActiveRouteName(state) {
    if (!state || !state.routes || state.routes.length === 0) {
        return null;
    }

    const route = state.routes[state.index];

    // Se a rota tem um estado aninhado (ex: um Stack Navigator), recursivamente busca a rota ativa
    if (route.state) {
        return getActiveRouteName(route.state);
    }

    return route.name; // Retorna o nome da rota mais profunda
}


const screens = [
    {
        name: "Inicio", // Nome da aba
        component: HomeStack,
        icon: "home",
    },
    {
        name: "Planos", // Nome da aba
        component: AssignmentStack,
        icon: "assignment",
    },
    {
        name: "Finanças", // Nome da aba
        component: FinancialStack,
        icon: "attach-money",
    },
    {
        name: "Suporte", // Nome da aba
        component: SupportStack,
        icon: "support-agent",
    },
];

// Componente NavTab - agora com a lógica de visibilidade condicional da barra de abas
export default function NavTab() {
    // Array de nomes das TELAS RAIZ das Stacks para as quais a TabBar deve ser visível.
    // Isso garante que a TabBar apareça quando você retorna para a tela principal de cada aba.
    const rotasPrincipaisVisiveis = ["HomeScreen", "AssignmentScreen", "FinancialScreen", "SupportScreen"];

    // useNavigationState permite acessar o estado do navegador pai (neste caso, o Tab Navigator)
    // O nomeRotaAtual é AGORA DERIVADO DIRETAMENTE do navigationState.
    // Se navigationState ainda não estiver disponível (null), ele usa o primeiro item de rotasPrincipaisVisiveis como fallback.
    const navigationState = useNavigationState(state => state);
    const nomeRotaAtual = navigationState
        ? getActiveRouteName(navigationState)
        : (rotasPrincipaisVisiveis[0] || null); // Fallback para a primeira rota visível
    
    // --- ADICIONE ESTE CONSOLE.LOG ---
    console.log("Nome da Rota Atual:", nomeRotaAtual, " | TabBar Visível:", rotasPrincipaisVisiveis.includes(nomeRotaAtual));
    // --- FIM DO CONSOLE.LOG ---

    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ color }) => {
                    const screen = screens.find(s => s.name === route.name);
                    return (
                        <MaterialIcons
                            name={screen?.icon || "question"}
                            size={30}
                            color={color}
                        />
                    );
                },
                tabBarActiveTintColor: colors.red.DEFAULT,
                tabBarInactiveTintColor: colors.gray.text,
                tabBarLabelStyle: styles.tabBarLabel,
                tabBarStyle: {
                    ...styles.tabBar,
                    // A TabBar será exibida ('flex') se a rota atual (nome da tela raiz da Stack)
                    // for uma das rotas principais visíveis. Caso contrário, será ocultada ('none').
                    display: rotasPrincipaisVisiveis.includes(nomeRotaAtual) ? "flex" : "none",
                },
                headerShown: false,
            })}
        >
            {/* Mapeia o array de telas para criar componentes Tab.Screen */}
            {screens.map(({ name, component }) => (
                <Tab.Screen
                    key={name}
                    name={name}
                    component={component}
                />
            ))}
        </Tab.Navigator>
    );
}

const styles = StyleSheet.create({
    tabBar: {
        height: 80,
        paddingTop: 10,
        backgroundColor: colors.white.DEFAULT,

        shadowColor: "#000",
        shadowOffset: { width: 0, height: -2 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 5,
    },
    tabBarLabel: {
        fontSize: 12,
        marginBottom: 5,
    },
});
