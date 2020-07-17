// @flow

import React from 'react';
import { View, Button, Text, TouchableHighlight } from 'react-native';

import type { NavigationScreenProps } from '@react-navigation/native';

import { styles } from './styles';

type Props = {|
  navigation: NavigationScreenProps,
|};

const Home = ({ navigation }: Props) => (
  <View style={styles.container}>
    <Text style={styles.appName}>Dual N-back</Text>
    <TouchableHighlight style={styles.button}>
      <Button
        title="Play"
        color="#a99be0"
        onPress={() => navigation.navigate('Session')}
      />
    </TouchableHighlight>
  </View>
);

export default Home;
