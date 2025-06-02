import { ColorValue } from "react-native";

type OnboardingColorsUnit =
  "background"
  | "commentBackground"
  | "commentText"
  | "buttonSelectionBackground"
  | "buttonSelectionText"
  | "buttonGreenBackground"
  | "buttonGreenText";

type MainColorsUnit = 
  "background"
  | "text"
  | "buttonBackground"
  | "border"
  | "buttonBottomTabBackground";

type ColorsUtility<T extends string> = {
  [P in T]: ColorValue;
};
 
export type OnboardingColorsType = ColorsUtility<OnboardingColorsUnit>;
export type MainColorsType = ColorsUtility<MainColorsUnit>;

export type AllColorsUnit = OnboardingColorsType;
