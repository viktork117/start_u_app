import { ColorValue } from "react-native";

type ButtonsBase = {
  text: string;
  onClick: () => void;
  disabled?: boolean;
  textColor?: ColorValue;
}

export type ButtonGreenProps = ButtonsBase & {
  backgroundColor?: ColorValue;
}

export type ButtonSelectionsProps = ButtonsBase & {
  height?: number;
  activeButton?: boolean;
  backgroundColor?: ColorValue;
}

export type ButtonTextProps = ButtonsBase;


