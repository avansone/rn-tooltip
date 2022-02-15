//  @flow

import React from 'react';
import { View, StyleSheet } from 'react-native';
import Svg, {Path} from 'react-native-svg'

type Props = {
  style: any,
  isDown: boolean,
};

const Triangle = ({ style, isDown }: Props) => (
<View style={[styles.triangle, style, isDown ? styles.down : {}]} >
  <Svg fill={props.style.borderBottomColor}
    width="50px"
    height="16px"
    id="Layer_1"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    x="0px"
    y="0px"
    viewBox="0 0 22.63 6.6"
    xmlSpace="preserve"
    >
    <Path
      className="st0"
      d="M13.99,1.52l2.83,2.83c1.5,1.5,3.54,2.34,5.66,2.34H-0.15C1.97,6.69,4,5.85,5.5,4.35l2.83-2.83
    C9.89-0.04,12.43-0.04,13.99,1.52z"
    />
  </Svg>
</View> 
);

const styles = StyleSheet.create({
  down: {
    transform: [{ rotate: '180deg' }],
  },
  triangle: {
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderLeftWidth: 8,
    borderRightWidth: 8,
    borderBottomWidth: 15,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: 'white',
  },
});

export default Triangle;
