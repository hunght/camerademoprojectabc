import Svg, {
  ClipPath,
  Defs,
  Circle,
  Rect,
  Image,
  Polygon,
  Text
} from 'react-native-svg';

import React from 'react';
import { View, Dimensions } from 'react-native';
const height = Dimensions.get('window').height;

const Poly = ({ coordinates }) => {
  console.log('coordinates ===', coordinates);
  const { bottomLeft, bottomRight, topLeft, topRight } = coordinates;
  const string = ` ${topRight.x},${height - topRight.y} ${topLeft.x},${height -
    topLeft.y} ${bottomLeft.x},${height - bottomLeft.y} ${
    bottomRight.x
  },${height - bottomRight.y} `;
  return (
    <Defs>
      <ClipPath id="hexagon">
        <Polygon points={string} />
      </ClipPath>
    </Defs>
  );
};

const SVGView = ({ navigation }) => (
  <View style={{ backgroundColor: 'transparent', flex: 1 }}>
    <Svg
      style={{
        position: 'absolute',
        left: 0,
        top: 0,
        backgroundColor: 'transparent'
      }}
      height={Dimensions.get('window').height}
      width={Dimensions.get('window').width}
    >
      <Poly coordinates={navigation.state.params.coordinates} />
      <Image
        x="0"
        y="0"
        width="100%"
        height="100%"
        preserveAspectRatio="xMidYMid slice"
        href={{ uri: navigation.state.params.pathRotate }}
        clipPath="url(#hexagon)"
        // transform={{ rotation: 180 }}
      />
    </Svg>
  </View>
);

export default SVGView;
