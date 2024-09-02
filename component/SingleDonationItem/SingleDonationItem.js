import {View, Text, Image, Pressable} from 'react-native';
import React from 'react';
import {PropTypes} from 'prop-types';
import Badge from '../Badge/Badge';
import Header from '../Header/Header';
import style from './style';

const SingleDonationItem = props => {
  // console.log(props);
  return (
    <Pressable onPress={() => {props.onPress(props.donationItemId)}}>
      <View>
        <View style={style.badge}>
          <Badge title={props.badgeTitle} />
        </View>
        <View style={style.imageContainer}>
            <Image source={{uri: props.uri}} style={style.image} />
        </View>
      </View>
      <View style={style.donationInformation}>
        <Header title={props.donationTitle} type={3} color={'#0A043C'} numberOfLine={1}/>
        <View style={style.price}>
          <Header
            title={'$' + (props.price ? props.price.toFixed(2) : '0.00')}
            type={3}
            color={'#156CF7'}
          />
        </View>
      </View>
    </Pressable>
  );
};
SingleDonationItem.default = {
  onPress: () => {},
}

SingleDonationItem.propTypes = {
  donationItemId: PropTypes.number.isRequired,
  uri: PropTypes.string.isRequired,
  badgeTitle: PropTypes.string.isRequired,
  donationTitle: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  onPress: PropTypes.func,
};

export default SingleDonationItem;
