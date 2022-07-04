import {StyleSheet, Text, View, ImageBackground, Image} from 'react-native';
import React from 'react';
import PropTypes from 'prop-types';
import {COLORS, FONTS, ICONS, IMAGES} from '../themes/Themes';
import normalize from '../utils/helpers/normalize';

const AdCard = props => {
  return (
    <View style={{marginVertical: normalize(20)}}>
      <View
        style={{
          width: '95%',
          alignSelf: 'center',
          backgroundColor: '#fff',
          borderWidth: 1,
          borderColor: COLORS.adBorderColor,
        }}>
        <ImageBackground
          source={props.back_image}
          style={{
            height: normalize(200),
            width: '100%',
            alignSelf: 'center',
            alignItems: 'flex-end',
          }}
          imageStyle={{
            alignSelf: 'center',
            resizeMode: 'cover',
            height: '100%',
            width: '100%',
          }}>
          <View style={{flexDirection: 'row'}}>
            <Image
              source={ICONS.play_icon}
              style={{
                height: normalize(20),
                width: normalize(20),
                marginRight: normalize(2),
              }}
            />
            <Image
              source={ICONS.cross_icon_blue}
              style={{
                height: normalize(20),
                width: normalize(20),
                marginLeft: normalize(2),
              }}
            />
          </View>
        </ImageBackground>
        <View
          style={{
            padding: normalize(10),
            borderRadius: normalize(10),
          }}>
          <Text
            style={{
              fontFamily: FONTS.Poppins_Bold,
              fontSize: normalize(13),
              color: COLORS.black,
            }}>
            {props.title}
          </Text>
          <View
            style={{
              width: normalize(60),
              height: normalize(2),
              marginVertical: normalize(10),
              backgroundColor: COLORS.primary,
            }}
          />
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

AdCard.propTypes = {
  title: PropTypes.string,
  onPress: PropTypes.func,
  back_image: PropTypes.any,
  sub_title: PropTypes.string,
  post_type: PropTypes.string,
  height: PropTypes.number,
};

AdCard.defaultProps = {
  title: '',
  onPress: () => console.log('Extra'),
  sub_title: '',
  post_type: 'image',
  height: normalize(250),
};

export default AdCard;

const styles = StyleSheet.create({});
