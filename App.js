/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState, useCallback} from 'react';
import {SafeAreaView, StyleSheet, Alert, StatusBar} from 'react-native';
import Header from './src/components/Header';
import Input from './src/components/Input';
import SubmitButton from './src/components/SubmitButton';
import TabBar from './src/components/TabBar';
import TodoList from './src/components/TodoList';

import {ALL_TODO} from './src/constants/type';
/**
[
  {
    todoText,
    complete: false,
  },
  {
    todoText,
    complete: true,
  },
  {
    todoText,
    complete: false,
  },
]
*/

// 0: 전부다
// 1: 완료된 것
// 2: 완료되지 않은 것

const App: () => React$Node = () => {
  const [todoText, setTodoText] = useState('');
  const [todos, setTodos] = useState([]);
  const [type, setType] = useState(ALL_TODO);

  const submitTodo = useCallback(() => {
    if (todoText.match(/^\s*$/)) {
      Alert.alert(
        'Error',
        'Please  enter your todo.',
        [{text: 'OK', onPress: () => console.log('OK Pressed')}],
        {cancelable: false},
      );
      return;
    }

    console.log('todoText', todoText);

    const newTodos = [
      ...todos,
      {
        todoText,
        complete: false,
      },
    ];

    setTodos(newTodos);
    setTodoText('');
    setType(ALL_TODO);

    console.log('newTodos', newTodos);
  }, [todoText, todos]);

  const onPressToggle = useCallback(
    (index) => () => {
      const selected = todos[index];
      console.log(index, selected);

      const newTodos = [
        ...todos.slice(0, index),
        {
          ...selected,
          complete: !selected.complete,
        },
        ...todos.slice(index + 1),
      ];

      setTodos(newTodos);
    },
    [todos],
  );

  const onPressDelete = useCallback(
    (index) => () => {
      Alert.alert('Confirm', 'Are you sure you want to delete?', [
        {
          text: 'OK',
          onPress: () => {
            const newTodos = [
              ...todos.slice(0, index),
              ...todos.slice(index + 1),
            ];

            console.log(index, newTodos);
            setTodos(newTodos);
          },
        },
        {
          text: 'Cancel',
          onPress: () => {},
        },
      ]);
    },
    [todos],
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <Header />
      <Input
        inputValue={todoText}
        inputChange={(text) => {
          setTodoText(text);
        }}
      />
      <SubmitButton submitTodo={submitTodo} />
      <TodoList
        todos={todos}
        type={type}
        onPressToggle={onPressToggle}
        onPressDelete={onPressDelete}
      />
      <TabBar type={type} setType={setType} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
