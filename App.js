import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import SearchBar from './components/SearchBar';
import TempDisplay from './components/TempDisplay';

import { API_KEY, API_URL } from '@env';


const key = API_KEY;
const apiURL = `${API_URL}`;

export default function App() {

  const [search, setSearch] = useState('');
  const [results, setResults] = useState([]);

  const searchWeather = () => {

    if (search.length > 0) {
      fetch(`${apiURL}${search}&appid=${key}`)
        .then(res => res.json())
        .then(data => {
          if (data.cod === 200) {
            setResults(data);
          } else {
            alert('City Not Found');
          }
          setSearch('');
        })
        .catch(err => console.log("Error : ", err));
    } else {
      alert('Please enter a city name');
    }

  };


  return (
    <ScrollView style={styles.container}>
      <View style={styles.viewContainer}>
        <Text
          style={styles.title}
        >Abahawa</Text>
        <SearchBar
          search={search}
          setSearch={setSearch}
          searchWeather={searchWeather}
        />
        {
          results.length !== 0 ? (
            <TempDisplay
              results={results}
            />
          ) : (
            <Text
              style={styles.noData}
            >
              Type a city name to get the weather
            </Text>
          )
        }

        <StatusBar
          style="auto"
          backgroundColor='#7e7e7e'
        />
      </View>
    </ScrollView >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0e0e0e',
  },
  viewContainer: {
    flex: 1,
    backgroundColor: '#0e0e0e',
    alignItems: 'center',
    justifyContent: 'flex-start',
    position: 'relative'
  },
  title: {
    color: '#fff', fontSize: 30, fontWeight: 'bold', marginTop: 70
  },
  subtitle: {
    color: '#fff', fontSize: 20, marginTop: 20
  },
  noData: {
    color: '#fff', fontSize: 20, marginTop: 20
  }
});
