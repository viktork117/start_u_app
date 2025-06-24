import React, {
  memo,
  useMemo,
  type FC,
} from "react";
import { StyleSheet, Text } from "react-native";

import {
  type FontSize,
  type TextComponentProps,
} from "./";

const fontSize: FontSize = {
  "XL": 32,
  "L": 24,
  "B": 18,
  "M": 16,
  "S": 14,
  "XS": 12
}

const TextComponent: FC<TextComponentProps> = ({
  text,
  variantSize = "B",
  variant = "NS_R",
  color = "#FFFFFF",
  weight,
  align,
  style,
  children,
}) => {
  const { size, lineHeight } = useMemo(() => {
    const size = fontSize[variantSize];
    return {
      size: size,
      lineHeight: size + (size / 100 * 21)
    }
  }, [variantSize]);

  const styles = useMemo(() => createStyles(weight), [weight]);

  return(
    <Text
      style={[
        {
          fontSize: size,
          lineHeight: lineHeight,
          color: color,
          wordWrap: "break-word",
          textAlign: align,
        },
        styles[variant],
        style
      ]}>
      {text}
      {children}
    </Text>
  )
};

const createStyles = (weight: any | undefined) =>
  StyleSheet.create({
    NS_L: {
      fontFamily: "NatoSans",
      fontWeight: weight ?? 300,
      letterSpacing: 0,
    },
    NS_R: {
      fontFamily: "NatoSans",
      fontWeight: weight ?? 400,
      letterSpacing: 0,
    },
    NS_SB: {
      fontFamily: "NatoSans",
      fontWeight: weight ?? 600,
      letterSpacing: 0,
    },
    SO: {
      fontFamily: "SeymourOne",
      fontWeight: weight ?? 400,
      letterSpacing: 0,
    }
})

export default memo(TextComponent);
