import { Alert, Button, SafeAreaView, StyleSheet, Text, View } from "react-native";

export default function Header() {
    
    const workouts = () => Alert.alert("Workout's")
    const statistics = () => Alert.alert("Statistics")

    return(
        <SafeAreaView style={styles.Header}>
            <Text style={styles.HeadText}>
                Workout's
            </Text>
            <View style={styles.ButtonContainer}>
                <View style={styles.Buttons}>
                    <Button
                    onPress={workouts}
                    title={"Workout's"}
                    color='#f2f0e4'
                    />
                </View>
                <View style={styles.Buttons}>
                    <Button
                    onPress={statistics}
                    title={"Statistics"}
                    color='#f2f0e4'
                    />
                </View>
            </View>
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    Header: {
        backgroundColor: '#87A19E',
        height: 150,
        alignItems: 'center'
    },
    HeadText: {
        color: '#f2f0e4',
        textAlign: 'center',
        paddingTop: '40',
        fontSize: 30
    },
    ButtonContainer: {
        flexDirection: 'row',
        gap: 10
    },
    Buttons: {
        backgroundColor: '#aecacd',
        marginTop: 15,
        borderRadius: 5
    }
})