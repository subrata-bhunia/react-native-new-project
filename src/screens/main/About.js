import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import React from 'react';
import MyStatusBar from '../../utils/MyStatusBar';
import HeaderTwo from '../../Components/HeaderTwo';
import {IMAGES, FONTS, ICONS, COLORS} from '../../themes/Themes';
import normalize from '../../utils/helpers/normalize';
import GradientButton from '../../Components/GradientButton';
import AdCard from '../../Components/AdCard';

export default function About() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <MyStatusBar />
      <HeaderTwo
        title="About Me"
        back_image={IMAGES.about_back}
        sub_title="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
      />
      <ScrollView style={{flex: 1}}>
        <Text
          style={{
            fontFamily: FONTS.Poppins_Bold,
            color: COLORS.primary,
            fontSize: normalize(18),
            padding: normalize(10),
            marginTop: normalize(10),
          }}>
          Know More About Me
        </Text>
        <Text
          style={{
            fontFamily: FONTS.Roboto_Regular,
            color: COLORS.black,
            fontSize: normalize(14),
            padding: normalize(10),
            lineHeight: normalize(20),
          }}>
          {`Jae W. Oh, MBA, CFP®, CLU® ChFC® is the Managing Principal of GH2 Benefits, LLC. He is a Certified Financial Planner, Chartered Life Underwriter, a Chartered Financial Consultant, and a licensed insurance producer in multiple states. He is a nationally-recognized Medicare expert, frequently quoted in the national media, including USAToday.com, thestreet.com, Fox Radio News contributor and Editor-In-Chief of openmedicare.com.

GH2 Benefits is a full provider of the widest range of financial products and services. Mr. Oh has served in management roles in securities markets on three continents.
He has a Master’s Degree in Business Administration (MBA) with concentrations in Accounting and Finance from the University of Chicago, and a Bachelors of Arts (BA) degree in Economics and Political Science from the University of Michigan, Ann Arbor.`}
        </Text>
        <View style={{marginVertical: 20}}>
          <AdCard
            title="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            sub_title="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using."
            back_image={{
              uri: 'https://s3-alpha-sig.figma.com/img/1aac/d32f/509441040c4afb22d16281a30b2c5fd2?Expires=1653868800&Signature=Au93mqBt2U3EVYuPauHKVFpEj2~8vryPvufKYuv1GhCYZoW1JaoOadiplpu1V6XBxNVciGNxwqJGJCLN2xgvlvisoqxJu5Gx0G9N21ExtLYGtgkP6lvjheoCae760kPK-4FlTYzDTGAFY8a0NaxBh3bZxLWcz-JDpxZTNhxSILNjawtHXdssenyJDybEWciwujH8Eg9b0WV~xndjQrEjiliAg83Ur-phy-6ysahyqwSQqBsW2f51d8aVE1dCafgB-EnlOn4oArIoxc2cwT6FNNYVlMF-57oet3DvboDJtSSS1-geFTyXnqnHRgGhsXYA-KB38sjxCNfU2TdZmYeU4w__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
            }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
