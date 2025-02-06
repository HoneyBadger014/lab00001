import { Text, View, StyleSheet, Image } from 'react-native';

export default function AssetExample() {
  return (
    <View style={styles.container}>
      <Image style={styles.photo} source={require('../../assets/photo_1.png')} />
      <Text style={styles.name}>
        Aman Iskakov
      </Text>
      <Text style={styles.group}>
        CS-304
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 50,
    marginTop: 'auto',
  },
  name: {
    marginTop: 0,
    fontSize: 30,
    textAlign: 'center',
  },
  group: {
    marginTop: 0,
    fontSize: 20,
    textAlign: 'center',
  },
  photo: {
    height: 128,
    width: 128,
    marginBottom: 20
  }
});

