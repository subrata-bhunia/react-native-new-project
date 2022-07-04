import React, {useEffect} from 'react';
import {ImageBackground, SafeAreaView, Image} from 'react-native';
import {IMAGES, COLORS} from '../../themes/Themes';
import normalize from '../../utils/helpers/normalize';

export default function Splash(props) {
  useEffect(() => {
    setTimeout(() => {
      props.navigation.navigate('Sign_in');
    }, 2500);
  }, []);
  return (
    <>
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: COLORS.white,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Image
          resizeMode="contain"
          source={IMAGES.splash_logo}
          style={{height: normalize(150), width: '100%'}}
        />
      </SafeAreaView>
    </>
  );
}
