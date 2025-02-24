import { SafeAreaView, StyleSheet } from 'react-native';
import Header from './components/Header';
import Content from './components/Content';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {
  return ( 
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <Header/>
        <Content/>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: ''
  }
})