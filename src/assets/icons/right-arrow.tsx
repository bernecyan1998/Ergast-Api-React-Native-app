import * as React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';

export default function RightArrow(props: SvgProps) {
  return (
    <Svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        d="M17 12H3"
        stroke={props.fill}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M21.643 11.786l-3.431-2.059a.8.8 0 00-1.212.686v3.174a.8.8 0 001.212.686l3.43-2.059a.25.25 0 000-.428z"
        fill={props.fill}
      />
    </Svg>
  );
}
