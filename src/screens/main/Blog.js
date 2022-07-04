import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import React from 'react';
import MyStatusBar from '../../utils/MyStatusBar';
import HeaderTwo from '../../Components/HeaderTwo';
import {IMAGES, FONTS, COLORS} from '../../themes/Themes';
import normalize from '../../utils/helpers/normalize';
import AdCard from '../../Components/AdCard';
import PostCard from '../../Components/PostCard';
import {SkypeIndicator} from 'react-native-indicators';
import TextPost from '../../Components/TextPost';
export default function Blog() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <MyStatusBar />
      <HeaderTwo
        title="Latest Updates"
        back_image={IMAGES.planing_back}
        sub_title="The noise is deafening. Updates without politics or philosophy, so you can have correct facts in language everyone can understand"
      />
      <ScrollView style={{flex: 1}}>
        <View
          style={{
            marginTop: normalize(20),
          }}>
          <View style={{paddingHorizontal: normalize(10)}}>
            <Text
              style={{
                fontFamily: FONTS.Poppins_Bold,
                fontSize: normalize(20),
                color: COLORS.black,
                lineHeight: normalize(30),
                width: '90%',
                marginBottom: normalize(10),
              }}>
              Changes can affect your financial outcomes, keep up to date
            </Text>
          </View>
          <TextPost
            title="Can You Believe The Medicare Commercials???"
            sub_title="Review - Can You Believe TV Commercials? | A Closer Look Even Jimmie Walker is now Medicare eligible?!?!? What to make of the TV commercials regarding Medicare. a. They are not necessarily wrong,..."
            post_by="by Jae Oh | Aug 18, 2021 | YouTube"
          />
          <TextPost
            title="Dental, Vision & Hearing Added to Original Medicare?"
            sub_title="Dental, Vision, Hearing To Medicare? | Weekly Update In This Video Individual Health Insurance Deadline August 15, Days Away Medicare ABCs Masterclass only available on www.gh2unfiltered.com Dental,..."
            post_by="by Jae Oh | Aug 9, 2021 | Podcast"
          />
          <TextPost
            title="Podcast 173: Kim Browning, Attorney, and Guardianship"
            sub_title="Britney, Guardianship: What Is Guardianship, Anyways? Special Guest: Kim Browning, Attorney Kim is an attorney in Michigan, we speak about the Britney Spears case regarding her attempt to repeal her..."
            post_by="by Jae Oh | Aug 5, 2021 | Podcast"
          />
          <SkypeIndicator
            size={normalize(20)}
            style={{
              height: normalize(18),
              width: normalize(18),
              alignSelf: 'center',
              marginTop: normalize(20),
            }}
          />
        </View>
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
