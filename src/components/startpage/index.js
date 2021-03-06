import React from 'react';
import {View, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

import Common from '../commonComponents/startingBackground';
import {styles} from './style';
import BackgroundImag from '../commonComponents/BackgroundImag';

const index = ({navigation}) => (
  <>
    <BackgroundImag />
    <Common />
    <View style={styles.SingIn}>
      <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
        <View style={styles.buttonSingIn}>
          <Text style={styles.buttontext}>SignIn</Text>
        </View>
      </TouchableOpacity>
    </View>

    <View style={styles.Login}>
      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <View style={styles.buttonSingIn}>
          <Text style={styles.buttontext}>LogIn</Text>
        </View>
      </TouchableOpacity>
    </View>
  </>
);

export default index;
