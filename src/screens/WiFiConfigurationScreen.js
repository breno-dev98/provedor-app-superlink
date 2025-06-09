import { View } from "react-native";
import { SecurityAndVisibility } from "../components/SecurityAndVisibility";
import { MyConnections } from "../components/MyConnections";

export default function WifiConfigurationScreen() {
    return (
        <View>
            <SecurityAndVisibility />
            <MyConnections />
        </View>
    )
}