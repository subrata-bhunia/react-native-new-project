import {StyleSheet, Text, View, ImageBackground, Image} from 'react-native';
import React from 'react';
import PropTypes from 'prop-types';
import {COLORS, FONTS, ICONS, IMAGES} from '../themes/Themes';
import normalize from '../utils/helpers/normalize';
import GradientButton from './GradientButton';
const PostCard = props => {
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
        <ImageBackground
          source={props.back_image}
          style={{
            height: normalize(120),
            width: '100%',
            alignSelf: 'center',
            justifyContent: 'center',
            alignItems: 'center',
            borderTopLeftRadius: normalize(10),
            borderTopRightRadius: normalize(10),
            backgroundColor: COLORS.black,
          }}
          imageStyle={{
            alignSelf: 'center',
            resizeMode: 'cover',
            borderTopLeftRadius: normalize(10),
            borderTopRightRadius: normalize(10),
            height: '100%',
            width: '100%',
            opacity: props.opacity,
          }}>
          {props.post_type == 'video' ? (
            <Image
              source={ICONS.video_red_icon}
              style={{
                height: normalize(25),
                width: normalize(25),
                resizeMode: 'center',
              }}
            />
          ) : null}
        </ImageBackground>
        <View
          style={{
            padding: normalize(10),
            borderRadius: normalize(10),
          }}>
          <Text
            style={{
              fontFamily: FONTS.Poppins_Medium,
              fontSize: normalize(14),
              color: COLORS.black,
            }}>
            {props.title}
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

PostCard.propTypes = {
  title: PropTypes.string,
  onPress: PropTypes.func,
  back_image: PropTypes.any,
  sub_title: PropTypes.string,
  post_type: PropTypes.string,
  opacity: PropTypes.number,
};

PostCard.defaultProps = {
  title: '',
  onPress: () => console.log('Extra'),
  sub_title: '',
  post_type: 'image',
  opacity: 0.7,
};

export default PostCard;

const styles = StyleSheet.create({});
