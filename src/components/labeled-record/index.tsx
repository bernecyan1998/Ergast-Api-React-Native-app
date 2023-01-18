import {View, ViewProps, Text} from 'react-native';
import {ComponentType, ReactNode} from 'react';
import {styles} from './styles';

interface Props {
  label: ReactNode;
  value?: ReactNode;
  direction?: 'column' | 'row';
  mb?: number;
  labelProps?: ViewProps;
  valueProps?: ViewProps;
}

export const LabeledRecord: ComponentType<Props> = ({
  label,
  value = '-',
  direction = 'column',
  labelProps,
  valueProps,
  ...props
}) => {
  return (
    <View
      style={{...styles.root, display: 'flex', flexDirection: direction}}
      {...props}>
      <View {...labelProps} style={{marginRight: direction === 'row' ? 8 : 0}}>
        <Text style={styles.label}>{label}:</Text>
      </View>
      <View {...valueProps}>
        <Text style={styles.value}>{value}</Text>
      </View>
    </View>
  );
};
