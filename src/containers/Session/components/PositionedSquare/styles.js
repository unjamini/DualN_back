import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  row: {
    flex: 1,
    flexDirection: 'row',
  },
  box: {
    width: 70,
    height: 70,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: '#8963ba',
    margin: 5,
  },
  box2: {
    width: 70,
    height: 70,
    backgroundColor: '#bea1e3',
    borderWidth: 2,
    borderColor: '#8963ba',
    borderRadius: 10,
    margin: 5,
  },
});

export default { styles };
