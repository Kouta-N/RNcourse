import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

type Props = {
  text: string;
};

export const GoalItem: React.FC<Props> = props => {
  const {text} = props;
  return (
    <View style={styles.goalItem}>
      <Text style={styles.goalText}>{text}</Text>
    </View>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: '#5e0acc',
    color: 'white',
  },
  goalText: {
    color: 'white',
  },
});
