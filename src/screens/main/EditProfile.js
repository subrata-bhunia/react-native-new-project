import {
  View,
  Text,
  SafeAreaView,
  Image,
  ScrollView,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import React from 'react';
import ProfileHeader from '../../Components/ProfileHeader';
import {COLORS, FONTS, ICONS, IMAGES} from '../../themes/Themes';
import MyStatusBar from '../../utils/MyStatusBar';
import normalize from '../../utils/helpers/normalize';
import TextInputCustom from '../../Components/TextInput';
import GradientButton from '../../Components/GradientButton';

export default function EditProfile() {
  //   const bottomTabBarHeight = useBottomTabBarHeight();
  return (
    <SafeAreaView style={{flex: 1}}>
      <MyStatusBar />
      <ProfileHeader
        back_image={IMAGES.profile_header_back_image}
        title="Edit Profile"
      />
      <View
        style={{
          flex: 1,
          backgroundColor: '#fff',
          marginTop: -normalize(70),
          borderTopRightRadius: normalize(30),
          borderTopLeftRadius: normalize(30),
          padding: normalize(10),
        }}>
        <View
          style={{
            marginBottom: normalize(25),
          }}>
          <Image
            source={IMAGES.profile_image}
            style={{
              height: normalize(100),
              width: normalize(100),
              borderRadius: normalize(100),
              resizeMode: 'cover',
              borderWidth: normalize(3),
              borderColor: '#F2F4FF',
              position: 'absolute',
              alignSelf: 'center',
              top: -normalize(70),
            }}
          />
        </View>
        <ScrollView>
          <Text
            style={{
              fontFamily: FONTS.Poppins_Medium,
              fontSize: normalize(16),
              color: COLORS.black,
              marginVertical: normalize(10),
              textAlign: 'center',
            }}>
            Personal Information
          </Text>
          <TextInputCustom placeholder="Full Name" height={normalize(55)} />
          <TextInputCustom placeholder="Date of Birth" height={normalize(55)} />
          <TextInputCustom placeholder="Email" height={normalize(55)} />
          <Text
            style={{
              fontFamily: FONTS.Poppins_Medium,
              fontSize: normalize(12),
              color: COLORS.placeHolderColor,
              marginVertical: normalize(10),
              // textAlign: 'center',
            }}>
            Select Your Gender
          </Text>
          <View
            style={{
              padding: normalize(10),
              flexDirection: 'row',
            }}>
            <Pressable
              style={{
                height: normalize(84),
                width: normalize(84),
                // elevation: 5,
                borderWidth: 2,
                borderRadius: normalize(10),
                borderColor: '#2D4276',
                justifyContent: 'center',
                margin: normalize(5),
              }}>
              <Image
                source={ICONS.active_tick}
                style={{
                  height: 20,
                  width: 20,
                  resizeMode: 'contain',
                  position: 'absolute',
                  right: 5,
                  top: 5,
                }}
              />
              <View
                style={{
                  borderRadius: normalize(45),
                  height: normalize(45),
                  width: normalize(45),
                  borderWidth: normalize(2),
                  borderColor: 'rgba(45, 66, 118, 0.6)',
                  alignSelf: 'center',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Image
                  source={ICONS.male}
                  style={{
                    height: normalize(30),
                    width: normalize(30),
                    resizeMode: 'contain',
                  }}
                />
              </View>
              <Text
                style={{
                  fontFamily: FONTS.Poppins_Medium,
                  textAlign: 'center',
                  fontSize: normalize(14),
                  color: '#7D7D7D',
                }}>
                Male
              </Text>
            </Pressable>
            <Pressable
              style={{
                height: normalize(84),
                width: normalize(84),
                // elevation: 5,
                borderWidth: 2,
                borderRadius: normalize(10),
                borderColor: '#eee',
                justifyContent: 'center',
                margin: normalize(5),
              }}>
              <Image
                source={ICONS.inactive_tick}
                style={{
                  height: 20,
                  width: 20,
                  resizeMode: 'contain',
                  position: 'absolute',
                  right: 5,
                  top: 5,
                }}
              />
              <View
                style={{
                  borderRadius: normalize(45),
                  height: normalize(45),
                  width: normalize(45),
                  borderWidth: normalize(2),
                  borderColor: 'rgba(45, 66, 118, 0.6)',
                  alignSelf: 'center',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Image
                  source={ICONS.female}
                  style={{
                    height: normalize(30),
                    width: normalize(30),
                    resizeMode: 'contain',
                  }}
                />
              </View>
              <Text
                style={{
                  fontFamily: FONTS.Poppins_Medium,
                  textAlign: 'center',
                  fontSize: normalize(14),
                  color: '#7D7D7D',
                }}>
                Female
              </Text>
            </Pressable>
          </View>
          <GradientButton title="Save" marginVermtical={normalize(10)} />
          <TouchableOpacity>
            <Text
              style={{
                fontFamily: FONTS.Poppins_Medium,
                textAlign: 'center',
                fontSize: normalize(14),
                color: '#7D7D7D',
              }}>
              Cancel
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
