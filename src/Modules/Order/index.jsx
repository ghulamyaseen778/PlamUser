import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {STYLES} from '../../../Constant/Style';
import {Color} from '../../../Constant/Color';
import Button from '../../Components/Global/Button';
import {useNavigation} from '@react-navigation/native';

const Order = () => {
  const navigation = useNavigation();
  return (
    <View style={STYLES.container2}>
      <View
        style={{
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100%',
        }}>
        <Image
          style={{width: '70%'}}
          resizeMode="contain"
          source={require('../../../assest/Image/orderSucceful.png')}
        />
        <Text
          style={{
            color: Color.mainColor,
            fontSize: 23,
            fontFamily: 'Poppins-SemiBold',
            width: '90%',
            textAlign: 'center',
            marginTop: 20,
          }}>
          Your Order has been placed successfully{' '}
        </Text>
        <View style={{width: '100%', paddingHorizontal: 20, marginTop: 20}}>
          <View style={{marginVertical: 5, width: '100%'}}>
            <Button text="Track your order" type="normal" onPress={()=>navigation.navigate("TRACK_ORDER")} />
          </View>
          <View style={{marginVertical: 5, width: '100%'}}>
            <Button
              text="Back to home"
              onPress={() => navigation.navigate('HOME')}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default Order;

const styles = StyleSheet.create({});
