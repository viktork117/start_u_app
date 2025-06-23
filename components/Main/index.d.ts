import { type ReactNode } from "react";
import {
  type StyleProp,
  type ViewStyle
} from "react-native";

export type MainContainerProps = {
  safeAreaStyle?: StyleProp<ViewStyle>;
  isDataDisplayView?: boolean;
  isHeaderView?: boolean;
  isMain?: boolean;
  children: ReactNode[] | ReactNode;
};