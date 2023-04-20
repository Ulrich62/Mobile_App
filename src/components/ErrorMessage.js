import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ErrorMessage = () => {
    return (
        <View style={{
            flex: 1, alignItems: 'center', justifyContent: 'center',
        }}>
            <Text >Une erreur est survenue...</Text>
        </View>
    )
}

export default ErrorMessage

