import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  ScrollView,
} from 'react-native';
import React from 'react';

import {userImage} from '../../assets/images';
import {Banner} from '../../components';
import {Services} from '../../components';
import ListCars from '../../components/ListCars';

const Home = () => {
  var rows = [];
  for (var i = 0; i < 5; i++) {
    rows.push(<ListCars key={i} />);
  }

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.userText}>
            <Text style={styles.hello}>Hei Gani!</Text>
            <Text style={styles.location}>Bandung, Jawa Barat</Text>
          </View>
          <View>
            <Image style={styles.imageUser} source={userImage} />
          </View>
        </View>
        <Banner />
        <Services />
        <View style={styles.containerList}>
          <Text style={styles.titleList}>Daftar Mobil Pilihan </Text>
          {rows}
        </View>
      </View>
    </ScrollView>
  );
};

export default Home;

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexGrow: 1,
  },
  containerList: {
    marginTop: windowHeight * 0.03,
    marginHorizontal: 30,
  },
  titleList: {
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 18,
    color: '#000000',
  },
  header: {
    backgroundColor: '#D3D9FD',
    height: windowHeight * 0.27,
    width: windowWidth,
    flex: 1,
    flexDirection: 'row',
    alignSelf: 'baseline',
    justifyContent: 'space-between',
    paddingHorizontal: windowWidth * 0.04,
    paddingTop: windowHeight * 0.04,
  },
  userText: {
    marginTop: windowHeight * 0.03,
  },
  imageUser: {
    marginTop: windowHeight * 0.03,
    width: windowWidth * 0.08,
    height: windowHeight * 0.05,
  },
  hello: {
    fontWeight: '300',
    fontSize: 14,
  },
  location: {
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 18,
    color: '#000000',
  },
});
