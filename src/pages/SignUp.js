import React, { useRef } from 'react';
import { TouchableOpacity, Text, KeyboardAvoidingView, Image, StyleSheet } from 'react-native';
import { Form } from '@unform/mobile';
import * as Yup from 'yup';

import Input from '../components/Input';
import api from '../services/api';

export default function SignIn() {
    const formRef = useRef(null);

    async function handleSubmit(data, { reset }) {
        try {
            const schema = Yup.object().shape({
                nome: Yup.string().required('O nome é obrigatório!'),
                email: Yup.string().email('Digite um e-mail válido').required('O e-mail é obrigatório!'),
                password: Yup.string().min(4, 'No mínimo 4 caracteres').required('A senha é obrigatória!')
            });

            await schema.validate(data, {
                abortEarly: false,
            })
            console.log(data);

            formRef.current.setErrors({});

            await api.post('users', data)

            reset();
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
                <Input name="email" label='Nome Completo' placeholder="Digite seu nome" />
                <Input name="email" label='E-mail' placeholder="Digite seu e-mail" type="emailAddress" />
                <Input name="password" label='Senha' placeholder="Digite sua senha" type="password" />

                <TouchableOpacity style={styles.submitButton} onPress={() => formRef.current.submitForm()}>
                    <Text style={styles.submitButtonText}>SignUp</Text>
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