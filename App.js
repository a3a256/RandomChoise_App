import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, TextInput, Button} from 'react-native';

export default function App() {
  const [start_text, onChangeNumber] = React.useState('');
  return (
    <SafeAreaView>
      <TextInput
        style = {styles.input}
        onChangeText={onChangeNumber}
        value={start_text}
        placeholder='Start Entering choices'
      />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 50,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    top: '50%'
  }
});
