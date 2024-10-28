import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet, ImageBackground, ScrollView, TextInput, Modal } from 'react-native';

const Profile = () => {
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [date, setDate] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [salary, setSalary] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [zip, setZip] = useState("");
    const [position, setPosition] = useState("");
    const [isModalVisible, setIsModalVisible] = useState(false); // State for modal visibility

    const handleSave = () => {
        // Save the profile data here if needed
        setIsModalVisible(true); // Show the modal
    };

    const closeModal = () => {
        setIsModalVisible(false); // Hide the modal
    };

    return (
        <ScrollView style={styles.scrollContainer}>
            <View style={styles.container}>
                <ImageBackground source={require('../../assets/banner_login.png')} style={styles.imageBackground}>
                    <TouchableOpacity style={styles.backButton}>
                        {/* Placeholder for a back icon */}
                    </TouchableOpacity>
                </ImageBackground>
                
                <View style={styles.bottomContainer}>
                    <Image source={require('../../assets/image 41 (2).png')} style={styles.profileImage} />
                    
                    <Text style={styles.infoText}>Information</Text>
                    
                    <View style={styles.rowContainer}>
                        <TextInput style={styles.input} placeholder="Name" value={name} onChangeText={n => setName(n)} />
                        <TextInput style={styles.input} placeholder="Surname" value={surname} onChangeText={n => setSurname(n)} />
                    </View>
                    
                    <TextInput style={styles.fullWidthInput} placeholder="Email" value={email} onChangeText={n => setEmail(n)} />
                    <TextInput style={styles.fullWidthInput} placeholder="Password" value={password} onChangeText={n => setPassword(n)} secureTextEntry />

                    <View style={styles.rowContainer}>
                        <TextInput style={styles.input} placeholder="Date of Birth" value={date} onChangeText={n => setDate(n)} keyboardType="numeric" maxLength={10} />
                        <TextInput style={styles.input} placeholder="Phone" value={phone} onChangeText={n => setPhone(n)} />
                    </View>

                    <View style={styles.rowContainer}>
                        <TextInput style={styles.input} placeholder="Address" value={address} onChangeText={n => setAddress(n)} />
                        <TextInput style={styles.input} placeholder="Salary" value={salary} onChangeText={n => setSalary(n)} />
                    </View>

                    <View style={styles.rowContainer}>
                        <TextInput style={styles.input} placeholder="City" value={city} onChangeText={n => setCity(n)} />
                        <TextInput style={styles.input} placeholder="State" value={state} onChangeText={n => setState(n)} />
                    </View>

                    <View style={styles.rowContainer}>
                        <TextInput style={styles.input} placeholder="Zip" value={zip} onChangeText={n => setZip(n)} />
                        <TextInput style={styles.input} placeholder="Position" value={position} onChangeText={n => setPosition(n)} />
                    </View>

                    <View style={styles.buttonContainer}>
                        <TouchableOpacity style={styles.button}>
                            <Text style={styles.buttonText}>Cancel</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button} onPress={handleSave}>
                            <Text style={styles.buttonText}>Save</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                {/* Modal for success message */}
                <Modal
                    visible={isModalVisible}
                    transparent
                    animationType="fade"
                    onRequestClose={closeModal}
                >
                    <View style={styles.modalOverlay}>
                        <View style={styles.modalContent}>
                            <Text style={styles.modalText}>Profile Edited</Text>
                            <Text style={styles.modalText1}>Profile edited successfully</Text>
                            <TouchableOpacity onPress={closeModal} style={styles.modalButton}>
                                <Text style={styles.modalButtonText}>Continue</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    scrollContainer: { flex: 1, backgroundColor: 'white' },
    container: { flex: 1 },
    imageBackground: { height: 230, justifyContent: 'center', marginTop: 20 },
    backButton: { position: 'absolute', top: 40, left: 20, height: 32, width: 32 },
    bottomContainer: { padding: 20, borderRadius: 15, backgroundColor: '#fff', marginTop: -40 },
    profileImage: { width: 150, backgroundColor: '#8a19d6', height: 150, borderRadius: 75, alignSelf: 'center', marginTop: -75, borderWidth: 4, borderColor: '#fff' },
    infoText: { fontSize: 22, fontWeight: 'bold', marginBottom: 20, alignSelf: 'flex-start' },
    rowContainer: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 15 },
    input: { width: '48%', borderWidth: 1, borderColor: 'gray', borderRadius: 10, padding: 12, backgroundColor: 'white' },
    fullWidthInput: { width: '100%', borderWidth: 1, borderColor: 'gray', borderRadius: 10, padding: 12, backgroundColor: 'white', marginBottom: 15 },
    buttonContainer: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 },
    button: { width: '48%', backgroundColor: '#8a19d6', borderRadius: 10, padding: 15, alignItems: 'center' },
    buttonText: { color: '#fff', fontWeight: 'bold' },
    modalOverlay: { flex: 1, backgroundColor: 'rgba(0,0,0,0.5)', justifyContent: 'center', alignItems: 'center' },
    modalContent: { width: 300, padding: 20, backgroundColor: 'white', borderRadius: 10, alignItems: 'center' },
    modalText: { fontSize: 18, fontWeight: 'bold', marginBottom: 20 },
    modalText1: { fontSize: 10,  marginBottom: 20 },
    modalButton: { padding: 10, backgroundColor: '#8a19d6', borderRadius: 5, width: '50%', alignItems: 'center' },
    modalButtonText: { color: '#fff', fontWeight: 'bold' },
});

export default Profile;
