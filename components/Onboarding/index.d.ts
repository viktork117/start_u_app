import { type ReactNode } from "react";
import {
  type ImageResizeMode,
  type StyleProp,
  type ViewStyle
} from "react-native";

export type TPatternedBackground = {
  imageBackgroundStyle?: StyleProp<ViewStyle>;
  safeAreaStyle?: StyleProp<ViewStyle>;
  resizeMode?: ImageResizeMode;
  children: ReactNode;
}
