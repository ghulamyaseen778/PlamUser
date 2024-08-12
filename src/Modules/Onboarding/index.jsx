import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {STYLES} from '../../../Constant/Style';
import {height} from '../../../Constant/Dimension';
import {Color} from '../../../Constant/Color';
import Button from '../../Components/Global/Button';
import {useNavigation} from '@react-navigation/native';

const Screen1 = ({tab, setTab, func}) => {
  return (
    <View>
      <View
        style={{
          marginTop: height / 8,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image
          style={{width: 180, height: 180}}
          source={require('../../../assest/Image/veg1.png')}
        />
      </View>
      <View
        style={{justifyContent: 'center', alignItems: 'center', marginTop: 30}}>
        <Text
          style={{
            fontFamily: 'Poppins-Medium',
            fontWeight: '500',
            fontSize: 20,
            color: Color.yellowColor,
          }}>
          We Provide
        </Text>
        <Text
          style={{
            fontFamily: 'Poppins-SemiBold',
            fontWeight: '600',
            fontSize: 28,
            color: Color.mainColor,
            width: 300,
            textAlign: 'center',
            marginTop: -10,
          }}>
          The best quality grocery to tou
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 10,
        }}>
        <View
          style={{
            width: 10,
            height: 10,
            borderRadius: 10,
            backgroundColor:
              tab == 1 ? Color.yellowColor : Color.secondaryColor,
            marginRight: 5,
          }}></View>
        <View
          style={{
            width: 10,
            height: 10,
            borderRadius: 10,
            backgroundColor:
              tab == 2 ? Color.yellowColor : Color.secondaryColor,
            marginRight: 5,
          }}></View>
        <View
          style={{
            width: 10,
            height: 10,
            borderRadius: 10,
            backgroundColor:
              tab == 3 ? Color.yellowColor : Color.secondaryColor,
            marginRight: 5,
          }}></View>
      </View>
      <View>
        <View style={{paddingHorizontal: 20, marginTop: height / 10}}>
          <Button
            style={{marginTop: 10}}
            type="normal"
            text="Next"
            onPress={() => setTab(2)}
          />
          <Button style={{marginTop: 10}} text="Skip" onPress={func} />
        </View>
      </View>
    </View>
  );
};
const Screen2 = ({tab, setTab, func}) => {
  return (
    <View>
      <View
        style={{
          marginTop: height / 8,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image
          style={{width: 180, height: 180}}
          source={require('../../../assest/Image/veg3.png')}
        />
      </View>
      <View
        style={{justifyContent: 'center', alignItems: 'center', marginTop: 30}}>
        <Text
          style={{
            fontFamily: 'Poppins-Medium',
            fontWeight: '500',
            fontSize: 20,
            color: Color.yellowColor,
          }}>
          Peace of mind
        </Text>
        <Text
          style={{
            fontFamily: 'Poppins-SemiBold',
            fontWeight: '600',
            fontSize: 28,
            color: Color.mainColor,
            width: 300,
            textAlign: 'center',
            marginTop: -10,
          }}>
          Same day delivery guaranteed
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 10,
        }}>
        <View
          style={{
            width: 10,
            height: 10,
            borderRadius: 10,
            backgroundColor:
              tab == 1 ? Color.yellowColor : Color.secondaryColor,
            marginRight: 5,
          }}></View>
        <View
          style={{
            width: 10,
            height: 10,
            borderRadius: 10,
            backgroundColor:
              tab == 2 ? Color.yellowColor : Color.secondaryColor,
            marginRight: 5,
          }}></View>
        <View
          style={{
            width: 10,
            height: 10,
            borderRadius: 10,
            backgroundColor:
              tab == 3 ? Color.yellowColor : Color.secondaryColor,
            marginRight: 5,
          }}></View>
      </View>
      <View>
        <View style={{paddingHorizontal: 20, marginTop: height / 10}}>
          <Button
            style={{marginTop: 10}}
            type="normal"
            text="Next"
            onPress={() => setTab(3)}
          />
          <Button style={{marginTop: 10}} text="Skip" onPress={func} />
        </View>
      </View>
    </View>
  );
};
const Screen3 = ({tab, setTab, func}) => {
  return (
    <View>
      <View
        style={{
          marginTop: height / 8,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image
          style={{width: 180, height: 180}}
          source={require('../../../assest/Image/veg1.png')}
        />
      </View>
      <View
        style={{justifyContent: 'center', alignItems: 'center', marginTop: 30}}>
        <Text
          style={{
            fontFamily: 'Poppins-Medium',
            fontWeight: '500',
            fontSize: 20,
            color: Color.yellowColor,
          }}>
          Big saving
        </Text>
        <Text
          style={{
            fontFamily: 'Poppins-SemiBold',
            fontWeight: '600',
            fontSize: 28,
            color: Color.mainColor,
            width: 300,
            textAlign: 'center',
            marginTop: -10,
          }}>
          With seasonal discounts
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 10,
        }}>
        <View
          style={{
            width: 10,
            height: 10,
            borderRadius: 10,
            backgroundColor:
              tab == 1 ? Color.yellowColor : Color.secondaryColor,
            marginRight: 5,
          }}></View>
        <View
          style={{
            width: 10,
            height: 10,
            borderRadius: 10,
            backgroundColor:
              tab == 2 ? Color.yellowColor : Color.secondaryColor,
            marginRight: 5,
          }}></View>
        <View
          style={{
            width: 10,
            height: 10,
            borderRadius: 10,
            backgroundColor:
              tab == 3 ? Color.yellowColor : Color.secondaryColor,
            marginRight: 5,
          }}></View>
      </View>
      <View>
        <View style={{paddingHorizontal: 20, marginTop: height / 6}}>
          <Button
            style={{marginTop: 10}}
            type="normal"
            text="Get Started"
            onPress={func}
          />
        </View>
      </View>
    </View>
  );
};

const OnBoarding = () => {
  const [tab, setTab] = useState(1);
  const navigation = useNavigation();
  const func = () => {
    navigation.navigate('LOGIN');
  };
  return (
    <ScrollView style={STYLES.container2}>
      {tab == 1 ? (
        <Screen1 tab={tab} setTab={setTab} func={func} />
      ) : tab == 2 ? (
        <Screen2 tab={tab} setTab={setTab} func={func} />
      ) : tab == 3 ? (
        <Screen3 tab={tab} setTab={setTab} func={func} />
      ) : (
        <></>
      )}
    </ScrollView>
  );
};

export default OnBoarding;

const styles = StyleSheet.create({});
