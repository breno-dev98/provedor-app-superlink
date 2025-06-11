import { View } from "react-native";
import { MyAddress } from "../components/MyAddress";
import { InternetFibra } from "../components/InternetFibra";

export default function AssignmentScreen() {
    return (
        <View style={{ flex: 1 }}>
            <MyAddress />
            <InternetFibra />
        </View>
    );
}
