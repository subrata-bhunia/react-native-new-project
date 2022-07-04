import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import PropTypes from 'prop-types';
import normalize from '../utils/helpers/normalize';
import {COLORS, FONTS, ICONS} from '../themes/Themes';
import {useNavigation} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
const GradientButton = props => {
  return (
    <TouchableOpacity activeOpacity={0.6} onPress={props.onPress}>
      <LinearGradient
        colors={[COLORS.secondary, COLORS.primary]}
        start={{x: 0.0, y: 1}}
        end={{x: 1, y: 1.0}}
        style={{
          height: props.height,
          borderRadius: props.borderRadius,
          width: props.width,
          alignItems: 'center',
          justifyContent: 'center',
          alignSelf: 'center',
          marginVertical: props.marginVertical,
          marginBottom: props.marginBottom,
        }}>
        <Text
          style={{
            fontFamily: FONTS.Poppins_Bold,
            color: COLORS.white,
          }}>
          {props.title}
        </Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

GradientButton.propTypes = {
  height: PropTypes.number,
  width: PropTypes.any,
  backgroundColor: PropTypes.string,
  borderColor: PropTypes.string,
  borderWidth: PropTypes.number,
  borderRadius: PropTypes.number,
  marginVertical: PropTypes.number,
  marginBottom: PropTypes.number,
  margin: PropTypes.number,
  paddingHorizontal: PropTypes.number,
  title: PropTypes.string,
  onPress: PropTypes.func,
};

GradientButton.defaultProps = {
  height: normalize(50),
  width: '95%',
  borderRadius: normalize(50),
  backgroundColor: COLORS.textInputColor,
  fontSize: normalize(14),
  borderWidth: 4,
  marginVertical: 5,
  borderColor: COLORS.dotColor,
  title: 'Sign In',
  onPress: () => console.log('Extra'),
  paddingHorizontal: normalize(20),
};

export default GradientButton;

const styles = StyleSheet.create({});
