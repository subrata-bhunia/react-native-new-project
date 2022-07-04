import {StyleSheet, Text, View, TextInput} from 'react-native';
import React from 'react';
import PropTypes from 'prop-types';
import normalize from '../utils/helpers/normalize';
import {COLORS, FONTS, ICONS} from '../themes/Themes';
import {useNavigation} from '@react-navigation/native';
const TextInputCustom = props => {
  return (
    <View>
      <TextInput
        style={{
          height: props.height,
          width: props.width,
          backgroundColor: props.backgroundColor,
          borderRadius: props.borderRadius,
          margin: props.margin,
          paddingHorizontal: props.paddingHorizontal,
          marginVertical: props.marginVertical,
          alignSelf: 'center',
          fontFamily: FONTS.Poppins_Medium,
          fontSize: normalize(14),
        }}
        placeholder={props.placeholder}
        placeholderTextColor={props.placeholderTextColor}
        value={props.value}
        onChangeText={props.onChangeText}
        editable={props.editable}
      />
    </View>
  );
};

TextInputCustom.propTypes = {
  height: PropTypes.number,
  width: PropTypes.any,
  backgroundColor: PropTypes.string,
  borderColor: PropTypes.string,
  borderWidth: PropTypes.number,
  borderRadius: PropTypes.number,
  marginVertical: PropTypes.number,
  margin: PropTypes.number,
  paddingHorizontal: PropTypes.number,
  placeholder: PropTypes.string,
  value: PropTypes.any,
  onChangeText: PropTypes.func,
  placeholderTextColor: PropTypes.string,
  editable: PropTypes.bool,
};

TextInputCustom.defaultProps = {
  height: normalize(50),
  width: '95%',
  borderRadius: normalize(50),
  backgroundColor: COLORS.textInputColor,
  fontSize: normalize(14),
  borderWidth: 4,
  marginVertical: 5,
  borderColor: COLORS.dotColor,
  placeholder: '',
  extra_button_press: () => console.log('Extra'),
  placeholderTextColor: COLORS.placeHolderColor,
  paddingHorizontal: normalize(20),
  editable: true,
};

export default TextInputCustom;

const styles = StyleSheet.create({});
