import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import TopHeader from '../Header';
import {STYLES} from '../../../../Constant/Style';
import {Color} from '../../../../Constant/Color';
import Icon from 'react-native-vector-icons/Ionicons';

const SearchScreen = () => {
  const [tabs, setTabs] = useState([
    {
      id: 1,
      name: 'All Products',
    },
    {
      id: 2,
      name: 'Vegetables',
    },
    {
      id: 3,
      name: 'Fruits',
    },
    {
      id: 4,
      name: 'Meats',
    },
    {
      id: 5,
      name: 'Fish',
    },
  ]);
  const [selectedTab, setSelectedTab] = useState(1);
  return (
    <ScrollView style={[STYLES.container2]}>
      <View style={{paddingHorizontal: 20}}>
        <TopHeader withLogo isInput isBack />
        <FlatList
          data={tabs}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) =>
            item?.id == selectedTab ? (
              <TouchableOpacity
              onPress={()=>setSelectedTab(item.id)}
                style={{
                  backgroundColor: Color.mainColor,
                  paddingHorizontal: 16,
                  paddingVertical: 6,
                  borderRadius: 20,
                  marginRight: 10,
                }}>
                <Text
                  style={{
                    fontSize: 12,
                    fontFamily: 'Poppins-Regular',
                    fontWeight: '400',
                    color: Color.whiteColor,
                  }}>
                  {item?.name}
                </Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
              onPress={()=>setSelectedTab(item.id)}
                style={{
                  backgroundColor: '#D9D9D9',
                  paddingHorizontal: 16,
                  paddingVertical: 6,
                  borderRadius: 20,
                  marginRight: 10,
                }}>
                <Text
                  style={{
                    fontSize: 12,
                    fontFamily: 'Poppins-Regular',
                    fontWeight: '400',
                    color: '#58595B',
                  }}>
                  {item?.name}
                </Text>
              </TouchableOpacity>
            )
          }
        />
        <View style={{marginTop: 10}}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              // marginTop: 20,
            }}>
            <Text
              style={{
                fontSize: 18,
                fontFamily: 'Poppins-SemiBold',
                fontWeight: '600',
                color: Color.mainColor,
              }}>
              Recent
            </Text>
            <TouchableOpacity>
              <Text
                style={{
                  fontSize: 15,
                  fontFamily: 'Poppins-Regular',
                  fontWeight: '400',
                  color: Color.yellowColor,
                }}>
                Clear
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{marginTop: 10}}>
          <View
            style={{
              justifyContent: 'space-between',
              alignItems: 'center',
              flexDirection: 'row',
              marginVertical: 5,
            }}>
            <Text
              style={{
                color: '#58595B',
                fontWeight: '500',
                fontSize: 14,
                fontFamily: 'Poppins-Medium',
              }}>
              Cluster beans
            </Text>
            <TouchableOpacity>
              <Icon name="close" size={18} color="#58595B" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({});
