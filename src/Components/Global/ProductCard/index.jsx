import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {Color} from '../../../../Constant/Color';
import { useNavigation } from '@react-navigation/native';

const {width} = Dimensions.get('window');

const ProductCard = ({name, img,type}) => {
  const navigation = useNavigation()
  return (
    <View style={{width: width / 2, marginVertical: 5, alignItems: 'center'}}>
      <TouchableOpacity
      onPress={()=>navigation.navigate("PRODUCT_DETAILS")}
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          width: 150,
          borderWidth: 1,
          borderRadius: 10,
          borderColor: '#B3B3B3',
          paddingVertical: 10,
        }}>
        <Image
          style={{width: 80, height: 60}}
          resizeMode="contain"
          source={img && img}
        />
        <Text
          style={{
            fontSize: 15,
            fontFamily: 'Poppins-SemiBold',
            fontWeight: '600',
            color: Color.mainColor,
          }}>
          {name && name}
        </Text>
        <Text
          style={{
            fontSize: 10,
            fontFamily: 'Poppins-Medium',
            fontWeight: '500',
            color: '#58595B',
          }}>
          {type}
        </Text>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text
            style={{
              fontSize: 16,
              fontFamily: 'Poppins-SemiBold',
              fontWeight: '600',
              color: Color.mainColor,
            }}>
            $12.55
          </Text>
          <Text
            style={{
              fontSize: 10,
              fontFamily: 'Poppins-Medium',
              fontWeight: '500',
              color: '#58595B',
            }}>
            {' '}
            / 1.50 Ibs
          </Text>
        </View>
        <TouchableOpacity>
          <Image source={require('../../../../assest/Image/cart.png')} />
        </TouchableOpacity>
      </TouchableOpacity>
    </View>
  );
};

export default ProductCard;

const styles = StyleSheet.create({});
