import {StyleSheet, Text, View, ScrollView, Image} from 'react-native';
import React from 'react';
import {STYLES} from '../../../Constant/Style';
import Icon from 'react-native-vector-icons/FontAwesome5';
import TopHeader from '../../Components/Global/Header';
import {Color} from '../../../Constant/Color';

const Profile = () => {
  return (
    <View style={STYLES.container2}>
      <View style={{paddingHorizontal: 20}}>
        <TopHeader text="Profile" />
      </View>
      <ScrollView style={{}}>
        <View style={{paddingHorizontal: 20}}>
          <View
            style={{
              width: 120,
              height: 120,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 70,
              backgroundColor: '#F5F5F5',
              alignSelf: 'center',
            }}>
            <Icon name="user-alt" size={60} color="#D9D9D9" />
          </View>
          <Text
            style={{
              color: Color.mainColor,
              fontFamily: 'Poppins-SemiBold',
              fontSize: 20,
              textAlign: 'center',
            }}>
            Muhammad Hamza
          </Text>
          <View>
            <View
              style={{
                width: '100%',
                height: 70,
                borderRadius: 10,
                elevation: 3,
                paddingHorizontal: 10,
                flexDirection: 'row',
                alignItems: 'center',
                backgroundColor: 'white',
                marginVertical: 10,
              }}>
              <Image source={require('../../../assest/Image/setting.png')} />
              <Text
                style={{
                  marginLeft: 10,
                  color: Color.mainColor,
                  fontFamily: 'Poppins-Medium',
                  fontSize: 18,
                }}>
                Account Setting
              </Text>
            </View>
            <View
              style={{
                width: '100%',
                height: 70,
                borderRadius: 10,
                elevation: 3,
                paddingHorizontal: 10,
                flexDirection: 'row',
                alignItems: 'center',
                backgroundColor: 'white',
                marginVertical: 10,
              }}>
              <Image source={require('../../../assest/Image/password.png')} />
              <Text
                style={{
                  marginLeft: 10,
                  color: Color.mainColor,
                  fontFamily: 'Poppins-Medium',
                  fontSize: 18,
                }}>
                Password & Security
              </Text>
            </View>
            <View
              style={{
                width: '100%',
                height: 70,
                borderRadius: 10,
                elevation: 3,
                paddingHorizontal: 10,
                flexDirection: 'row',
                alignItems: 'center',
                backgroundColor: 'white',
                marginVertical: 10,
              }}>
              <Image source={require('../../../assest/Image/trackOrder.png')} />
              <Text
                style={{
                  marginLeft: 10,
                  color: Color.mainColor,
                  fontFamily: 'Poppins-Medium',
                  fontSize: 18,
                }}>
                Track Your Order
              </Text>
            </View>
            <View
              style={{
                width: '100%',
                height: 70,
                borderRadius: 10,
                elevation: 3,
                paddingHorizontal: 10,
                flexDirection: 'row',
                alignItems: 'center',
                backgroundColor: 'white',
                marginVertical: 10,
              }}>
              <Image source={require('../../../assest/Image/privacy.png')} />
              <Text
                style={{
                  marginLeft: 10,
                  color: Color.mainColor,
                  fontFamily: 'Poppins-Medium',
                  fontSize: 18,
                }}>
                Privacy Policy
              </Text>
            </View>
            <View
              style={{
                width: '100%',
                height: 70,
                borderRadius: 10,
                elevation: 3,
                paddingHorizontal: 10,
                flexDirection: 'row',
                alignItems: 'center',
                backgroundColor: 'white',
                marginVertical: 10,
              }}>
              <Image source={require('../../../assest/Image/help.png')} />
              <Text
                style={{
                  marginLeft: 10,
                  color: Color.mainColor,
                  fontFamily: 'Poppins-Medium',
                  fontSize: 18,
                }}>
                Help & Support
              </Text>
            </View>
            <View
              style={{
                width: '100%',
                height: 70,
                borderRadius: 10,
                elevation: 3,
                paddingHorizontal: 10,
                flexDirection: 'row',
                alignItems: 'center',
                backgroundColor: 'white',
                marginVertical: 10,
              }}>
              <Image source={require('../../../assest/Image/setting.png')} />
              <Text
                style={{
                  marginLeft: 10,
                  color: Color.mainColor,
                  fontFamily: 'Poppins-Medium',
                  fontSize: 18,
                }}>
                Account Setting
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({});
