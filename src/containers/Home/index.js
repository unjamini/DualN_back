// @flow

import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import type { NavigationScreenProps } from '@react-navigation/native';

import { styles } from './styles';

type Props = {|
  navigation: NavigationScreenProps,
|};

const Home = ({ navigation }: Props) => (
  <View style={styles.container}>
    <Text style={styles.appName}>Dual N-back</Text>
    <View>
      <TouchableOpacity onPress={() => navigation.navigate('Session')}>
        <Text style={styles.button}>Play</Text>
      </TouchableOpacity>
    </View>
  </View>
);

export default Home;
