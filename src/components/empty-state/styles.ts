import {StyleSheet} from 'react-native';

export const getStyle = () => {
  const styles = StyleSheet.create({
    root: {
      paddingTop: 10,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    },
    main: {
      alignItems: 'center',
      justifyContent: 'center',
      padding: 25,
      height: '100%',
    },

    content: {
      marginBottom: 15,
    },
    description: {
      fontSize: 18,
      textAlign: 'center',
      color: '#7F7F7F',
      width: 200,
    },
    title: {
      fontSize: 24,
      textAlign: 'center',
      color: '#000',
    },
    action: {
      marginTop: 12,
    },
  });
  return styles;
};
