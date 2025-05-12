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
  color = "#FFFFFF"
}) => {
  const { size, lineHeight } = useMemo(() => {
    const size = fontSize[variantSize];
    return {
      size: size,
      lineHeight: size + (size / 100 * 21)
    }
  }, [variantSize]);  

  return(
    <Text style={[
      styles[variant],
      {
        fontSize: size,
        lineHeight: lineHeight,
        color: color
      }
    ]}>
      {text}
    </Text>
  )
};

const styles = StyleSheet.create({
  NS_R: {
    fontFamily: "NatoSans",
    fontWeight: 400,
    letterSpacing: 0,
  },  
  NS_SB: {
    fontFamily: "NatoSans",
    fontWeight: 600,
    letterSpacing: 0,
  },
  SO: {
    fontFamily: "SeymourOne",
    fontWeight: 400,
    letterSpacing: 0,
  }
})

export default memo(TextComponent);
