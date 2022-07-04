import {StyleSheet, Text, View, Image, Pressable} from 'react-native';
import React from 'react';
import PropTypes from 'prop-types';
import normalize from '../utils/helpers/normalize';
import {COLORS, FONTS, ICONS} from '../themes/Themes';
import {useNavigation} from '@react-navigation/native';
const Header = props => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        height: props.height,
        width: props.width,
        backgroundColor: props.backgroundColor,
        padding: normalize(20),
      }}>
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
  );
};

Header.propTypes = {
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
};

Header.defaultProps = {
  height: normalize(230),
  width: '100%',
  borderRadius: normalize(14),
  backgroundColor: COLORS.primary,
  fontSize: normalize(14),
  borderWidth: 4,
  marginHorizontal: 5,
  borderColor: COLORS.dotColor,
  title: '',
  extra_button: '',
  extra_button_press: () => console.log('Extra'),
  sub_title: '',
};

export default Header;

const styles = StyleSheet.create({});
