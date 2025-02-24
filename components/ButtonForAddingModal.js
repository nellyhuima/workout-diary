import { useState } from "react";
import { Alert, Modal, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { PaperProvider } from "react-native-paper";
import Add_new_components from "./Add_new_components";


export default function ButtonForAddingModal() {

    const [modalVisible, setModalVisible] = useState(false);
    const addition = () => Alert.alert("Added successfully");

    const openModal = () => {
        setModalVisible(true);
    };

    const closeModal = () => {
        setModalVisible(false);
    };

    return(
        <View style={styles.content}>
            <TouchableOpacity style={styles.openButton} onPress={openModal}>
                <Text style={styles.openButtonText}>Add new workout</Text>
            </TouchableOpacity>

            <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={closeModal}>
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <Add_new_components/>
                        <View style={styles.AddAndClose}>
                            <TouchableOpacity style={styles.Closing} onPress={closeModal}>
                                <Text>Close</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.Adding} onPress={addition}>
                                <Text>Add</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    content: {
        alignItems: 'center'
    },
    openButton: {
        backgroundColor: '#aecacd',
        borderRadius: 5,
        padding: 10,
        width: 200,
        marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    openButtonText: {
        color: '#f2f0e4',
        fontWeight: 'bold',
        textAlign: 'center'
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 5},
        shadowOpacity: 0.3,
        shadowRadius: 10
    },
    modalContent: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 8,
        width: '80%',
        height: 350
    },
    AddAndClose: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    Adding: {
        marginLeft: 10,
        backgroundColor: 'grey',
        padding: 10,
        borderRadius: 5
    },
    Closing: {
        marginRight: 10,
        backgroundColor: 'grey',
        padding: 10,
        borderRadius: 5
    }
});