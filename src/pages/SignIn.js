import React, { useRef } from 'react';
import { TouchableOpacity, Text, Image, KeyboardAvoidingView, StyleSheet } from 'react-native';
import { Form } from '@unform/mobile';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';

import Input from '../components/Input';
import { authLogin } from '../store/fetchActions';

export default function SignIn({ navigation }) {
    const formRef = useRef(null);

    const dispatch = useDispatch();

    async function handleSubmit(data, { reset }) {
        try {
            const schema = Yup.object().shape({
                email: Yup.string().email('Digite um e-mail válido').required('O e-mail é obrigatório!'),
                password: Yup.string().min(4, 'No mínimo 4 caracteres').required('A senha é obrigatória!')
            });

            await schema.validate(data, {
                abortEarly: false,
            })

            formRef.current.setErrors({});

            dispatch(authLogin(data));

            reset();

            navigation.navigate('Main');

        } catch (err) {
            if (err instanceof Yup.ValidationError) {
                const errorMessages = {};

                err.inner.forEach(error => {
                    errorMessages[error.path] = error.message;
                })

                formRef.current.setErrors(errorMessages);
            }
        }
    }

    return (
        <KeyboardAvoidingView style={styles.container}>
            <Form ref={formRef} onSubmit={handleSubmit}>
                <Image
                    style={styles.logo}
                    source={{ uri: "https://aberturadecontas.eaglebankdigital.com/img/logo-eagle-azul.png" }}
                />
                <Input 
                    name="email" 
                    label='E-mail' 
                    placeholder="Digite seu e-mail"
                    keyboardType="email-address"
                    autoCapitalize="none" 
                />
                <Input 
                    name="password" 
                    label='Senha' 
                    placeholder="Digite sua senha"
                    textContentType="password"
                    secureTextEntry={true}
                />

                <TouchableOpacity style={styles.submitButton} onPress={() => formRef.current.submitForm()}>
                    <Text style={styles.submitButtonText}>Sign In</Text>
                </TouchableOpacity>
            </Form>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'stretch',
        padding: 20,
    },

    logo: {
        width: 120,
        height: 150,
        resizeMode: 'contain',
        alignSelf: 'center',
    },

    submitButton: {
        backgroundColor: '#005590',
        borderWidth: 0,
        borderRadius: 4,
        padding: 16,
        marginTop: 15,
        alignItems: 'center'
    },

    submitButtonText: {
        fontWeight: 'bold',
        color: '#fff',
        fontSize: 15,
    },
});