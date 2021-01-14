import React, { useRef } from 'react';
import { TouchableOpacity, Text, KeyboardAvoidingView, StyleSheet } from 'react-native';
import { Form } from '@unform/mobile';
import Input from '../components/Input';

export default function SignIn() {
    const formRef = useRef(null);

    function handleSubmit(data) {
        console.log(data);
        // { email: 'test@example.com', password: '123456' }
    }

    return (
        <KeyboardAvoidingView style={styles.container}>
            <Form ref={formRef} onSubmit={handleSubmit}>
                <Input name="email" label='E-mail' type="email" />
                <Input name="password" label='Senha' type="password" />

                <TouchableOpacity style={styles.submitButton} onPress={() => formRef.current.submitForm()}>
                    <Text style={styles.submitButtonText}>SignIn</Text>
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

    submitButton: {
        backgroundColor: '#111',
        borderWidth: 0,
        borderRadius: 4,
        padding: 16,
        alignItems: 'center'
    },

    submitButtonText: {
        fontWeight: 'bold',
        color: '#fff',
        fontSize: 15,
    },
});