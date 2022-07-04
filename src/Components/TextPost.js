import {StyleSheet, Text, View, ImageBackground, Image} from 'react-native';
import React from 'react';
import PropTypes from 'prop-types';
import {COLORS, FONTS, ICONS, IMAGES} from '../themes/Themes';
import normalize from '../utils/helpers/normalize';
import GradientButton from './GradientButton';
const TextPost = props => {
  return (
    <View style={{marginVertical: normalize(10), borderRadius: normalize(10)}}>
      <View
        style={{
          // height: normalize(230),
          width: '95%',
          alignSelf: 'center',
          borderRadius: normalize(10),
          elevation: 10,
          shadowColor: 'rgba(0, 0, 0, 0.75)',
          shadowOffset: {width: -1, height: 1},
          shadowRadius: 10,
          backgroundColor: '#fff',
        }}>
        <View
          style={{
            padding: normalize(15),
            borderRadius: normalize(10),
          }}>
          <Text
            style={{
              fontFamily: FONTS.Poppins_Bold,
              fontSize: normalize(14),
              color: COLORS.black,
            }}>
            {props.title}
          </Text>
          <Text
            style={{
              fontFamily: FONTS.Poppins_Medium,
              fontSize: normalize(12),
              color: COLORS.primary,
            }}>
            {props.post_by}
          </Text>
          <Text
            style={{
              fontFamily: FONTS.Roboto_Regular,
              fontSize: normalize(12),
              lineHeight: normalize(20),
              color: COLORS.black,
            }}>
            {props.sub_title}
          </Text>
        </View>
      </View>
    </View>
  );
};

TextPost.propTypes = {
  title: PropTypes.string,
  onPress: PropTypes.func,
  back_image: PropTypes.any,
  sub_title: PropTypes.string,
  post_by: PropTypes.string,
};

TextPost.defaultProps = {
  title: '',
  onPress: () => console.log('Extra'),
  sub_title: '',
  post_by: '',
};

export default TextPost;

const styles = StyleSheet.create({});
