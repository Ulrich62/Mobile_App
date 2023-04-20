import { Text, View } from 'react-native'
import React from 'react'

const LoadingMessage = () => {
    return (
        <View style={{
            flex: 1, alignItems: 'center', justifyContent: 'center',
        }}>
            <Text>Chargement en cours...</Text>
        </View>)
}

export default LoadingMessage

