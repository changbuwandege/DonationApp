import React, {useEffect, useState} from 'react';
import {View, Text, Pressable, Image, ScrollView, FlatList} from 'react-native';
import Header from '../../component/Header/Header';
import {useDispatch, useSelector} from 'react-redux';
import globalStyle from '../../assets/styles/globalStyle';
import style from './style';
import Search from '../../component/Search/Search';
import Tab from '../../component/Tab/Tab';
import {updateSelectedCategoryId} from '../../redux/reducers/Categories';
import {resetDonations} from '../../redux/reducers/Donations';
import SingleDonationItem from '../../component/SingleDonationItem/SingleDonationItem';
import {updateSelectedDonationId} from '../../redux/reducers/Donations';
import {Routes} from '../../navigation/Routes';

const Home = ({navigation}) => {
  const user = useSelector(state => state.user);
  const categories = useSelector(state => state.categories);
  const donations = useSelector(state => state.donations);
  const dispatch = useDispatch();
  // dispatch(resetDonations())
  const [isLoading, setIsLoading] = useState(false);
  const [pageNumber, setPageNumber] = useState(1);
  const [categoryList, setCategoryList] = useState([]);
  const pageSize = 4;
  const [donationsList, setDonationsList] = useState([]);
  // console.log(donationsList)
  useEffect(() => {
    const items = donations.items;
    const filteredItem = items.filter(item =>
      item.categoryIds.includes(categories.selectedCategoryId),
    );
    // console.log(filteredItem)
    setDonationsList(filteredItem);
  }, [categories.selectedCategoryId, donations.items]);
  useEffect(() => {
    setIsLoading(true);
    setCategoryList(
      getCategoryNewData(categories.categories, pageNumber, pageSize),
    );
    setPageNumber(prev => prev + 1);
    setIsLoading(false);
  }, []);

  const getCategoryNewData = (data, pageNumber, pageSize) => {
    const startIndex = (pageNumber - 1) * pageSize;
    if (startIndex >= data.length) {
      return [];
    }
    return data.slice(startIndex, startIndex + pageSize);
  };

  return (
    <View style={[globalStyle.backgroundWhite, globalStyle.flex]}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={style.header}>
          <View>
            <Text style={style.headerIntroText}>Hello,</Text>
            <View style={style.userName}>
              <Header title={user.firstName + ' ' + user.lastName[0] + '.👋'} />
            </View>
          </View>
          <Image
            source={{uri: user.profileImage}}
            style={style.profileImage}
            resizeMode={'contain'}
            onError={error => console.log('Image loading error:', error)}
          />
        </View>
        <View style={style.searchBox}>
          <Search placeholder={'Search'} />
        </View>
        <Pressable style={style.highlightedImageContainer}>
          <Image
            style={style.highlightedImage}
            source={require('../../assets/images/Mask.png')}
            resizeMode={'contain'}
          />
        </Pressable>
        <View style={style.categoryHeader}>
          <Header title={'Select Category'} type={2} />
        </View>
        <View style={style.categories}>
          <FlatList
            onEndReachedThreshold={0.5}
            onEndReached={() => {
              if (isLoading) {
                return;
              }
              setIsLoading(true);
              let newData = getCategoryNewData(
                categories.categories,
                pageNumber,
                pageSize,
              );
              if (newData.length > 0) {
                setCategoryList(prev => [...prev, ...newData]);
                setPageNumber(prev => prev + 1);
              }
              setIsLoading(false);
            }}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={categoryList}
            renderItem={({item}) => (
              <View style={style.categoryItem} key={item.categoryId}>
                <Tab
                  tabId={item.categoryId}
                  onPress={value => dispatch(updateSelectedCategoryId(value))}
                  title={item.name}
                  isInactive={item.categoryId !== categories.selectedCategoryId}
                />
              </View>
            )}
          />
        </View>
        {donationsList.length > 0 && (
          <View style={style.donationItemContainer}>
            {donationsList.map(value => {
              const CategoryInformation = categories.categories.find(
                val => val.categoryId === categories.selectedCategoryId,
              );
              return (
                <View
                  key={value.donationItemId}
                  style={style.singleDonationItem}>
                  <SingleDonationItem
                    onPress={selectedDonationId => {
                      dispatch(updateSelectedDonationId(selectedDonationId));
                      navigation.navigate(Routes.SingleDonationInformation, {
                        CategoryInformation,
                      });
                      // console.log(selectedDonationId);
                    }}
                    donationItemId={value.donationItemId}
                    uri={value.image}
                    badgeTitle={CategoryInformation.name}
                    donationTitle={value.name}
                    price={parseFloat(value.price)}
                  />
                </View>
              );
            })}
          </View>
        )}
      </ScrollView>
    </View>
  );
};

export default Home;
