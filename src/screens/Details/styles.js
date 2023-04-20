import { StyleSheet } from 'react-native';

// screen sizing

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 200,
        resizeMode: 'contain',
    },
    main: {
        padding: 10,
        flex: 1
    },
    container: {
        display: 'flex',
        flexDirection: 'row',
        marginVertical: 10,
    },
    leftText: {
        fontWeight: 'bold',
        textDecorationLine: 'underline',
    },
    rightText: {
        marginLeft: 10,
        marginRight: 10,
        maxWidth: '50%',
    },

    imageContainer: {
        borderRadius: 10,
        shadowOffset: { width: 0, height: 2 },
        padding: 10,
        borderColor: 'lithgray',
        borderWidth: 1,
        shadowColor: 'gray',
        shadowOpacity: 0.26,
        shadowRadius: 6,
        elevation: 5,
        backgroundColor: 'white',
    }

});

export default styles;