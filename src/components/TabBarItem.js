// src/components/TabBarItem.js
import React from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';
import PublicText from './PublicText';

const TabBarItem = ({title, selected, setType}) => {
  return (
    <TouchableOpacity
      underlayColor="#efefef"
      onPress={setType}
      style={[styles.item, selected ? styles.selected : null]}>
      <PublicText style={[styles.itemText, selected ? styles.bold : null]}>
        {title}
      </PublicText>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  item: {
    flex: 1,
    justifyContent: 'center',
  },
  itemText: {
    textAlign: 'center',
    color: '#777777',
    fontSize: 16,
  },
  selected: {
    backgroundColor: '#efefef',
  },
  bold: {
    fontWeight: 'bold',
  },
});

export default TabBarItem;
