import {ComponentType, ReactNode, useMemo} from 'react';
import {Text, View} from 'react-native';
import EmptyStatesIcon from '../../assets/icons/empty-state';
import {getStyle} from './styles';

export interface EmptyStateProps {
  title?: string;
  description?: string;
  action?: ReactNode;
}

export const EmptyState: ComponentType<EmptyStateProps> = ({
  action,
  title,
  description,
  ...props
}) => {
  const styles = useMemo(() => getStyle(), []);
  return (
    <View {...props} style={styles.root}>
      <View style={styles.main}>
        <EmptyStatesIcon />
        {(title || description) && (
          <View style={styles.content}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.description}>{description}</Text>
          </View>
        )}
        {action && <View>{action}</View>}
      </View>
    </View>
  );
};
