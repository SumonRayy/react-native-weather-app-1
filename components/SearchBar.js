import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';


import React from 'react'

const SearchBar = (
    props
) => {

    const {
        search,
        setSearch,
        searchWeather
    } = props;

    return (
        <View
            style={searchBar.searchBarContainer}
        >
            <View
                style={searchBar.searchBar}
            >
                <Icon
                    name="search"
                    style={searchBar.searchIcon}
                />
                <TextInput
                    style={searchBar.searchInput}
                    placeholder="Search Here . . ."
                    placeholderTextColor="#000"
                    onChangeText={(text) => setSearch(text)}
                    value={search}
                />

            </View>
            <TouchableOpacity
                style={searchBar.searchButton}
                onPress={searchWeather}
            >
                <Text
                    style={searchBar.searchButtonText}
                >
                    Search
                </Text>
            </TouchableOpacity>
        </View >
    )
}

export default SearchBar

const searchBar = StyleSheet.create({
    searchBarContainer: {
        marginTop: 20,
        marginBottom: 20,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    searchBar: {
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start',
        padding: 20,
        borderRadius: 50,
        width: '80%',
        flexDirection: 'row'
    },
    searchIcon: {
        fontSize: 30,
        color: '#000',
        marginRight: 10,
    },
    searchInput: {
        fontSize: 20,
        color: '#000',
        width: '100%',
        padding: 0,
        margin: 0,
    },
    searchButton: {
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        borderRadius: 30,
        width: '30%',
        marginLeft: 10,
        marginRight: 10,
        marginTop: 10,
        flexDirection: 'row'
    },
    searchButtonText: {
        fontSize: 20,
        color: '#000',
    }

});