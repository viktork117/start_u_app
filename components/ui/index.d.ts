import { type ReactNode } from "react";
import {
  type ColorValue,
  type StyleProp,
  type ViewStyle,
  type TextStyle,
} from "react-native";

export type CommentComponentProps = {
  backgroundColor: ColorValue;
  children: ReactNode[] | ReactNode;
}

//TextComponent

type VariantSize = "XL" | "L" | "B" | "M" | "S" | "XS";

export type FontSize = {
  [P in VariantSize]: number;
}

type FontVariant = 
  "NS_R" //Noto Sans Regular
  | "NS_SB" //Noto Sans Semi Bold
  | "NS_L" //Noto Sans Light
  | "SO"; //Seymour One

export type TextComponentProps = {
  text: string;
  variantSize?: VariantSize;
  variant?: FontVariant;
  color?: ColorValue;
  weight?: TextStyle["fontWeight"];
  align?: TextStyle["textAlign"];
};

//ButtonBase
export type ButtonsBaseProps = {
  onPress: () => void;
  style?: StyleProp<ViewStyle>,
  disabled?: boolean;
  children: ReactNode,
}
