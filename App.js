import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import Workouts from './components/Workouts';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Header/>
      <Workouts/>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: ''
  }
})