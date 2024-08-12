import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import {STYLES} from '../../../../Constant/Style';
import TopHeader from '../../../Components/Global/Header';
import {Color} from '../../../../Constant/Color';
import Button from '../../../Components/Global/Button';
import Input from '../../../Components/Global/Input';
import {useNavigation} from '@react-navigation/native';

const PaymentMethod = () => {
  const [tab, setTab] = useState(1);
  const navigation = useNavigation();
  return (
    <View style={STYLES.container2}>
      <View style={{paddingHorizontal: 20}}>
        <TopHeader isBack text="Payment Method" />
      </View>
      <ScrollView style={[STYLES.container, {marginTop: 10}]}>
        <View style={{paddingHorizontal: 20}}>
          <Text
            style={{
              color: Color.mainColor,
              fontSize: 18,
              fontFamily: 'Poppins-SemiBold',
            }}>
            Choose Payment Method
          </Text>
          <View
            style={{
              marginTop: 10,
              marginBottom: 20,
              flexDirection: 'row',
              gap: 10,
            }}>
            <TouchableOpacity
              onPress={() => setTab(1)}
              style={{
                borderWidth: 1,
                borderRadius: 10,
                paddingHorizontal: 7,
                paddingVertical: 25,
                borderColor: tab != 1 ? '#B3B3B3' : Color.yellowColor,
              }}>
              <Image
                style={{width: 80, height: 30}}
                resizeMode="contain"
                source={require('../../../../assest/Image/card.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setTab(2)}
              style={{
                borderWidth: 1,
                borderRadius: 10,
                padding: 10,
                paddingHorizontal: 7,
                paddingVertical: 25,
                borderColor: tab != 2 ? '#B3B3B3' : Color.yellowColor,
              }}>
              <Image
                style={{width: 80, height: 30}}
                resizeMode="contain"
                source={require('../../../../assest/Image/visa.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setTab(3)}
              style={{
                borderWidth: 1,
                borderRadius: 10,
                padding: 10,
                borderColor: tab != 3 ? '#B3B3B3' : Color.yellowColor,
                paddingHorizontal: 7,
                paddingVertical: 25,
              }}>
              <Image
                style={{width: 80, height: 30}}
                resizeMode="contain"
                source={require('../../../../assest/Image/paypal.png')}
              />
            </TouchableOpacity>
          </View>
          <View style={{marginTop: 10}}>
            <Input placeholder="Name of the card holder" />
          </View>
          <View style={{marginTop: 10}}>
            <Input placeholder="Card number" type="number-pad" />
          </View>
          <View
            style={{
              marginTop: 10,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <View style={{width: '47%'}}>
              <Input placeholder="MM/YY" type="number-pad" />
            </View>
            <View style={{width: '47%'}}>
              <Input placeholder="CVC" type="number-pad" />
            </View>
          </View>
          <View style={{marginTop: 20}}>
            <Button
              text="Next"
              type="normal"
              onPress={() => navigation.goBack()}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default PaymentMethod;

const styles = StyleSheet.create({});
