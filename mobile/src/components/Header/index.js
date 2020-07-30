import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default function Header() {
  return (
    <View style={styles.header}>
        <View style={{ flexDirection: 'row' }}>
          <Text style={styles.textHeader}>Hi, </Text>
          <Text style={[styles.textHeader, { color: '#FAC900' }]}>João</Text>
        </View>

        <Text>Logo</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 16,
    marginRight: 16,
    marginBottom: 32,
  },

  textHeader: {
    fontFamily: 'Ubuntu_700Bold',
    fontSize: 18,
    lineHeight: 18,
  },
});
