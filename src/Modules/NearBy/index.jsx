import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {STYLES} from '../../../Constant/Style';
import TopHeader from '../../Components/Global/Header';
import {Color} from '../../../Constant/Color';
import NearbyCard from '../../Components/Global/NearbayCard';

const NearByMart = () => {
  const [data, setData] = useState([
    {
      id: 1,
      name: 'SM Mart',
      img: require('../../../assest/Image/cardImg.png'),
    },
    {
      id: 2,
      name: 'SM Mart',
      img: require('../../../assest/Image/cardImg.png'),
    },
    {
      id: 3,
      name: 'SM Mart',
      img: require('../../../assest/Image/cardImg.png'),
    },
  ]);
  return (
    <View style={[STYLES.container2]}>
      <View style={{paddingHorizontal: 20}}>
        <TopHeader isBack text="Nearby Mart" />
      </View>
      <FlatList
        style={{width: '100%', paddingHorizontal: 20}}
        showsVerticalScrollIndicator={false}
        data={data}
        renderItem={({item}) => (
          <View style={{paddingHorizontal:2}}>
            <NearbyCard />
          </View>
        )}
      />
    </View>
  );
};

export default NearByMart;

const styles = StyleSheet.create({});
