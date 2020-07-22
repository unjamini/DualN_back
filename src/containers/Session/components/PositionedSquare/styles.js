import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 2,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  box: {
    width: 60,
    height: 60,
    backgroundColor: 'white',
    borderWidth: 2,
    borderRadius: 10,
    borderColor: '#bcb1e6',
    margin: 5,
    padding: 25,

  },
  box2: {
    width: 60,
    height: 60,
    backgroundColor: '#bcb1e6',
    borderWidth: 2,
    borderColor: '#bcb1e6',
    borderRadius: 10,
    margin: 5,
    padding: 25,
  },
});

export default { styles };
