import { type ReactNode } from "react";
import {
  type StyleProp,
  type ViewStyle
} from "react-native";

export type MainContainerProps = {
  safeAreaStyle?: StyleProp<ViewStyle>;
  isDataDisplayView?: boolean;
  isHeaderView?: boolean;
  children: ReactNode[] | ReactNode;
};