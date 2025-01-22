import { Button, Image, Modal, SafeAreaView, StyleSheet, Text, View } from "react-native";


export default function Header() {
    return(
        <SafeAreaView style={styles.Header}>
            <Text style={styles.HeadText}>Workout's</Text>
            <View style={styles.Buttons}>
                <Button 
                title={"Workout's"}
                color='black'
                />
                <Button
                title={"Added workout's"}
                color='black'
                />
                <Button
                title={"Summary"}
                color='black'
                />
            </View>
        </SafeAreaView>
    )

    function WorkoutsButton() {

    };

    function AddedButton() {

    };

    function SummaryButton() {

    };
};

const styles = StyleSheet.create({
    Header: {
        backgroundColor: '#d6d0c1',
        height: 150
    },
    HeadText: {
        flex: 1,
        fontWeight: 'bold',
        justifyContent: 'center'
    },
    Buttons: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center'
    }
})