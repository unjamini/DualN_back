// @flow

import React, { useCallback, useState } from 'react';
import { View, Button, Text, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';
import { useFocusEffect } from '@react-navigation/native';

import type { NavigationScreenProps } from '@react-navigation/native';

import { countMistakes } from './utils';
import { TOTAL_MISTAKES } from '../../constants';
import { styles } from './styles';

type Props = {|
  navigation: NavigationScreenProps,
|};

const Results = ({ navigation }: Props) => {
  const lettersAnswers: Array<number> = useSelector(
    state => state.sessionReducer.lettersAnswers,
  );
  const positionsAnswers: Array<number> = useSelector(
    state => state.sessionReducer.positionsAnswers,
  );
  const tappedLetters: Array<number> = useSelector(
    state => state.sessionReducer.tappedLettersIndexList,
  );
  const tappedPositions: Array<number> = useSelector(
    state => state.sessionReducer.tappedPositionsIndexList,
  );

  const [mistakes: number, setMistakes] = useState(0);

  useFocusEffect(
    useCallback(() => {
      // когда появляется фокус на экран
      setMistakes(
        countMistakes({
          lettersAnswers,
          positionsAnswers,
          tappedLetters,
          tappedPositions,
        }),
      );
    }, [lettersAnswers, positionsAnswers, tappedLetters, tappedPositions]),
  );

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Your results:{' '}
        {Math.max(
          0,
          Math.floor(((TOTAL_MISTAKES - mistakes) / TOTAL_MISTAKES) * 100),
        )}{' '}
        %
      </Text>
      <View>
        <TouchableOpacity onPress={() => navigation.navigate('Session')}>
          <Text style={styles.button}>Try again</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Text style={styles.button}>Home</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Results;
