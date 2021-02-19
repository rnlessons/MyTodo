import React, {useCallback} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import TabBarItem from './TabBarItem';
import {ALL_TODO, COMPLETED_TODO, ACTIVATED_TODO} from '../constants/type';

const TabBar = ({setType, type}) => {
  const onPressType = useCallback(
    (value) => () => {
      setType(value);
    },
    [setType],
  );

  return (
    <View style={styles.container}>
      <TabBarItem
        title="All"
        type={type}
        selected={type === ALL_TODO}
        setType={onPressType(ALL_TODO)}
      />
      <TabBarItem
        title="Complete"
        type={type}
        selected={type === COMPLETED_TODO}
        setType={onPressType(COMPLETED_TODO)}
      />
      <TabBarItem
        title="Active"
        type={type}
        selected={type === ACTIVATED_TODO}
        setType={onPressType(ACTIVATED_TODO)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 70,
    flexDirection: 'row',
    borderTopWidth: 1,
    borderTopColor: '#dddddd',
  },
});
export default TabBar;
