import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';

import Icon from 'react-native-vector-icons/Entypo';
import mainStyle from '../commonComponents/mainStyle';
import {basicComponentsOne, basicComponentsTwo} from '../../constants/color';

const Header = ({Title, navigation}) => {
  const Navigation = () => {
    if (Title == 'Home') {
      navigation.openDrawer();
    } else {
      navigation.navigate('Home');
    }
  };
  return (
    <View style={styles.HeaderBlock}>
      <Pressable onPress={() => Navigation()}>
        <Icon
          name={Title == 'Home' ? 'menu' : 'chevron-with-circle-left'}
          style={styles.IconCss}
        />
      </Pressable>
      <Text style={[styles.Title, mainStyle.TextBold]}>{Title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  HeaderBlock: {
    flexDirection: 'row',
    backgroundColor: basicComponentsOne,
    height: 50,
    width: '100%',
    alignItems: 'center',
    elevation: 4,
  },
  Title: {
    color: basicComponentsTwo,
    fontSize: 20,
    marginLeft: 15,
  },
  IconCss: {
    fontSize: 35,
    color: basicComponentsTwo,
    marginLeft: 15,
  },
});

export default Header;
