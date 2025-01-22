import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, Text, View } from 'react-native';
import Header from './components/Header-workouts-page';

export default function App() {
  return (
    <SafeAreaView>
      <Header/>
    </SafeAreaView>
  );
}