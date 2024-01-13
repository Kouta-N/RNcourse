import React from 'react';
import {StyleSheet, Text, View, Pressable} from 'react-native';

type Props = {
  text: string;
  onDeleteItem: (id: string) => void;
  id: string;
};

export const GoalItem: React.FC<Props> = props => {
  const {text, onDeleteItem, id} = props;
  return (
    <Pressable
      android_ripple={{color: '#dddddd'}}
      onPress={onDeleteItem.bind(this, id)}
      style={({pressed}) => pressed && styles.pressedItem}>
      <View style={styles.goalItem}>
        <Text style={styles.goalText}>{text}</Text>
      </View>
    </Pressable>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: '#5e0acc',
    color: 'white',
  },
  pressedItem: {
    opacity: 0.5,
  },
  goalText: {
    color: 'white',
    padding: 8,
  },
});
