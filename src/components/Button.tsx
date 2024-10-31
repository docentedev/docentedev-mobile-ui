import React from 'react';
import { TouchableOpacity, Text, StyleSheet, GestureResponderEvent } from 'react-native';

type ButtonProps = {
    title: string;
    onPress?: (event: GestureResponderEvent) => void;
    color?: string;
};

const Button: React.FC<ButtonProps> = ({ title, onPress, color = '#6200EE' }) => (
    <TouchableOpacity
        style={[styles.button, { backgroundColor: color }]}
        onPress={onPress}
    >
        <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    button: {
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: 'white',
        fontWeight: 'bold',
    },
});

export default Button;