import { Dimensions, PixelRatio } from 'react-native';

const { height, width } = Dimensions.get('window');
const GUIDELINEBASEWIDTH = 414;
const GUIDELINEBASEHEIGHT = 896;

export const DeviceHeight = height;
export const DeviceWidth = width;

export const HorizontalScale = size => (width / GUIDELINEBASEWIDTH) * size;
export const VerticalScale = size => (height / GUIDELINEBASEHEIGHT) * size;

export const FontSizeScale = fontSize => fontSize / PixelRatio.getFontScale();
