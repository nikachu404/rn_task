import {Text, StyleSheet, TouchableHighlight} from 'react-native';

type Props = {
  text: string;
  style?: object;
  underlayColor?: string;
  onPress: () => void;
};

export const Button: React.FC<Props> = ({
  text,
  style,
  underlayColor,
  onPress,
}) => {
  return (
    <TouchableHighlight
      underlayColor={underlayColor || '#4c5567'}
      style={[styles.btn, style]}
      onPress={onPress}>
      <Text style={styles.btnText}>{text}</Text>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  btn: {
    width: '100%',
    backgroundColor: '#2d3648',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    padding: 10,
  },
  btnText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
