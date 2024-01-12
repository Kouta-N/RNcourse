import React, {useState} from 'react';
import {Button, StyleSheet, TextInput, View, FlatList} from 'react-native';
import GoalItem from './src/components/GoalItem';

export type CourseGoal = {
  text: string;
  id: string;
};

function App(): React.JSX.Element {
  const [enteredGoalText, setEnteredGoalText] = useState('');
  const [courseGoals, setCourseGoals] = useState<CourseGoal[]>([]);
  const goalInputHandler = (enteredText: string) => {
    setEnteredGoalText(enteredText);
  };

  const addGoalHandler = () => {
    setCourseGoals((currentCourseGoals: CourseGoal[]) => [
      ...currentCourseGoals,
      {text: enteredGoalText, id: Math.random().toString()},
    ]);
  };

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Your Goal!"
          onChangeText={goalInputHandler}
        />
        <Button title="Add Goal" onPress={addGoalHandler} />
      </View>
      <View style={styles.goalsContainer}>
        <FlatList
          alwaysBounceVertical={false}
          data={courseGoals}
          renderItem={itemData => {
            return <GoalItem text={itemData.item.text} />;
          }}
          keyExtractor={item => {
            return item.id;
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: 'black',
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '70%',
    marginRight: 8,
    padding: 8,
  },
  goalsContainer: {
    flex: 5,
  },
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

export default App;
