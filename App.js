import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, TextInput, Button, Alert} from 'react-native';

export default function App() {
  const [start_text, onChangeNumber] = React.useState('');
  var arr = [];
  const show_res = () => {
    // Alert.alert(start_text);
    arr.push(start_text);
    onChangeNumber('');
    Alert.alert(start_text);
  }
  return (
    <React.Fragment>
      <TextInput
        style = {styles.input}
        onChangeText={(value) => onChangeNumber(value)}
        placeholder='Start Entering choices'
      />
      <Button title = "Press me" style = {st_button.button} onPress={()=>show_res()}>
      </Button>
      <Text>Hello {start_text}</Text>
      <StatusBar style="auto" />
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 50,
    margin: 12,
    borderWidth: 1,
    padding: 10
  }
});

const st_button = StyleSheet.create({
  button: {
    height: 50,
    padding: 10
  }
});