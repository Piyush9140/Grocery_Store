import {StyleSheet} from 'react-native';
import {height, width} from '../../assets/scaling';
export const styles = StyleSheet.create({
  imageBackground: {
    backgroundColor: '#FFF7ED',
    position: 'absolute',
    left: 0,
    top: 0,
    width: width,
    height: height,
  },
  gradient: {
    width: '100%',
    height: '100%',
    paddingVertical: 40,
  },
  image: {
    opacity: 0.5,
  },
});
