// @flow

import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    height: '100%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  countdown: {
    color: '#bcb1e6',
    fontSize: 100,
  },
  letter: {
    flex: 2,
    fontSize: 100,
    fontWeight: 'bold',
    marginTop: 100,
  },
  outline: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  media: {
    flex: 3,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  buttonList: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  button: {
    height: 50,
    width: 160,
    backgroundColor: '#bcb1e6',
    borderRadius: 25,
    color: 'white',
    fontSize: 24,
    marginLeft: 50,
    marginRight: 50,
    marginTop: 20,
    overflow: 'hidden',
    paddingTop: 5,
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default { styles };
