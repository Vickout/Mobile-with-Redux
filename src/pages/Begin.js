import React from 'react';
import { TouchableOpacity, Text, Image, KeyboardAvoidingView, StyleSheet, View } from 'react-native';

export default function Begin() {
    return (
        <KeyboardAvoidingView style={styles.container}>
            <Image
                style={styles.logo}
                source={{ uri: "https://aberturadecontas.eaglebankdigital.com/img/logo-eagle-azul.png" }}
            />
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.signInButton} onPress={() => { }}>
                    <Text style={styles.signInTextButton}>Sign In</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.signUpButton} onPress={() => { }}>
                    <Text style={styles.signUpTextButton}>Sign Up</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'stretch',
        paddingBottom: 70,
    },

    logo: {
        width: 120,
        height: 150,
        resizeMode: 'contain',
        alignSelf: 'center',
    },

    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },

    signInButton: {
        width: 150,
        backgroundColor: '#fff',
        borderWidth: 2,
        borderColor: '#005590',
        borderRadius: 4,
        padding: 16,
        marginTop: 15,
        alignItems: 'center'
    },

    signInTextButton: {
        fontWeight: 'bold',
        color: '#005590',
        fontSize: 15,
    },

    signUpButton: {
        width: 150,
        backgroundColor: '#005590',
        borderWidth: 0,
        borderRadius: 4,
        padding: 16,
        marginTop: 15,
        alignItems: 'center'
    },

    signUpTextButton: {
        fontWeight: 'bold',
        color: '#fff',
        fontSize: 15,
    },
});