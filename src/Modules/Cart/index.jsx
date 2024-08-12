import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import React from 'react';
import {STYLES} from '../../../Constant/Style';
import TopHeader from '../../Components/Global/Header';
import {Color} from '../../../Constant/Color';
import Button from '../../Components/Global/Button';
import {useNavigation} from '@react-navigation/native';

const {width, height} = Dimensions.get('window');

const Cart = () => {
  const navigation = useNavigation();
  return (
    <View style={STYLES.container2}>
      <View style={{paddingHorizontal: 20}}>
        <TopHeader text="Cart" />
      </View>
      <ScrollView style={{width: '100%', height: '30%'}}>
        <View style={{paddingHorizontal: 20, height: '30%'}}>
          <View
            style={{
              justifyContent: 'space-between',
              flexDirection: 'row',
              borderBottomWidth: 1,
              paddingBottom: 10,
              borderColor: '#B7B7B7',
              marginTop: 10,
            }}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <View
                style={{
                  width: 70,
                  height: 70,
                  borderRadius: 60,
                  backgroundColor: '#D9D9D9',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image
                  style={{width: 55, height: 55}}
                  resizeMode="contain"
                  source={require('../../../assest/Image/fruit3.png')}
                />
              </View>
              <View style={{marginLeft: 8}}>
                <Text
                  style={{
                    color: Color.mainColor,
                    fontFamily: 'Poppins-SemiBold',
                    fontSize: 15,
                  }}>
                  Strawberry
                </Text>
                <View style={{flexDirection: 'row', marginTop: -7}}>
                  <Text
                    style={{
                      fontFamily: 'Poppins-Medium',
                      fontSize: 12,
                      color: '#58595B',
                    }}>
                    Price:
                  </Text>
                  <Text
                    style={{
                      fontFamily: 'Poppins-SemiBold',
                      fontSize: 12,
                      color: '#0C1E36',
                    }}>
                    {' '}
                    $ 20.55
                  </Text>
                </View>
                <View style={{flexDirection: 'row', marginTop: -7}}>
                  <Text
                    style={{
                      fontFamily: 'Poppins-Medium',
                      fontSize: 12,
                      color: '#58595B',
                    }}>
                    Quantity:
                  </Text>
                  <Text
                    style={{
                      fontFamily: 'Poppins-SemiBold',
                      fontSize: 12,
                      color: '#0C1E36',
                    }}>
                    {' '}
                    2kg
                  </Text>
                </View>
              </View>
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <TouchableOpacity>
                <Image
                  source={require('../../../assest/Image/miunsIcon.png')}
                />
              </TouchableOpacity>
              <Text
                style={{
                  color: Color.mainColor,
                  fontFamily: 'Poppins-SemiBold',
                  fontSize: 15,
                  paddingHorizontal: 10,
                }}>
                2kg
              </Text>
              <TouchableOpacity>
                <Image source={require('../../../assest/Image/plusIcon.png')} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
      <View
        style={{
          paddingHorizontal: 20,
          paddingVertical: 20,
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
          backgroundColor: 'white',
          elevation: 4,
        }}>
        <View style={{width: '100%', marginBottom: 80}}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text
              style={{
                fontSize: 15,
                fontFamily: 'Poppins-Medium',
                color: '#58595B',
              }}>
              Subtotal (4 items)
            </Text>
            <Text
              style={{
                fontSize: 15,
                fontFamily: 'Poppins-Medium',
                color: '#58595B',
              }}>
              $ 70.00
            </Text>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text
              style={{
                fontSize: 15,
                fontFamily: 'Poppins-Medium',
                color: '#58595B',
              }}>
              Delivery Charges
            </Text>
            <Text
              style={{
                fontSize: 15,
                fontFamily: 'Poppins-Medium',
                color: '#58595B',
              }}>
              $ 10.00
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginVertical: 10,
            }}>
            <Text
              style={{
                fontSize: 15,
                fontFamily: 'Poppins-SemiBold',
                color: Color.mainColor,
              }}>
              Total Amount
            </Text>
            <Text
              style={{
                fontSize: 16,
                fontFamily: 'Poppins-SemiBold',
                color: '#58595B',
              }}>
              $ 80.00
            </Text>
          </View>
          <Button
            type="normal"
            text="Checkout"
            onPress={() => navigation.navigate('CHECKOUT')}
          />
        </View>
      </View>
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({});
