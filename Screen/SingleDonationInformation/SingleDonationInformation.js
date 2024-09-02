import {View, Text, ScrollView, Image} from 'react-native';
import React from 'react';
import style from './style';
import {useSelector} from 'react-redux';
import globalStyle from '../../assets/styles/globalStyle';
import BackButton from '../../component/BackButton/BackButton';
import Badge from '../../component/Badge/Badge';
import Header from '../../component/Header/Header';
import Button from '../../component/Button/Button';

const SingleDonationInformation = ({navigation, route}) => {
  const selectedDonationItem = useSelector(
    state => state.donations.selectedDonationItem,
  );
  const categoryInformation = route.params.CategoryInformation;
  // console.log(route.params);
  return (
    <View style={[globalStyle.backgroundWhite, globalStyle.flex]}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={style.container}
        >
          <BackButton onPress={() => navigation.goBack()} />
            <Image source={{uri:selectedDonationItem.image}} style={style.image} />
            <View style={style.badge}>
              <Badge title={categoryInformation.name}/>
            </View>
            <Header type={1} title={selectedDonationItem.name} />
            <Text style={style.description}>
              {selectedDonationItem.description}
            </Text>
      </ScrollView>
      <View style={style.button}>
          <Button title={'donate'}/>
        </View>
    </View>

  );
};

export default SingleDonationInformation;
