import React, { useState } from "react";
import DropDownPicker from "react-native-dropdown-picker";
import { Section } from "./Section";
import { View, StyleSheet } from "react-native";
import { colors } from "../constants/colors";

export function MyAddress() {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState("1");
    const [items, setItems] = useState([
        { label: "Vila Bonfim, 102 \nEdson Queiroz, Fortaleza / CE", value: "1" },
        { label: "Rua das Flores, 88 \nCentro, Fortaleza / CE", value: "2" },
        { label: "Av. Beira Mar, 200 \nMeireles, Fortaleza / CE", value: "3" },
    ]);

    return (
        <Section title="Meus endereços">
            <View style={styles.dropdownWrapper}>
                <DropDownPicker
                    open={open}
                    value={value}
                    items={items}
                    setOpen={setOpen}
                    setValue={setValue}
                    setItems={setItems}
                    placeholder="Selecione um endereço"
                    style={styles.dropdown}
                    dropDownContainerStyle={styles.dropdownContainer}
                    textStyle={styles.textStyle}
                    labelStyle={{ fontWeight: "500" }}
                    arrowIconStyle={{ tintColor: colors.red.DEFAULT }}
                    tickIconStyle={{ tintColor: colors.green.DEFAULT }}
                />
            </View>
        </Section>
    );
}

const styles = StyleSheet.create({
    dropdownWrapper: {
        zIndex: 1000,
        height: 70
    },
    dropdown: {
        backgroundColor: colors.white.DEFAULT,
        borderColor: colors.gray.light,
        height: "100%",
        paddingHorizontal: 18
    },
    dropdownContainer: {
        backgroundColor: colors.white.DEFAULT,
        borderColor: colors.gray.light,
        paddingHorizontal: 8,

    },
    textStyle: {
        color: colors.gray.dark,
    },
});
