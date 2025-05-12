import { type ReactNode } from "react";
import {
  type ColorValue,
  type StyleProp,
  type ViewStyle,
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
  | "SO"; //Seymour One

export type TextComponentProps = {
  text: string;
  variantSize?: VariantSize;
  variant?: FontVariant;
  color?: ColorValue;
};

//ButtonBase
export type ButtonsBaseProps = {
  onPress: () => void;
  style: StyleProp<ViewStyle>,
  disabled?: boolean;
  children: ReactNode,
}
