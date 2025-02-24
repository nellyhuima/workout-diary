import { useState } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { Modal, Text } from "react-native-paper";

export default function ButtonForViewingWorkouts() {

    const [modalVisible, setModalVisible] = useState(false);

    const openModal = () => {
        setModalVisible(true);
    };

    const closeModal = () => {
        setModalVisible(false);
    };

    return(
        <View style={styles.content}>
            <TouchableOpacity style={styles.openButton} onPress={openModal}>
                <Text style={styles.openButtonText}>View existing workout's</Text>
            </TouchableOpacity>

            <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={closeModal}>
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <View style={styles.AddAndClose}>
                            <TouchableOpacity style={styles.Closing} onPress={closeModal}>
                                <Text>Close</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.Adding}>
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
})