import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {defaultStackOptions} from "../navigation/options/defaultStackOptions"
import FinancialScreen from "../screens/FinancialScreen";

const Stack = createNativeStackNavigator();

export default function FinancialStack() {
    return (
        <Stack.Navigator
            screenOptions={defaultStackOptions}
        >

            <Stack.Screen name="FinancialScreen" component={FinancialScreen} options={{ title: "Finanças" }} />

        </Stack.Navigator>
    );
}
