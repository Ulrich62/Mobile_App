import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from './styles'
import axios from 'axios'
import LoadingMessage from '../../components/LoadingMessage'
import ErrorMessage from '../../components/ErrorMessage'

const HomeScreen = ({ navigation }) => {
    const [flights, setFlight] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)


    const getAll = () => {

        let headersList = {
            "Accept": "*/*",
        }

        let reqOptions = {
            url: "https://api.spacexdata.com/v3/launches",
            method: "GET",
            headers: headersList,
        }

        axios.request(reqOptions).then((response) => setFlight(response.data)).catch((error) => {
            setError(error)
        }).finally(() => {
            setLoading(false)
        })
    }
    useEffect(() => {
        getAll()
    }, [])

    const onPressFlight = (item) => {
        navigation.navigate("Details", { flightId: item.flight_number });
    };

    const renderFlights = ({ item }) => (
        <View style={styles.container}>
            <Image style={styles.photo} source={{ uri: item.links.mission_patch_small }} />
            <Text style={styles.title}>{item.mission_name}</Text>
            <TouchableOpacity style={styles.button} onPress={() => onPressFlight(item)}>
                <Text style={styles.textButton}>Voir Plus</Text>
            </TouchableOpacity>
        </View>
    );

    if (loading) {
        return (
            <LoadingMessage />
        )
    }

    if (error) {
        return (
            <ErrorMessage />
        )
    }


    return (
        <View>
            <FlatList vertical showsVerticalScrollIndicator={false} numColumns={2} data={flights} renderItem={renderFlights} keyExtractor={(item) => `${item.flight_number}`} />
        </View>
    );
}

export default HomeScreen

