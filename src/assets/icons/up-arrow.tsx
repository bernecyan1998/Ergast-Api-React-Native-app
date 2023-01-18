import * as React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';

export default function UpArrowIcon(props: SvgProps) {
  return (
    <Svg width="50px" height="50px" viewBox="-8.5 0 32 32" {...props}>
      <Path d="M15.16 13.16L8.32 6.32c-.28-.28-.84-.24-1.16.08L.24 13.16c-.32.32-.32.84 0 1.2.32.32.84.32 1.2 0l5.44-5.44v16.2c0 .48.36.84.84.84s.84-.36.84-.84V8.92L14 14.36c.16.16.36.24.6.24.2 0 .44-.08.6-.24.32-.32.32-.84-.04-1.2z" />
    </Svg>
  );
}
