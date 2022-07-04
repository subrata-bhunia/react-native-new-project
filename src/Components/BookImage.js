import {StyleSheet, Text, View, ImageBackground, Image} from 'react-native';
import React from 'react';
import PropTypes from 'prop-types';
import {COLORS, FONTS, ICONS, IMAGES} from '../themes/Themes';
import normalize from '../utils/helpers/normalize';
import GradientButton from './GradientButton';

export default function BookImage(props) {
  return (
    <View
      style={{
        margin: 10,
      }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: '95%',
          alignSelf: 'center',
          height: normalize(430),
        }}>
        <View
          style={{
            height: normalize(390),
            width: normalize(250),
            backgroundColor: COLORS.primary,
          }}
        />
        <View
          style={{
            height: normalize(80),
            width: normalize(110),
            backgroundColor: COLORS.primary,
            alignSelf: 'flex-end',
            marginLeft: -normalize(90),
          }}
        />
      </View>
      <Image
        source={props.book_image}
        style={{
          width: '80%',
          height: normalize(400),
          alignSelf: 'center',
          position: 'absolute',
          top: normalize(15),
        }}
      />
    </View>
  );
}

BookImage.propTypes = {
  book_image: PropTypes.any,
};

BookImage.defaultProps = {
  book_image: '',
};
