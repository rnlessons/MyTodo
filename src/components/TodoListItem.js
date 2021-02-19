import React from 'react';
import {ScrollView, View, TouchableOpacity, StyleSheet} from 'react-native';
import PublicText from './PublicText';

const TodoListItem = ({todoText, complete, onPressToggle, onPressDelete}) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPressToggle}
      onLongPress={onPressDelete}>
      <View
        style={[
          styles.done,
          {
            backgroundColor: complete ? 'rgba(174,127,232, 1)' : '#aaf0d1',
          },
        ]}
      />
      <PublicText style={styles.todoText}>{todoText}</PublicText>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 10,
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#ededed',
    padding: 15,
    borderRadius: 30,
    alignItems: 'center',
  },
  done: {
    height: 10,
    width: 10,
    borderRadius: 10,
  },
  todoText: {
    fontSize: 17,
    marginLeft: 14,
    color: '#414a4c',
  },
});

export default TodoListItem;
