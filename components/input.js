import React from 'react';
import { TextInput, StyleSheet } from 'react-native';
import { SIZES, FONTS, COLORS } from '../constants/theme';

const Input = ({ value, onChangeText, variant, ...rest }) => {
    const keyboardType = variant === 'numeric' ? 'numeric' : 'default';

    return (
        <TextInput
            style={styles.input}
            value={value}
            onChangeText={onChangeText}
            keyboardType={keyboardType}
            placeholderTextColor={COLORS.lightGray}
            focusable
            selectionColor={COLORS.primary}
            {...rest}
        />
    );
};

const styles = StyleSheet.create({
    input: {
        height: 50,
        borderColor: 'gray',
        borderRadius: 12,
        
        paddingHorizontal: SIZES.small,
        fontSize: 50,
        fontWeight: '600',
        textAlign: 'center',
        margin: SIZES.base,
        fontFamily: FONTS.bold,
    },
});

export default Input;
