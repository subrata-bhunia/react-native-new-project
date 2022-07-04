import {StyleSheet, Text, View, ImageBackground} from 'react-native';
import React from 'react';
import PropTypes from 'prop-types';
import {COLORS, FONTS, IMAGES} from '../themes/Themes';
import normalize from '../utils/helpers/normalize';
import GradientButton from './GradientButton';
const ImageBackgroundWithText = props => {
  return (
    <View style={{marginVertical: normalize(20)}}>
      <ImageBackground
        source={props.back_image}
        style={{
          height: normalize(230),
          width: '98%',
          alignSelf: 'center',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        imageStyle={{
          alignSelf: 'center',
          resizeMode: 'cover',
          borderRadius: 10,
          height: '100%',
          width: '100%',
        }}>
        <Text
          style={{
            fontFamily: FONTS.Poppins_Bold,
            fontSize: normalize(20),
            color: COLORS.white,
            elevation: 10,
            textShadowColor: 'rgba(0, 0, 0, 0.75)',
            textShadowOffset: {width: -1, height: 1},
            textShadowRadius: 10,
          }}>
          {props.title}
        </Text>
      </ImageBackground>
      <View
        style={{
          marginVertical: normalize(15),
          padding: normalize(25),
          backgroundColor: COLORS.primary,
        }}>
        <Text
          style={{
            fontFamily: FONTS.Roboto_Regular,
            textAlign: 'center',
            fontSize: normalize(15),
            lineHeight: normalize(20),
            color: COLORS.white,
          }}>
          {props.sub_title}
        </Text>
      </View>
      <GradientButton title="View More" onPress={props.onPress} />
    </View>
  );
};

ImageBackgroundWithText.propTypes = {
  title: PropTypes.string,
  onPress: PropTypes.func,
  back_image: PropTypes.any,
  sub_title: PropTypes.string,
};

ImageBackgroundWithText.defaultProps = {
  title: '',
  onPress: () => console.log('Extra'),
  sub_title: '',
};

export default ImageBackgroundWithText;

const styles = StyleSheet.create({});
