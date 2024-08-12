import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {STYLES} from '../../../../Constant/Style';
import TopHeader from '../../../Components/Global/Header';
import {Color} from '../../../../Constant/Color';
import Icon from 'react-native-vector-icons/Feather';
import Button from '../../../Components/Global/Button';
import { useNavigation } from '@react-navigation/native';

const TrackOrder = () => {
  const navigation = useNavigation()
  return (
    <View style={STYLES.container2}>
      <View style={{paddingHorizontal: 20}}>
        <TopHeader text="Track your order" isBack />
      </View>
      <ScrollView style={[STYLES.container, {marginTop: 20}]}>
        <Text
          style={{
            color: '#58595B',
            fontSize: 14,
            fontFamily: 'Poppins-Regular',
            textAlign: 'center',
          }}>
          Estimated delivery time updated
        </Text>
        <Text
          style={{
            color: Color.mainColor,
            fontSize: 18,
            fontFamily: 'Poppins-SemiBold',
            textAlign: 'center',
          }}>
          05 mins
        </Text>
        <View style={{paddingHorizontal: 20}}>
          <View
            style={{
              backgroundColor: 'rgba(254, 204, 18, 0.25)',
              width: '100%',
              borderRadius: 10,
              padding: 10,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginTop: 10,
            }}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <View
                style={{
                  backgroundColor: Color.yellowColor,
                  width: 65,
                  height: 65,
                  borderRadius: 40,
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderWidth: 2,
                  borderColor: Color.whiteColor,
                }}>
                <Image source={require('../../../../assest/Image/bike.png')} />
              </View>
              <View style={{marginLeft: 5}}>
                <Text
                  style={{
                    color: Color.mainColor,
                    fontSize: 16,
                    fontFamily: 'Poppins-SemiBold',
                  }}>
                  Contact your rider
                </Text>
                <Text
                  style={{
                    color: '#58595B',
                    fontSize: 14,
                    fontFamily: 'Poppins-Regular',
                    marginTop: -6,
                  }}>
                  Ask for contactless delivery
                </Text>
              </View>
            </View>
            <TouchableOpacity>
              <Icon name="phone-call" size={30} color={Color.mainColor} />
            </TouchableOpacity>
          </View>
          <View
            style={{
              backgroundColor: 'rgba(254, 204, 18, 0.25)',
              width: '100%',
              borderRadius: 10,
              padding: 10,
              marginTop: 10,
            }}>
            <View style={{marginLeft: 5}}>
              <Text
                style={{
                  color: Color.mainColor,
                  fontSize: 16,
                  fontFamily: 'Poppins-SemiBold',
                }}>
                Order Detail
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                <Text
                  style={{
                    color: '#58595B',
                    fontSize: 14,
                    fontFamily: 'Poppins-Regular',
                    marginTop: -6,
                  }}>
                  Order number
                </Text>
                <Text
                  style={{
                    color: '#58595B',
                    fontSize: 16,
                    fontFamily: 'Poppins-SemiBold',
                    marginTop: -6,
                  }}>
                  456466
                </Text>
              </View>
            </View>
          </View>
          <View style={{marginTop: 20}}>
            <Button type="normal" text="Back to home" onPress={()=>navigation.navigate("RATING")} />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default TrackOrder;

const styles = StyleSheet.create({});
