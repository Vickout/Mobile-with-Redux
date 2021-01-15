import React from 'react';
import { StyleSheet, KeyboardAvoidingView, Image, TouchableOpacity, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../store/ducks/auth';

export default function Logout({ navigation }) {

    const { isAuthenticated } = useSelector(state => state.auth);
    const dispatch = useDispatch();

    return (
        <KeyboardAvoidingView style={styles.container}>
            {isAuthenticated ? (
                <>
                    <Image
                        style={styles.logo}
                        source={{ uri: "https://aberturadecontas.eaglebankdigital.com/img/logo-eagle-azul.png" }}
                    />
                    <Text style={styles.text}>Bem-vindo ao Aplicativo do Eagle Bank</Text>
                    <TouchableOpacity
                        style={styles.signOutButton}
                        onPress={() => {
                            dispatch(logout())
                            navigation.navigate('SignIn')
                        }}>
                        <Text style={styles.signOutButtonText}>Sign Out</Text>
                    </TouchableOpacity>
                </>
            ) : (
                    <>
                        <Text style={styles.text}>Você é mesmo um usuário?</Text>
                        <TouchableOpacity
                            style={styles.signOutButton}
                            onPress={() => navigation.navigate('Begin')}
                        >
                            <Text style={styles.signOutButtonText}>Voltar</Text>
                        </TouchableOpacity>
                    </>
                )}
        </KeyboardAvoidingView>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'stretch',
        paddingHorizontal: 30,
        paddingBottom: 50,
    },

    logo: {
        width: 120,
        height: 150,
        resizeMode: 'contain',
        alignSelf: 'center',
    },

    text: {
        fontWeight: 'bold',
        fontSize: 30,
        textAlign: 'center',
        color: '#005590',
        marginBottom: 20
    },

    signOutButton: {
        backgroundColor: '#005590',
        borderWidth: 0,
        borderRadius: 4,
        padding: 16,
        marginTop: 30,
        marginHorizontal: 20,
        alignItems: 'center'
    },

    signOutButtonText: {
        fontWeight: 'bold',
        color: '#fff',
        fontSize: 15,
    },
});