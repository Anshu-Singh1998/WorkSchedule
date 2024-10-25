import * as React from 'react';
import {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  Alert,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

const FirstScreen = ({navigation}) => {
  const [lessonStart, setLessonStart] = useState('');
  const [weekCount, setWeekCount] = useState('');
  const [workingDays, setWorkingDays] = useState('');
  const [prefix, setPrefix] = useState('');
  const [hoursPerDay, setHoursPerDay] = useState('');

  const validateForm = () => {
    if (!lessonStart || !weekCount || !workingDays || !prefix || !hoursPerDay) {
      Alert.alert('Validation Error', 'All fields are required.');
      return false;
    }
    return true;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      navigation.navigate('SecondScreen', {
        lessonStart,
        weekCount: parseInt(weekCount),
        workingDays: parseInt(workingDays),
        prefix,
        hours: parseInt(hoursPerDay),
      });
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Lesson Start</Text>
      <TextInput
        style={styles.input}
        placeholder="Lesson Start & End"
        keyboardType="numeric"
        value={lessonStart}
        onChangeText={setLessonStart}
        contextMenuHidden={true}
      />

      <Text style={styles.label}>Week Count</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Week Count"
        keyboardType="numeric"
        value={weekCount}
        onChangeText={setWeekCount}
      />

      <Text style={styles.label}>Working Days in Week</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Working Days in Week"
        keyboardType="numeric"
        value={workingDays}
        onChangeText={setWorkingDays}
      />

      <Text style={styles.label}>Prefix</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Prefix"
        value={prefix}
        onChangeText={setPrefix}
      />

      <Text style={styles.label}>Hours per Day</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Hours per Day"
        keyboardType="numeric"
        value={hoursPerDay}
        onChangeText={setHoursPerDay}
      />
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <TouchableOpacity onPress={handleSubmit}>
          <Text style={styles.ButtonText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  label: {
    marginTop: 15,
    fontSize: 16,
    fontWeight: 'bold',
  },
  input: {
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginTop: 5,
    marginBottom: 15,
    borderRadius: 8,
  },
  button: {
    height: 40,
    backgroundColor: '#def',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginTop: 5,
    marginBottom: 15,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ButtonText: {
    fontSize: 16,
    color: '000',
  },
});

export default FirstScreen;
