import React, {Fragment, useState} from 'react';
import {FlatList, Text, View, Image, Dimensions, Pressable} from 'react-native';
import Modal from 'react-native-modal';
import {COLORS, FONTS, ICONS, IMAGES} from '../themes/Themes';
import normalize from '../utils/helpers/normalize';
import PropTypes from 'prop-types';
import {SafeAreaView} from 'react-native-safe-area-context';
import MyStatusBar from '../utils/MyStatusBar';

export default function DrawerMenu(props) {
  const [modalVisible, setModalVisible] = useState(props.modalVisible);
  function onPressCancel() {
    if (props.onPressCancel) {
      props.onPressCancel();
    }
  }
  function onPressOK() {
    if (props.onPressOK) {
      props.onPressOK();
    }
  }
  function onBackdropPress() {
    if (props.onBackdropPress) {
      props.onBackdropPress();
    }
  }
  function onPressCross() {
    if (props.onPressCross) {
      props.onPressCross();
    }
  }

  return (
    <Modal
      animationIn={'slideInLeft'}
      animationOut={'slideOutLeft'}
      backdropTransitionOutTiming={0}
      hideModalContentWhileAnimating={true}
      backdropOpacity={0.7}
      isVisible={props.modalVisible}
      style={{margin: 0}}
      statusBarTranslucent
      onBackdropPress={() => onBackdropPress()}>
      <Fragment>
        <SafeAreaView
          style={{
            //   paddingLeft: normalize(20),
            //   paddingRight: normalize(20),
            //   paddingVertical: normalize(25),
            backgroundColor: COLORS.white,
            width: '75%',
            height: '96%',
            marginTop: -normalize(20),
            borderTopEndRadius: normalize(30),
            borderBottomEndRadius: normalize(30),
          }}>
          <Pressable onPress={onPressCross}>
            <Image
              source={ICONS.cross_icon}
              style={{alignSelf: 'flex-end', marginHorizontal: normalize(16)}}
            />
          </Pressable>
          <FlatList
            data={props.data}
            renderItem={props.renderItem}
            showsVerticalScrollIndicator={false}
          />
        </SafeAreaView>
      </Fragment>
    </Modal>
  );
}

DrawerMenu.propTypes = {
  modalVisible: PropTypes.bool,
  title: PropTypes.string,
  data: PropTypes.array,
  renderItem: PropTypes.func,
  onBackdropPress: PropTypes.func,
  onPressCross: PropTypes.func,
};

DrawerMenu.defaultProps = {
  modalVisible: false,
  title: '',
  data: [],
  renderItem: () => {},
  onBackdropPress: () => {},
  onPressCross: () => {},
};
