import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {STYLES} from '../../../Constant/Style';
import TopHeader from '../../Components/Global/Header';
import {Color} from '../../../Constant/Color';
import {useNavigation} from '@react-navigation/native';

const Category = () => {
  const colors = ['#F9BA8B', '#C7D8A5', '#F5E0BA', '#F1AEB0', '#EFE68F'];
  const [previous, setPrevious] = useState();
  const navigation = useNavigation();
  const [data, setData] = useState([
    {
      id: 1,
      name: 'Vegetables',
      img: require('../../../assest/Image/veg4.png'),
      color: colors[0],
      data: [
        {
          id: 1,
          img: require('../../../assest/Image/veg5.png'),
          name: 'Tomato',
          type:"Vegetables"
        },
        {
          id: 2,
          img: require('../../../assest/Image/veg6.png'),
          name: 'Capsicum',
          type:"Vegetables"
        },
      ],
    },
    {
      id: 2,
      name: 'Fruits',
      img: require('../../../assest/Image/furit2.png'),
      color: colors[1],
      data: [
        {
          id: 1,
          img: require('../../../assest/Image/fruit6.png'),
          name: 'Mango',
          type:"Fruits"
        },
        {
          id: 2,
          img: require('../../../assest/Image/fruit3.png'),
          name: 'Strawberry',
          type:"Fruits"
        },
      ],
    },
    {
      id: 3,
      name: 'Meats',
      img: require('../../../assest/Image/meat2.png'),
      color: colors[2],
    },
    {
      id: 4,
      name: 'Fish',
      img: require('../../../assest/Image/fish2.png'),
      color: colors[0],
    },
    {
      id: 5,
      name: 'Drinks',
      img: require('../../../assest/Image/drinks.png'),
      color: colors[3],
    },
    {
      id: 6,
      name: 'Breads',
      img: require('../../../assest/Image/bread.png'),
      color: colors[4],
    },
    {
      id: 7,
      name: 'Breads',
      img: require('../../../assest/Image/bread.png'),
      color: colors[2],
    },
    {
      id: 8,
      name: 'Breads',
      img: require('../../../assest/Image/bread.png'),
      color: colors[1],
    },
  ]);
  const genColor = () => {
    let index = Math.floor(Math.random() * colors.length);
    setPrevious(index);
    return index;
  };
  return (
    <View style={[STYLES.container2]}>
      <View style={{paddingHorizontal: 20, marginBottom: 60}}>
        <TopHeader isBack text="Category" />
        <FlatList
          showsVerticalScrollIndicator={false}
          data={data}
          renderItem={({item}) => (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('PRODUCTS_SCREEN', {
                  name: item.name,
                  data: item.data,
                })
              }
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                backgroundColor: item.color,
                borderRadius: 10,
                width: '100%',
                paddingHorizontal: 10,
                paddingVertical: 15,
                marginVertical: 5,
              }}>
              <View>
                <Text
                  style={{
                    color: Color.mainColor,
                    fontFamily: 'Poppins-SemiBold',
                    fontSize: 18,
                    fontWeight: '600',
                  }}>
                  {item.name}
                </Text>
                <Text
                  style={{
                    color: '#4D4D4D',
                    fontFamily: 'Poppins-Medium',
                    fontSize: 15,
                    fontWeight: '500',
                  }}>
                  Lets Order some {item.name}
                </Text>
              </View>
              <Image
                resizeMode="contain"
                style={{width: 70, height: 70, borderRadius: 100}}
                source={item.img}
              />
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
};

export default Category;

const styles = StyleSheet.create({});
