import { Image, ScrollView, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { formatFriendlyDate } from '../../helpers/formatDate';
import styles from './styles';
import LoadingMessage from '../../components/LoadingMessage';
import ErrorMessage from '../../components/ErrorMessage';


const DetailsScreen = ({ route }) => {
    const { flightId } = route.params;

    const [flight, setFlight] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    const getById = () => {
        let headersList = {
            "Accept": "*/*",
        }

        let reqOptions = {
            url: `https://api.spacexdata.com/v3/launches/${flightId}`,
            method: "GET",
            headers: headersList,
        }

        axios.request(reqOptions).then((response) => { setFlight(response.data) }).catch((error) => {
            setError(error)
        }).finally(() => {
            setLoading(false)
        })
    }
    useEffect(() => {
        getById()
    }, [])



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


    function renderFlightInfo(leftText, rightText) {
        return (
            <View style={styles.container}>
                <Text style={styles.leftText}>{leftText}</Text>
                <Text style={styles.rightText}>{rightText}</Text>
            </View>
        );
    }

    return (

        <View style={styles.main}>
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={{ uri: flight?.links?.mission_patch_small }} />
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                {renderFlightInfo("Nom de la capsule:", flight?.mission_name)}
                {renderFlightInfo("Date de lancement:", formatFriendlyDate(flight?.launch_date_utc) || "Non défini")}
                {renderFlightInfo("Nom du missile:", flight?.rocket?.rocket_name || "Non défini")}
                {renderFlightInfo("Type du missile:", flight?.rocket?.rocket_type || "Non défini")}
                {renderFlightInfo("Site de lancement:", flight?.launch_site?.site_name || "Non défini")}
                {renderFlightInfo("Statut du lancement:", flight.launch_success ? "Succès" : "Échec")}
                {renderFlightInfo("Nombre de missions:", flight?.mission_id?.length)}
                {flight?.launch_success === false &&
                    renderFlightInfo("Raison de l'échec:", flight?.launch_failure_details?.reason || "Non défini")}
                {renderFlightInfo("Détails du lancement:", flight?.details || "Non défini")}
            </ScrollView>
        </View>
    );
}

export default DetailsScreen

