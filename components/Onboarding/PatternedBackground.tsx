import React, { memo, useMemo, type FC } from "react";
import { ImageBackground, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { onboarding } from "@/constants/Colors";

import image from "../../assets/images/onboardingBackground/OnboardingBackground.png";

import { type TPatternedBackground } from "./";
import { OnboardingColorsType } from "@/constants";

const PatternedBackground: FC<TPatternedBackground> = ({
  imageBackgroundStyle,
  safeAreaStyle,
  resizeMode,
  children,
}) => {
  const styles = useMemo(() => fnStyles(onboarding), []);

  return (
    <ImageBackground
      source={image}
      resizeMode={resizeMode}
      style={[styles.imageBackgroundDefault, imageBackgroundStyle ?? ""]}
    >
      <SafeAreaView style={[ styles.safeAreaDefault, safeAreaStyle ?? "" ]}>
        <View style={styles.container}>
          <View style={styles.containerChild}>
            {children}  
          </View>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
}

const fnStyles = (
  colors: OnboardingColorsType
) => StyleSheet.create({
  imageBackgroundDefault: {
    flex: 1,
    backgroundColor: colors.background,
  },
  safeAreaDefault: {
    flex: 1,
    paddingHorizontal: 24,
  },
  container: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
  },
  containerChild: {
    rowGap: 30,
    marginTop: 30 
  }
})

export default memo(PatternedBackground);
