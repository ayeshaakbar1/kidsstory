import React from 'react';
import {View, Text, StyleSheet, Image, Pressable} from 'react-native';
import {Color, FontFamily} from '../GlobalStyles';
import Rectangle from '../assets/rectangle.svg';
import ArrowButton from '../assets/arrowButton.svg';

const AllStories = ({navigation}) => {
  return (
    <View>
      <Rectangle style={styles.back} />
      <View style={styles.title}>
        <View style={[styles.titleChild, styles.framePosition]} />
        <View style={[styles.titleItem, styles.titlePosition]} />
        <View style={[styles.titleInner, styles.titlePosition]} />
        <Text style={[styles.allTheBest, styles.theFlexBox1]}>
          All the best kids stories in one app
        </Text>
        <View style={[styles.arrow, styles.arrowTransform]}>
          <ArrowButton
            style={[styles.Button, styles.iconItemLayout]}
            resizeMode="cover"
            onPress={() => navigation.navigate('Home')}
          />
        </View>
      </View>
      <Pressable
        style={styles.allStories}
        onPress={() => navigation.navigate('Story')}>
        <View style={styles.allFrames}>
          <Image
            style={styles.frame1}
            resizeMode="cover"
            source={require('../assets/Frame1.png')}
          />
          <Image
            style={styles.frame2}
            resizeMode="cover"
            source={require('../assets/Frame2.png')}
          />
          <Image
            style={styles.frame3}
            resizeMode="cover"
            source={require('../assets/Frame3.png')}
          />
          <Image
            style={styles.frame4}
            resizeMode="cover"
            source={require('../assets/Frame4.png')}
          />
        </View>
      </Pressable>
    </View>
  );
};
const styles = StyleSheet.create({
  back: {
    position: 'absolute',
  },
  home: {
    width: 430,
    height: 928,
    left: 0,
    top: 0,
    position: 'absolute',
  },
  iconItemLayout: {
    maxHeight: '100%',
    maxWidth: '100%',
    overflow: 'hidden',
  },
  title: {
    top: 39,
    width: 428,
    height: 150,
    left: 0,
    position: 'absolute',
  },
  titleChild: {
    backgroundColor: '#d24528',
  },
  framePosition: {
    left: '0%',
    bottom: '0%',
    right: '0%',
    top: '0%',
    height: '100%',
    position: 'absolute',
    width: '100%',
  },
  titleItem: {
    top: '5.3%',
    bottom: '88.64%',
  },
  titlePosition: {
    backgroundColor: Color.lightPink,
    height: '6.06%',
    left: '0%',
    right: '0%',
    position: 'absolute',
    width: '100%',
  },
  titleInner: {
    top: '88.64%',
    bottom: '5.3%',
  },
  allTheBest: {
    height: '72.73%',
    width: '79.67%',
    top: '10.36%',
    left: '11.21%',
    fontSize: 44,
    fontFamily: FontFamily.itimRegular,
    textShadowColor: 'rgba(0, 0, 0, 0.25)',
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowRadius: 8,
    textAlign: 'center',
    alignItems: 'center',
    color: Color.white,
    position: 'absolute',
  },
  theFlexBox1: {
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
  },
  Button: {
    height: '56%',
    width: '12.5%',
    top: '145%',
    left: '2.5%',
    position: 'relative',
  },
  allFrames: {
    display: 'flex',
  },
  frame1: {
    width: '39.2%',
    height: '74.2%',
    top: '68.9%',
    left: '6%',
    display: 'flex',
    position: 'absolute',
  },
  frame2: {
    width: '39.6%',
    top: '68%',
    height: '74%',
    left: '55%',
  },
  frame3: {
    position: 'absolute',
    width: '39.6%',
    height: '74%',
    top: '156%',
    left: '6%',
  },
  frame4: {
    width: '39.6%',
    height: '74%',
    left: '55%',
    top: '156%',
    position: 'absolute',
  },
});

Object.freeze(styles);
export default AllStories;
