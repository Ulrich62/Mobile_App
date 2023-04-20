import { StyleSheet, Dimensions } from 'react-native';

// screen sizing
const { width, height } = Dimensions.get('window');
// orientation must fixed
const SCREEN_WIDTH = width < height ? width : height;

const flightNumColums = 2;
// item size
const FLIGHT_ITEM_HEIGHT = 150;
const FLIGHT_ITEM_MARGIN = 20;

// 2 photos per width
export const FlightCard = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: FLIGHT_ITEM_MARGIN,
        marginTop: 20,
        width: (SCREEN_WIDTH - (flightNumColums + 1) * FLIGHT_ITEM_MARGIN) / flightNumColums,
        borderColor: '#cccccc',
        borderWidth: 0.5,
        borderRadius: 15,
        padding: 10
    },
    photo: {
        width: (SCREEN_WIDTH - (flightNumColums + 1) * FLIGHT_ITEM_MARGIN) / flightNumColums,
        height: FLIGHT_ITEM_HEIGHT,
        borderRadius: 15,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0
    },
    title: {
        flex: 1,
        fontSize: 17,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#444444',
        marginTop: 3,
        marginRight: 5,
        marginLeft: 5,
    },
    category: {
        marginTop: 5,
        marginBottom: 5
    },
    button: {
        height: 30,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10,
        width: 100,
        borderRadius: 30,
        backgroundColor: "#00BFFF",
    },
    textButton: {
        color: 'white',
        fontSize: 14,
    }
});