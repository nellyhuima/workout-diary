import { Alert, Button, Image, Modal, SafeAreaView, StyleSheet, Text, View } from "react-native";

export default function Header() {
    
    const workouts = () => Alert.alert("Workouts")
    const addedWorkouts = () => Alert.alert("Added workouts")
    const summary = () => Alert.alert("Summary")

    return(
        <SafeAreaView style={styles.Header}>
            <Text style={styles.HeadText}>
                Workout's
            </Text>
            <View style={styles.Buttons}>
                <Button
                onPress={workouts}
                title={"Workout's"}
                color='black'
                />
                <Button
                onPress={addedWorkouts}
                title={"Added workout's"}
                color='black'
                />
                <Button
                onPress={summary}
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
        height: 150,
        alignItems: 'center'
    },
    HeadText: {
        textAlign: 'center',
        paddingTop: '40',
        fontSize: 30
    },
    Buttons: {
        flexDirection: 'row',
        justifyContent: 'center',
        paddingTop: 15
    }
})