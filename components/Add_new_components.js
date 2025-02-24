import { useState } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import InputSpinner from "react-native-input-spinner";
import { Button, PaperProvider, Text } from "react-native-paper";
import { Dropdown } from "react-native-paper-dropdown";

export default function Add_new_components() {

const SPORTS = [
        { label: 'Select', value: 'Select'},
        { label: 'Running', value: 'Running'},
        { label: 'Swimming', value: 'Swimming'},
        { label: 'Walking', value: 'Walking'}
    ];

    const [sport, setSport] = useState(SPORTS[0].value);
    const [time, setTime] = useState(0);
    const [km, setKm] = useState(0);
    
    return (
        <PaperProvider>
            <View>
                <View style={styles.Choices}>
                    <Dropdown
                    options={SPORTS}
                    onSelect={setSport}
                    value={sport}
                    />
                </View>
                <View style={styles.Timer}>
                    <Text>Timer (Min)</Text>
                    <InputSpinner
                    placeholder='0'
                    onChange={setTime}
                    value={time}
                    />
                </View>
                <View style={styles.Distance}>
                <Text>Distance (Km)</Text>
                    <InputSpinner
                    placeholder='0'
                    onChange={setKm}
                    value={km}
                    />
                </View>
                <View>
                    
                </View>
            </View>
        </PaperProvider>
    )
}


const styles = StyleSheet.create({
    Choices: {
        marginTop: 20
    },
   Timer: {
    marginTop: 20,
    alignItems: 'center'
   },
   Distance: {
    marginTop: 20,
    alignItems: 'center'
   }
});
