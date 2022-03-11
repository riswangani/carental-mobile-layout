import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  Image,
} from 'react-native';
import Icons from 'react-native-vector-icons/Feather';

import React from 'react';
import {carImage} from '../../assets/images';

const ListCars = () => {
  return (
    <TouchableOpacity style={styles.card}>
      <Image source={carImage} />
      <View style={styles.desc}>
        <Text>Daihatsu Xenia</Text>
        <View style={styles.iconInner}>
          <View style={styles.iconInnerInner}>
            <Icons name="users" size={12} color="#8A8A8A" />
            <Text style={styles.textInnerIcon}>4</Text>
          </View>
          <View style={styles.iconInnerInner}>
            <Icons name="briefcase" size={12} color="#8A8A8A" />
            <Text style={styles.textInnerIcon}>4</Text>
          </View>
        </View>
        <Text style={styles.prices}>Rp.230.000</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ListCars;

const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'stretch',
    padding: 17,
    marginVertical: windowHeight * 0.01,
    backgroundColor: 'white',
    borderRadius: 10,
    shadowColor: '#000',

    shadowOpacity: 0.29,
    shadowRadius: 2.65,
    elevation: 3,
  },
  desc: {marginHorizontal: 16},
  iconInner: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  iconInnerInner: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'baseline',
  },
  textInnerIcon: {
    marginLeft: 4,
    fontSize: 12,
  },
  prices: {color: '#5CB85F'},
});
