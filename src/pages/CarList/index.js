import {StyleSheet, Text, View, Dimensions, ScrollView} from 'react-native';
import React from 'react';
import ListCars from '../../components/ListCars';

const CarList = () => {
  var rows = [];
  for (var i = 0; i < 10; i++) {
    rows.push(<ListCars key={i} />);
  }

  return (
    <ScrollView>
      <View style={styles.containerList}>
        <View>
          <Text style={styles.titleList}>Daftar Mobil Pilihan </Text>
          {rows}
        </View>
      </View>
    </ScrollView>
  );
};

export default CarList;

const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  containerList: {
    marginTop: windowHeight * 0.06,
    marginHorizontal: 30,
  },
  titleList: {
    marginBottom: windowHeight * 0.03,
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 18,
    color: '#000000',
  },
});
