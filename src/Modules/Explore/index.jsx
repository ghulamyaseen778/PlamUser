import {StyleSheet, Text, View, ScrollView,Image} from 'react-native';
import React from 'react';
import {STYLES} from '../../../Constant/Style';
import TopHeader from '../../Components/Global/Header';
import ProductCard from '../../Components/Global/ProductCard';

const Explore = () => {
  return (
    <ScrollView style={[STYLES.container2,{marginBottom:80}]}>
      <View style={{paddingHorizontal: 20}}>
        <TopHeader text="Explore" isInput />
      </View>
      <View style={{flexDirection:"row",flexWrap:"wrap"}}>
    <ProductCard img={require("../../../assest/Image/veg5.png")}/>
    <ProductCard img={require("../../../assest/Image/veg5.png")}/>
    <ProductCard img={require("../../../assest/Image/veg5.png")}/>
    <ProductCard img={require("../../../assest/Image/veg5.png")}/>
    <ProductCard img={require("../../../assest/Image/veg5.png")}/>
    <ProductCard img={require("../../../assest/Image/veg5.png")}/>
    <ProductCard img={require("../../../assest/Image/veg5.png")}/>
    <ProductCard img={require("../../../assest/Image/veg5.png")}/>
    <ProductCard img={require("../../../assest/Image/veg5.png")}/>
      </View>
    </ScrollView>
  );
};

export default Explore;

const styles = StyleSheet.create({});
