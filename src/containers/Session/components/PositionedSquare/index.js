// @flow

import React from 'react';
import { View } from 'react-native';
import { styles } from './styles';

type Props = {
  position: number,
};

const PositionedSquare = ({ position }: Props) => (
  <View style={styles.container}>
    <View style={styles.row}>
      <View style={position === 0 ? [styles.box2] : [styles.box]} />
      <View style={position === 1 ? [styles.box2] : [styles.box]} />
      <View style={position === 2 ? [styles.box2] : [styles.box]} />
    </View>
    <View style={styles.row}>
      <View style={position === 3 ? [styles.box2] : [styles.box]} />
      <View style={position === 4 ? [styles.box2] : [styles.box]} />
      <View style={position === 5 ? [styles.box2] : [styles.box]} />
    </View>
    <View style={styles.row}>
      <View style={position === 6 ? [styles.box2] : [styles.box]} />
      <View style={position === 7 ? [styles.box2] : [styles.box]} />
      <View style={position === 8 ? [styles.box2] : [styles.box]} />
    </View>
  </View>
);

export default PositionedSquare;
