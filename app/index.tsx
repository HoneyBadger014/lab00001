import React from 'react';
import { View, Text, FlatList, StyleSheet, Image, useColorScheme } from 'react-native';
import { factsList } from './lib/Data.js';

const data = factsList.map((item, index) => ({ ...item, day: `День ${index + 1}` }));

const Item = ({ name, fact, day, url, theme }) => (
  <View style={[styles.item, theme === 'dark' ? styles.darkItem : styles.lightItem]}>
    <Text style={[styles.day, theme === 'dark' ? styles.darkText : styles.lightText]}>{day}</Text>
    <Text style={[styles.name, theme === 'dark' ? styles.darkText : styles.lightText]}>{name}</Text>
    <Image style={styles.image} source={{ uri: url }} alt={name} />
    <Text style={[styles.fact, theme === 'dark' ? styles.darkText : styles.lightText]}>{fact}</Text>
  </View>
);

const MyFlatList = () => {
  const theme = useColorScheme();

  return (
    <View style={[styles.container, theme === 'dark' ? styles.darkContainer : styles.lightContainer]}>
      <View style={styles.header}>
        <Text style={[styles.title, theme === 'dark' ? styles.darkText : styles.lightText]}>30 дней - 30 фактов о растениях</Text>
      </View>
      <FlatList
        data={data}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <Item day={item.day} name={item.name} url={item.url} fact={item.fact} theme={theme} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    alignContent: 'center',
  },
  header: {
    alignItems: 'center',
    marginBottom: 15,
  },
  title: {
    fontSize: 24,
    marginTop: 50,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: 1.5,
  },
  item: {
    padding: 20,
    marginVertical: 10,
    borderRadius: 15,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 5,
  },
  lightContainer: {
    backgroundColor: '#66CDAA',
  },
  darkContainer: {
    backgroundColor: '#1E1E1E',
  },
  lightItem: {
    backgroundColor: '#FFFFFF',
    borderColor: '#E1E1E1',
    borderWidth: 1,
  },
  darkItem: {
    backgroundColor: '#333333',
    borderColor: '#555555',
    borderWidth: 1,
  },
  lightText: {
    color: '#333333',
  },
  darkText: {
    color: '#EEEEEE',
  },
  name: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 8,
    marginTop: 12,
  },
  image: {
    marginTop: 20,
    height: 160,
    width: '100%',
    borderRadius: 12,
    marginBottom: 20,
  },
  day: {
    marginTop: 5,
    fontSize: 16,
    fontWeight: '500',
  },
  fact: {
    textAlign: 'justify',
    fontSize: 16,
    lineHeight: 22,
  },
});

export default MyFlatList;