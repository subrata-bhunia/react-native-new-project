import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import React from 'react';
import MyStatusBar from '../../utils/MyStatusBar';
import HeaderTwo from '../../Components/HeaderTwo';
import {IMAGES, FONTS, COLORS} from '../../themes/Themes';
import normalize from '../../utils/helpers/normalize';
import AdCard from '../../Components/AdCard';
import PostCard from '../../Components/PostCard';
import {SkypeIndicator} from 'react-native-indicators';
export default function Insurance() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <MyStatusBar />
      <HeaderTwo
        title="Many Types, Many Functions"
        titleAlign="center"
        back_image={IMAGES.many_back}
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
                fontSize: normalize(14),
                color: COLORS.black,
              }}>
              Insurance
            </Text>
            <Text
              style={{
                fontFamily: FONTS.Roboto_Regular,
                fontSize: normalize(13),
                lineHeight: normalize(20),
                color: COLORS.black,
              }}>
              Insurance can be used for many different reasons, from protecting
              your family to securing your retirement. Get clear information and
              stay updated.
            </Text>
          </View>
          <PostCard
            post_type="video"
            title="Term Life Insurance: Can You Believe the Ads?"
            back_image={{
              uri: 'https://s3-alpha-sig.figma.com/img/9c67/29f1/9e77fc8d4f37b8c7a19b31f78db3bea4?Expires=1653868800&Signature=dui0uu2PSzMzJ1~9WqeZRNIGqgCeszmYwsG2g7I4efQKe5xyfIsX86r802y2ndYbLS66r0rXSA0EOH5IhqBzmJX2MeI9eSHPE76IyJbTKaxUdZgMcaqHz2FEGMR8a~jEBYqfR6KYBTiYVtrTdXClF1XBKhkz5t~pNSBarkmLJ~HO27~OEBb0baWIcu2I1tKROQ6T9J5frNyhnewlcfRjURT6RcHyJC18LuEy-bfli~lXZoDFYgYUcMiCglQEvkLow8B0ZLo4IH~o-YFZ3HUoIIbPMt699ugBp5l2t6eYXo7FErVdDQRB~tODzkYMi2oFLXZr02Ih4RMy9JnifaMmoA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
            }}
            sub_title="It is a long established fact that a reader. ullamco laboris nisi ut aliquip ex ea commodo consequat."
          />
          <PostCard
            post_type="video"
            title="Health Insurance Deadline Approaching | Interview on Retirement Daily"
            back_image={{
              uri: 'https://s3-alpha-sig.figma.com/img/3e76/a598/00235484e930b1dd2144c4b762d2211b?Expires=1653868800&Signature=BWQ1HVBUT0HB~Sizq7kcBeGg7TlszViFOBVulqEReeTUQ5YLCz-o-DjJpXSWaRc2Jhz4mpbhWcDAjUDaBMmhC-PQf71mXYw5GO2BzqrjTdiB9YetO9MS-MFuncz7As8cQagpN9LDM2PD8KySGI2AJoRBsCXUVWivIawxq25jqWakyA8eyYScZApvbJkIT0SIJgjT6mO0chSMED7cTuQt~hhTn0GJ2pjbHtYyK~9bE3h8HrtUD~pK-UluMukfHEXqHpSw8xfzuSbBU0tZ-QbrDGx0GrjFDlk2JwL9DWXYWjNEEEhdbOKfNzSRTd7d4N-og1~LpJZizmyUP6hrNnPjzw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
            }}
            sub_title="It is a long established fact that a reader. ullamco laboris nisi ut aliquip ex ea commodo consequat."
          />
          <SkypeIndicator
            size={normalize(20)}
            style={{
              height: normalize(10),
              width: normalize(10),
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
