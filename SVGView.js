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
import { View } from 'react-native';

const ImageSVG = () => (
  <Svg height="100" width="100">
    <Defs>
      <ClipPath id="clip">
        <Circle cx="50%" cy="50%" r="40%" />
      </ClipPath>
    </Defs>
    <Rect x="0" y="0" width="100%" height="100%" fill="red" />
    <Rect x="5%" y="5%" width="50%" height="90%" />

    <Image
      x="5%"
      y="5%"
      width="50%"
      height="90%"
      preserveAspectRatio="xMidYMid slice"
      opacity="0.5"
      href={require('./assets/prize200.png')}
      clipPath="url(#clip)"
    />
    <Text
      x="50"
      y="50"
      textAnchor="middle"
      fontWeight="bold"
      fontSize="16"
      fill="blue"
    >
      HOGWARTS
    </Text>
  </Svg>
);

const SVGView = () => (
  <View style={{ backgroundColor: 'transparent', flex: 1 }}>
    <Svg
      style={{
        position: 'absolute',
        left: 0,
        top: 0
      }}
      height="200"
      width="200"
      viewBox="0 0 300 300"
    >
      <Defs>
        <ClipPath id="hexagon">
          <Polygon points="150,300 20,225 20,75 150,0 280,75 280,225" />
        </ClipPath>
      </Defs>

      <Image
        x="0"
        y="0"
        width="100%"
        height="100%"
        preserveAspectRatio="xMidYMid slice"
        href={require('./assets/prize200.png')} // my artwork.src is a data-uri… you can also require('./path/to/img.jpg') here too
        clipPath="url(#hexagon)"
      />
    </Svg>
  </View>
);

export default SVGView;
