import React, { memo, type FC } from "react";
import { ImageBackground, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import Colors from "@/constants/Colors";

import image from "../../assets/images/onboardingBackground/OnboardingBackground.png";

import { type TPatternedBackground } from "./";

const PatternedBackground: FC<TPatternedBackground> = ({
  imageBackgroundStyle,
  safeAreaStyle,
  resizeMode,
  children,
}) => {
  return (
    <ImageBackground
      source={image}
      resizeMode={resizeMode}
      style={[styles.imageBackgroundDefault, imageBackgroundStyle ?? ""]}
    >
      <SafeAreaView style={[ styles.safeAreaDefault, safeAreaStyle ?? "" ]}>
        {children}
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  imageBackgroundDefault: {
    flex: 1,
    backgroundColor: Colors.onboardingBackground,
  },
  safeAreaDefault: {
    flex: 1,
  }
})

export default memo(PatternedBackground);
