import { Text, View, StyleSheet, Image, Link } from 'react-native';

export default function AssetExample() {
  return (
    <View style={styles.container}>
      <View style={styles.contact}>
        <Image style={styles.icon} source={require('../../assets/wp_icon.png')} />
        <Text style={styles.number}>
          +77474702747
        </Text>
      </View>
      <View style={styles.contact2}>
        <Image style={styles.icon} source={require('../../assets/inst_icon.png')} />
        <Text style={styles.inst}>
          @mnskkv
        </Text>
      </View>
      <View style={styles.contact3}>
        <Image style={styles.icon} source={require('../../assets/g_icon.png')} />
        <Text style={styles.post}>
          mnskkv@gmail.com
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    marginTop: 'auto',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },

  number: {
    marginTop: 0,
    fontSize: 15,
    width: 140
  },
  inst: {
    marginTop: 0,
    fontSize: 15,
    width: 140
  },
  post: {
    marginTop: 0,
    fontSize: 15,
    width: 140
  },

  icon: {
    height: 35,
    width: 35,
    marginRight: 10
  },

    contact: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
    flexDirection: 'row'
  },
  contact2: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
    flexDirection: 'row'
  },
  contact3: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
    flexDirection: 'row'
  },
});

