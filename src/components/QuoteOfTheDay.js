import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const QuoteOfTheDay = () => {
  const [quote, setQuote] = useState('');

  useEffect(() => {
    // Fetch the random quote from your API here and update the 'quote' state
    // For demonstration purposes, let's assume the quote is fetched and set as follows:
    setQuote("Be yourself; everyone else is already taken. - Oscar Wilde");
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Quote of the Day</Text>
      <TouchableOpacity style={styles.quoteContainer}>
        <Text style={styles.quoteText}>When you arise in the morning, think of what a precious privilege it is to be alive – to breathe, to think, to enjoy, to love. </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    elevation: 2,
    width: "90%",
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 16,
  },
  quoteContainer: {
    borderWidth: 1,
    borderColor: '#dddddd',
    borderRadius: 8,
    padding: 16,
  },
  quoteText: {
    fontSize: 16,
    fontStyle: 'italic',
    color: '#666666',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default QuoteOfTheDay;
