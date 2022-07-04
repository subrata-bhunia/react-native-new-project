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
const HeaderTwo = props => {
  const navigation = useNavigation();
  return (
    <ImageBackground
      source={props.back_image}
      imageStyle={{
        opacity: 0.6,
        borderBottomLeftRadius: normalize(30),
        borderBottomRightRadius: normalize(30),
      }}
      style={{
        height: props.height,
        width: props.width,
        backgroundColor: props.backgroundColor,
        borderBottomLeftRadius: normalize(30),
        borderBottomRightRadius: normalize(30),
      }}>
      <View style={{padding: normalize(20)}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Pressable onPress={() => navigation.goBack()}>
            <Image source={ICONS.arrow_left} />
          </Pressable>
          {props.extra_button !== '' ? (
            <Pressable onPress={props.extra_button_press}>
              <Text
                style={{fontFamily: FONTS.Poppins_Medium, color: COLORS.white}}>
                {props.extra_button}
              </Text>
            </Pressable>
          ) : null}
        </View>
        <View>
          <Text
            style={{
              fontFamily: FONTS.Poppins_Bold,
              fontSize: normalize(28),
              color: COLORS.white,
              marginTop: normalize(15),
              textAlign: props.titleAlign,
            }}>
            {props.title}
          </Text>
        </View>
        <View>
          <Text
            style={{
              fontFamily: FONTS.Roboto_Regular,
              color: COLORS.white,
              fontSize: normalize(14),
            }}>
            {props.sub_title}
          </Text>
        </View>
      </View>
    </ImageBackground>
  );
};

HeaderTwo.propTypes = {
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
  titleAlign: PropTypes.string,
};

HeaderTwo.defaultProps = {
  height: normalize(200),
  width: '100%',
  borderRadius: normalize(14),
  backgroundColor: COLORS.black,
  fontSize: normalize(14),
  borderWidth: 4,
  marginHorizontal: 5,
  title: '',
  extra_button: '',
  extra_button_press: () => console.log('Extra'),
  sub_title: '',
  back_image: '',
  titleAlign: 'auto',
};

export default HeaderTwo;

const styles = StyleSheet.create({});
