import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import React from 'react';
import {Color} from '../../../Constant/Color';
import TopHeader from '../../Components/Global/Header';
import {STYLES} from '../../../Constant/Style';

const Favorite = () => {
  return (
    <View style={STYLES.container2}>
      <View style={{paddingHorizontal: 20}}>
        <TopHeader text="Explore" />
      </View>
      <ScrollView style={{width: '100%'}}>
        <View style={{paddingHorizontal: 20}}>
          <View
            style={{
              justifyContent: 'space-between',
              flexDirection: 'row',
              borderBottomWidth: 1,
              paddingBottom: 10,
              borderColor: '#B7B7B7',
              marginTop: 10,
              alignItems: 'center',
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
            <View style={{}}>
              <TouchableOpacity>
                <Text
                  style={{
                    color: Color.yellowColor,
                    fontFamily: 'Poppins-Medium',
                    fontSize: 14,
                  }}>
                  Add to cart
                </Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text
                  style={{
                    color: '#F00',
                    fontFamily: 'Poppins-Medium',
                    fontSize: 14,
                    textAlign: 'right',
                    marginTop: -6,
                  }}>
                  Delete
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Favorite;

const styles = StyleSheet.create({});
