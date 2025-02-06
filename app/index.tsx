import { Text, SafeAreaView, StyleSheet } from 'react-native';
import { Card } from 'react-native-paper';
import Profile from './components/Profile';
import Contacts from './components/Contacts';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Profile />
      <Contacts />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#fff',
    padding: 8,
  },
});
