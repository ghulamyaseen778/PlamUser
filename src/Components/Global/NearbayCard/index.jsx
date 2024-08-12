import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';

const NearbyCard = () => {
  const [fav, setFav] = useState(false);
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('MART_DETAILS')}
      activeOpacity={0.8}
      style={{
        width: '100%',
        backgroundColor: 'white',
        elevation: 4,
        marginVertical: 10,
        borderRadius: 10,
        position: 'relative',
      }}>
      <Image
        source={require('../../../../assest/Image/cardImg.png')}
        style={{width: '100%', borderRadius: 10, height: 150}}
      />
      <View style={{padding: 10}}>
        <Text
          style={{
            fontSize: 18,
            fontWeight: '500',
            fontFamily: 'Poppins-Medium',
            color: '#231F20',
          }}>
          SM Mart
        </Text>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image
              style={{width: 15, height: 15}}
              resizeMode="contain"
              source={require('../../../../assest/Image/locationIcon.png')}
            />
            <Text
              style={{
                fontSize: 14,
                fontFamily: 'Poppins-Regular',
                color: '#58595B',
                marginLeft: 5,
              }}>
              1.5 miles away
            </Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Image
              style={{width: 15, height: 15}}
              source={require('../../../../assest/Image/starIcon.png')}
            />
            <Text
              style={{
                fontSize: 14,
                fontFamily: 'Poppins-Regular',
                color: '#58595B',
                marginLeft: 5,
              }}>
              4.8
            </Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Image
              style={{width: 15, height: 15}}
              source={require('../../../../assest/Image/clock.png')}
            />
            <Text
              style={{
                fontSize: 14,
                fontFamily: 'Poppins-Regular',
                color: '#58595B',
                marginLeft: 5,
              }}>
              20-25 min
            </Text>
          </View>
        </View>
      </View>
      <TouchableOpacity
        style={{
          borderRadius: 50,
          padding: 7,
          backgroundColor: 'white',
          position: 'absolute',
          right: 10,
          top: 10,
        }}
        onPress={() => setFav(!fav)}>
        {fav ? (
          <Icon name="heart" size={20} color="#ED1C24" />
        ) : (
          <Icon name="hearto" size={20} color="#ED1C24" />
        )}
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

export default NearbyCard;

const styles = StyleSheet.create({});
