// @flow

import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { View, Text, TouchableOpacity } from 'react-native';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import type { NavigationScreenProps } from '@react-navigation/native';

import PositionedSquare from './components/PositionedSquare';
import { generateSequences } from './utils';
import { setSequencesAndAnswers, addPosition, addLetter } from './actions';
import { LEVEL, STIMULI_IN_BLOCK } from '../../constants';
import { styles } from './styles';

import type { State } from '../../types/redux';

const Session = () => {
  const navigation: NavigationScreenProps = useNavigation();
  const dispatch = useDispatch();
  const positionsSequence = useSelector(
    (state: State) => state.sessionReducer.positionsSequence,
  );
  const lettersSequence = useSelector(
    (state: State) => state.sessionReducer.lettersSequence,
  );

  const [currentIndex, setIndex] = useState<number>(0);
  const [running, setRunning] = useState<boolean>(false);
  const [countdown, setCountdown] = useState<number>(3);

  const recordLetter = useCallback(() => {
    dispatch(addLetter(currentIndex));
  }, [currentIndex, dispatch]);

  const recordPosition = useCallback(() => {
    dispatch(addPosition(currentIndex));
  }, [currentIndex, dispatch]);

  useFocusEffect(
    useCallback(() => {
      setRunning(false);
      setIndex(0);
      setCountdown(3);
      dispatch(setSequencesAndAnswers(generateSequences(LEVEL)));
      const timer = setTimeout(() => {
        setRunning(true);
      }, 3000);
      return () => {
        clearTimeout(timer);
      };
    }, [dispatch]),
  );

  useEffect(() => {
    const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
    return () => {
      clearTimeout(timer);
    };
  }, [countdown]);

  useEffect(() => {
    if (running) {
      const timer = setTimeout(() => setIndex(currentIndex + 1), 3000);
      return () => {
        clearTimeout(timer);
      };
    }
    return () => {};
  }, [currentIndex, running]);

  if (currentIndex === STIMULI_IN_BLOCK) {
    navigation.navigate('Results');
  }

  if (running) {
    return (
      <View style={styles.outline}>
        <View style={styles.media}>
          <Text style={styles.letter}>{lettersSequence[currentIndex]}</Text>
          <View style={{ flex: 2 }}>
            <PositionedSquare position={positionsSequence[currentIndex]} />
          </View>
        </View>
        <View style={styles.buttonList}>
          <View>
            <TouchableOpacity onPress={recordLetter}>
              <Text style={styles.button}>Letter</Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity onPress={recordPosition}>
              <Text style={styles.button}>Position</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <Text style={styles.countdown}>{countdown}</Text>
    </View>
  );
};

export default Session;
