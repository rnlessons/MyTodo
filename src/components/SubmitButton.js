import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const SubmitButton = ({submitTodo}) => {
  return (
    <TouchableOpacity style={styles.button} onPress={submitTodo}>
      <Text style={styles.submit}>Submit</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    height: 50,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: 'rgba(174,127,232, 1)',
    marginRight: 20,
    marginLeft: 20,
    marginTop: 15,
    borderWidth: 1,
    borderRadius: 30,
    borderColor: 'rgba(0,0,0, .1)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  submit: {
    color: '#fff',
    fontWeight: '600',
  },
});

export default SubmitButton;
