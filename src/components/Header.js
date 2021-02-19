import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import PublicText from './PublicText';

const Header = () => (
  <View style={styles.header}>
    <PublicText style={styles.headerText}>Todo</PublicText>
  </View>
);

const styles = StyleSheet.create({
  header: {
    marginTop: 20,
    marginBottom: 20,
  },
  headerText: {
    textAlign: 'center',
    fontSize: 72,
    color: 'rgba(174,127,232, 0.5)',
    fontWeight: '100',
  },
});

export default Header;
