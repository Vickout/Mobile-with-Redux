import React, { useEffect, useRef, useState } from 'react';

import { TextInput, Text, StyleSheet } from 'react-native';
import { useField } from '@unform/core';

function Input({ name, label, ...rest }) {
    const inputRef = useRef(null);

    const { fieldName, registerField, defaultValue, error } = useField(name);

    useEffect(() => {
        inputRef.current.value = defaultValue;
    }, [defaultValue]);

    useEffect(() => {
        registerField({
            name: fieldName,
            ref: inputRef.current,
            path: 'value',
            clearValue(ref) {
                ref.value = '';
                ref.clear();
            },
            setValue(ref, value) {
                ref.setNativeProps({ text: value });
                inputRef.current.value = value;
            },
            getValue(ref) {
                return ref.value;
            },
        });
    }, [fieldName, registerField]);

    return (
        <>
            {label && <Text style={styles.label}>{label}</Text>}

            <TextInput
                style={styles.input}
                ref={inputRef}
                keyboardAppearance="dark"
                defaultValue={defaultValue}
                placeholderTextColor="#666360"
                onChangeText={value => {
                    if (inputRef.current) {
                        inputRef.current.value = value;
                    }
                }}
                {...rest}

            />
            
            {error && <Text>{error}</Text>}
        </>
    );
}

const styles = StyleSheet.create({
    label: {
        fontWeight: 'bold',
        marginBottom: 5,
    },

    input: {
        marginBottom: 15,
        paddingHorizontal: 12,
        paddingVertical: 16,
        borderRadius: 4,
        borderWidth: 2,
        borderColor: '#ddd',
        fontSize: 15,
        color: '#444',
    },
});

export default Input;