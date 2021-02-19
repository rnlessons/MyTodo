import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';

const Input = ({inputValue, inputChange}) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.Input}
        placeholder="What needs to be done?"
        placeholderTextColor="#CACACA"
        selectionColor="#666666"
        value={inputValue}
        onChangeText={inputChange}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    marginLeft: 20,
    marginRight: 20,
  },
  input: {
    height: 60,
    backgroundColor: '#ffffff',
    paddingLeft: 10,
    paddingRight: 10,
  },
});

export default Input;
