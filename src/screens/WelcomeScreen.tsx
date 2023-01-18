import {Text, View, TouchableOpacity} from 'react-native';
import RightArrow from '../assets/icons/right-arrow';
import {navigate} from '../navigation';

export default function WelcomeScreen() {
  return (
    <View style={{flex: 1, backgroundColor: '#FAFAFA'}}>
      <View style={{top: '40%', left: 50}}>
        <Text style={{color: '#7F7F7F', fontSize: 38}}>Welcome.</Text>
        <Text
          style={{
            color: '#BBB',
            fontSize: 18,
          }}>
          Get started by clicking
        </Text>
        <Text
          style={{
            color: '#BBB',
            fontSize: 18,
          }}>
          the button below.
        </Text>
      </View>
      <TouchableOpacity
        onPress={() => navigate('driversScreen', {})}
        style={{
          marginTop: 600,
          flexDirection: 'row',
          justifyContent: 'center',
        }}>
        <Text style={{color: '#7F7F7F', fontSize: 24}}>Launch app</Text>
        <RightArrow fill="#7F7F7F" />
      </TouchableOpacity>
    </View>
  );
}
