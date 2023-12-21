import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { SIZES } from '../constants/theme';

const Button = ({ title, onPress, style, ...props }) => {
    return (
        <TouchableOpacity
            style={[styles.button, style]}
            onPress={onPress}
            {...props}
        >
            <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#007AFF',
        borderRadius: 8,
        paddingVertical: 12,
        paddingHorizontal: 16,
        alignItems: 'center',
        width: '100%',
        height: 50,
        justifyContent: 'center',
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default Button;
