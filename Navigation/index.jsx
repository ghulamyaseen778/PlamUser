import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../src/Modules/Home';
import AntdIcon from 'react-native-vector-icons/AntDesign';
import {Color} from '../Constant/Color';
import {width} from '../Constant/Dimension';
import {useNavigation} from '@react-navigation/native';
import Cart from '../src/Modules/Cart';
import Explore from '../src/Modules/Explore';
import Favorite from '../src/Modules/Favorite';
import Profile from '../src/Modules/Profile';

const Tab = createBottomTabNavigator();

const BottomTabNavigation = () => {
  const [isSelected, setIsSelected] = useState('HOME');
  const navigation = useNavigation();
  const Tabs = [
    {
      id: 'HOME',
      label: 'Home',
      Icon: 'home',
    },
    {
      id: 'EXPLORE',
      label: 'Explore',
      Icon: 'search1',
    },
    {
      id: 'CART',
      label: 'Cart',
      Icon: 'shoppingcart',
    },
    {
      id: 'FAVORITE',
      label: 'Favorite',
      Icon: 'hearto',
    },
    {
      id: 'PROFILE',
      label: 'Proﬁle',
      Icon: 'user',
    },
  ];
  return (
    <>
      <View
        style={{
          width: width,
          height: 80,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          backgroundColor: Color.whiteColor,
          elevation: 8,
          shadowOpacity: 0.6,
          position: 'absolute',
          zIndex: 2,
          bottom: 0,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingHorizontal: 10,
        }}>
        {Tabs.map(item => {
          return (
            <TouchableOpacity
              onPress={() => {
                setIsSelected(item.id);
                navigation.navigate(item?.id);
              }}
              style={{alignItems: 'center', position: 'relative'}}
              key={item.id}>
              <AntdIcon
                name={item.Icon}
                size={25}
                color={isSelected == item.id ? Color.yellowColor : '#808285'}
              />
              <Text
                style={{
                  color: isSelected == item.id ? Color.yellowColor : '#808285',
                  fontSize: 14,
                  fontFamily: 'Poppins-medium',
                  fontWeight: '400',
                }}>
                {item.label}
              </Text>
              {item.id == 'CART' && (
                <View
                  style={{
                    position: 'absolute',
                    width: 15,
                    height: 15,
                    borderRadius: 8,
                    backgroundColor: Color.mainColor,
                    top: 0,
                    right: -6,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Text style={{color: Color.whiteColor, fontSize: 10}}>9</Text>
                </View>
              )}
            </TouchableOpacity>
          );
        })}
      </View>
      <Tab.Navigator
        screenOptions={{headerShown: false, tabBarStyle: {display: 'none'}}}
        initialRouteName="HOME">
        <Tab.Screen name="HOME" component={HomeScreen} />
        <Tab.Screen name="CART" component={Cart} />
        <Tab.Screen name="EXPLORE" component={Explore} />
        <Tab.Screen name="FAVORITE" component={Favorite} />
        <Tab.Screen name="PROFILE" component={Profile} />
      </Tab.Navigator>
    </>
  );
};

export default BottomTabNavigation;

const styles = StyleSheet.create({});
