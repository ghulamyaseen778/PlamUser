import {Dimensions, ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import TopHeader from '../../Components/Global/Header';
import {useRoute} from '@react-navigation/native';
import {STYLES} from '../../../Constant/Style';
import ProductCard from '../../Components/Global/ProductCard';
import {Color} from '../../../Constant/Color';
import Icon from 'react-native-vector-icons/AntDesign';
const {width} = Dimensions.get('window');

const SingleScreen = () => {
  const route = useRoute();
  const {name, data} = route.params;
  useEffect(() => {
    console.log(data);
  }, []);
  return (
    <ScrollView style={[STYLES.container2]}>
      <View style={{paddingHorizontal: 20}}>
        <TopHeader isBack isInput text={name} />
      </View>
      <View
        style={{
          flexDirection: 'row',
          // justifyContent: 'center',
          flexWrap: 'wrap',
        }}>
        {data ? (
          data?.map(({name, img, id, type}) => (
            <ProductCard img={img} name={name} key={id} type={type} />
          ))
        ) : (
          <View
            style={{
              width: '100%',
              height: 300,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Icon name="frowno" size={30} color={Color.mainColor} />
            <Text
              style={{
                fontFamily: 'Poppins-Medium',
                fontSize: 20,
                fontWeight: '500',
                color: Color.mainColor,
                textAlign: 'center',
              }}>
              No Data Found
            </Text>
          </View>
        )}
      </View>
    </ScrollView>
  );
};

export default SingleScreen;

const styles = StyleSheet.create({});
