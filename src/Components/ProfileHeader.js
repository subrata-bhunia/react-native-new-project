import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  ImageBackground,
} from 'react-native';
import React from 'react';
import PropTypes from 'prop-types';
import normalize from '../utils/helpers/normalize';
import {COLORS, FONTS, ICONS, IMAGES} from '../themes/Themes';
import {useNavigation} from '@react-navigation/native';
const ProfileHeader = props => {
  const navigation = useNavigation();
  return (
    <ImageBackground
      source={props.back_image}
      imageStyle={{
        resizeMode: 'cover',
        opacity: 0.6,
      }}
      style={{
        height: props.height,
        width: props.width,
        backgroundColor: COLORS.black,
      }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: normalize(15),
        }}>
        <Pressable onPress={() => navigation.goBack()}>
          <Image source={ICONS.arrow_left} />
        </Pressable>
        <Text
          style={{
            fontFamily: FONTS.Poppins_Medium,
            fontSize: normalize(18),
            color: COLORS.white,
            textAlign: 'center',
          }}>
          {props.title}
        </Text>
        <View style={{height: 10, width: 10}} />
      </View>
      <View></View>
    </ImageBackground>
  );
};

ProfileHeader.propTypes = {
  height: PropTypes.number,
  width: PropTypes.any,
  backgroundColor: PropTypes.string,
  borderColor: PropTypes.string,
  borderWidth: PropTypes.number,
  borderRadius: PropTypes.number,
  marginHorizontal: PropTypes.number,
  title: PropTypes.string,
  extra_button: PropTypes.string,
  extra_button_press: PropTypes.func,
  sub_title: PropTypes.string,
  back_image: PropTypes.any,
};

ProfileHeader.defaultProps = {
  height: normalize(230),
  width: '100%',
  borderRadius: normalize(14),
  backgroundColor: COLORS.primary,
  fontSize: normalize(14),
  borderWidth: 4,
  marginHorizontal: 5,
  title: 'Test',
  extra_button: '',
  extra_button_press: () => console.log('Extra'),
  sub_title: '',
};

export default ProfileHeader;

const styles = StyleSheet.create({});
