import { SafeAreaView } from "react-native-safe-area-context";
import { View } from "react-native";
import { MyAddress } from "../components/MyAddress";
import { InternetFibra } from "../components/InternetFibra";

export default function AssignmentScreen() {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <MyAddress />
            <InternetFibra />
        </SafeAreaView>
    );
}
