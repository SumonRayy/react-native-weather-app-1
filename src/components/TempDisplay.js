import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/EvilIcons';

const TempDisplay = (props) => {

    const {
        results
    } = props;

    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    return (
        <View
            style={styles.displayContainer}
        >

            <Text
                style={styles.tempText}
            >
                {
                    results.main.temp != undefined ? (
                        `${Math.round(results.main.temp - 273.15)}°C`
                    ) : (
                        'No Data'
                    )
                }
            </Text>

            <View
                style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            >
                <Icon
                    name="location"
                    style={styles.locationIcon}
                />
                <Text
                    style={styles.locationText}
                >
                    {
                        results.name
                    } , {
                        results.sys.country
                    }
                </Text>
            </View>

            <Text
                style={styles.descriptionText}
            >
                {
                    `${capitalizeFirstLetter(results.weather[0].description)}`
                }
            </Text>

        </View>
    )
}

export default TempDisplay

const styles = StyleSheet.create({
    displayContainer: {
        flex: 0.5,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 100,
        borderColor: '#fff',
        borderWidth: 3,
        borderRadius: 30,
        padding: 20,
    },
    tempText: {
        color: '#fff',
        fontSize: 100,
        fontWeight: 'bold'
    },
    locationIcon: {
        color: '#fff',
        fontSize: 30,
        marginTop: 20
    },
    locationText: {
        color: '#fff',
        fontSize: 30,
        marginTop: 20
    },
    descriptionText: {
        color: '#fff',
        fontSize: 20,
        marginTop: 20
    }
})