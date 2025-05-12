import React, {
  memo,
  useMemo,
  type FC,
} from "react";
import { 
  StyleSheet,
  type ColorValue,
} from "react-native";

import ButtonBase from "../ui/ButtonBase";
import TextComponent from "../ui/TextComponent";

import { type ButtonGreenProps } from "./";

const ButtonGreen: FC<ButtonGreenProps> = ({
  text,
  onClick,
  backgroundColor,
  textColor,
  disabled = false
}) => {
  const styles = useMemo(() =>
    fnGetStyles(backgroundColor),
  [backgroundColor]);
  
  return (
    <ButtonBase
      onPress={onClick}
      disabled={disabled}
      style={styles.button}
    >
      <TextComponent
        text={text}
        variant="NS_SB"
        variantSize="L"
        color={textColor}
      />
    </ButtonBase>
  );
}

const fnGetStyles = (
  color: ColorValue,
) =>
  StyleSheet.create({
    button: {
      backgroundColor: color,
      height: 56,
    }
})


export default memo(ButtonGreen);