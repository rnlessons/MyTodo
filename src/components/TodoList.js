import React from 'react';
import {ScrollView, View, StyleSheet} from 'react-native';
import TodoListItem from './TodoListItem';

import {COMPLETED_TODO, ACTIVATED_TODO} from '../constants/type';

const TodoList = ({todos, type, onPressToggle, onPressDelete}) => {
  return (
    <ScrollView style={styles.container}>
      {todos.map((todo, index) => {
        // complete 이 선택이 되었을 때 그리고 todo 항목이 미완료면
        if (type === COMPLETED_TODO && todo.complete === false) {
          return null;
        }

        // active가 선택이 되었을 때 그리고 todo 항목이 미완료면
        if (type === ACTIVATED_TODO && todo.complete === true) {
          return null;
        }

        return (
          <TodoListItem
            todoText={todo.todoText}
            complete={todo.complete}
            onPressToggle={onPressToggle(index)}
            onPressDelete={onPressDelete(index)}
            key={index}
          />
        );
      })}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
});

export default TodoList;
