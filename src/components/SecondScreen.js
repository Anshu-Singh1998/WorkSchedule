import * as React from 'react';
import {View, Text, ScrollView, StyleSheet} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

const generateTabs = (totalDays, lessonCount, prefix, hours) => {
  console.log('Prefix===>>>', prefix); 

  let lessons = Array.from(
    {length: lessonCount},
    (_, i) => `${prefix} Lesson ${i + 1}`,
  );
  let tabs = [];
  let lessonIndex = 0;

  for (let day = 1; day <= totalDays; day++) {
    const dayLessons = [];
    for (let h = 0; h < hours; h++) {
      if (lessonIndex < lessons.length) {
        dayLessons.push(lessons[lessonIndex]);
        lessonIndex++;
      } else {
        dayLessons.push('');
      }
    }
    tabs.push({day: day, lessons: dayLessons});
  }

  return tabs;
};

const LessonTabScreen = ({lessons, hours, day}) => {
  console.log('Lessons=====>>', lessons);

  return (
    <ScrollView contentContainerStyle={styles.tabContent}>
      <Text style={styles.dayText}>Day {day}</Text>
      <Text style={styles.hoursText}>Hours per day: {hours}</Text>
      <Text style={styles.prefixText}>
        Prefix
        {lessons.length > 0
          ? `${lessons[0].split(' ')[0]} Lesson ${day}`
          : 'No lessons available'}
      </Text>
    </ScrollView>
  );
};

const SecondScreen = ({route}) => {
  const {weekCount, workingDays, lessonCount, prefix, hours} = route.params;
  const totalDays = weekCount * workingDays;
  const tabs = generateTabs(totalDays, lessonCount, prefix, hours);

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {backgroundColor: '#ffffff'},
        tabBarLabelStyle: {color: '#000000'},
      }}>
      {tabs.map((tab, index) => (
        <Tab.Screen
          key={index}
          name={`Day ${index + 1}`}
          children={() => (
            <LessonTabScreen
              lessons={tab.lessons}
              hours={hours}
              day={tab.day}
            />
          )}
        />
      ))}
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabContent: {
    padding: 16,
  },
  dayText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  hoursText: {
    fontSize: 18,
    marginBottom: 8,
  },
  prefixText: {
    fontSize: 16,
    marginBottom: 16,
  },
  lessonContainer: {
    marginBottom: 20,
  },
  hoursInput: {
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginTop: 5,
  },
});


export default SecondScreen;
