import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {STYLES} from '../../../../Constant/Style';
import {Color} from '../../../../Constant/Color';
import Button from '../../../Components/Global/Button';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';

const Rating = () => {
  const [stars, setStars] = useState(0);
  const navigation = useNavigation();
  return (
    <ScrollView style={[STYLES.container2, {marginBottom: 50}]}>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          height: '100%',
          width: '100%',
        }}>
        <Text
          style={{
            fontFamily: 'Poppins-SemiBold',
            fontSize: 20,
            color: Color.mainColor,
            width: '60%',
            marginTop: 20,
            textAlign: 'center',
          }}>
          Your Order has been Delivered Successfully
        </Text>
        <Image
          style={{paddingVertical: 10, width: '70%', marginTop: 20}}
          resizeMode="contain"
          source={require('../../../../assest/Image/rating.png')}
        />
        <Text
          style={{
            fontFamily: 'Poppins-SemiBold',
            fontSize: 20,
            color: Color.mainColor,
            width: '60%',
            // marginTop:10,
            textAlign: 'center',
          }}>
          Rating
        </Text>
        <View
          style={{
            alignItems: 'center',
            flexDirection: 'row',
            marginVertical: 10,
            marginBottom: 15,
          }}>
          <TouchableOpacity onPress={() => setStars(stars == 0 ? 1 : 0)}>
            <Icon
              name={stars >= 1 ? 'star' : 'star-o'}
              color={Color.yellowColor}
              size={25}
            />
          </TouchableOpacity>
          <View style={{marginHorizontal: 2}} />
          <TouchableOpacity onPress={() => setStars(2)}>
            <Icon
              name={stars >= 2 ? 'star' : 'star-o'}
              color={Color.yellowColor}
              size={25}
            />
          </TouchableOpacity>
          <View style={{marginHorizontal: 2}} />
          <TouchableOpacity onPress={() => setStars(3)}>
            <Icon
              name={stars >= 3 ? 'star' : 'star-o'}
              color={Color.yellowColor}
              size={25}
            />
          </TouchableOpacity>
          <View style={{marginHorizontal: 2}} />
          <TouchableOpacity onPress={() => setStars(4)}>
            <Icon
              name={stars >= 4 ? 'star' : 'star-o'}
              color={Color.yellowColor}
              size={25}
            />
          </TouchableOpacity>
          <View style={{marginHorizontal: 2}} />
          <TouchableOpacity onPress={() => setStars(5)}>
            <Icon
              name={stars >= 5 ? 'star' : 'star-o'}
              color={Color.yellowColor}
              size={25}
            />
          </TouchableOpacity>
          <View style={{marginHorizontal: 2}} />
        </View>
        <View style={{paddingHorizontal: 20, width: '100%'}}>
          <TextInput
            placeholder="About"
            style={{
              width: '100%',
              borderRadius: 10,
              backgroundColor: '#E9EAEC',
              textAlignVertical: 'top',
              padding: 10,
              fontFamily: 'Poppins-Medium',
              fontSize: 16,
              color: Color.mainColor,
            }}
            multiline={true}
            numberOfLines={6}
          />
          <View style={{marginTop: 20}}>
            <Button text="Done" type="normal" />
          </View>
          <View style={{marginTop: 10}}>
            <Button
              text="Back to home"
              onPress={() => navigation.navigate('HOME')}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Rating;

const styles = StyleSheet.create({});
