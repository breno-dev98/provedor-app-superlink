import { View } from "react-native";
import Header from "../components/Header";
import { CardStatusConnection } from "../components/CardStatusConnection";
import { QuickActions } from "../components/QuickActions";
import YourInvoince from "../components/YourInvoince";

export default function HomeScreen() {
    return (
        <View>
            <Header />
            <CardStatusConnection />
            <QuickActions />
            <YourInvoince />
        </View>
    )
}