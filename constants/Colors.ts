import {
  type MainColorsType,
  type OnboardingColorsType,
} from "./";

const black = "#000000";
const darkCharcoal = "#202D2D";
const steelGray = "#687076";
const deepTeal = "#047F8E";
const skyBlue = "#ADD3DE";
const paleSky = "#F3F7F8B2";
const white = "#ffffff";
const lightWhite = "#f3f7f8";
const lavaRed = "#D74A28";
const amberGold = "#ED9344"

// darkText: darkCharcoal,
// background: white,
// tint: white,
// icon: steelGray,
// tabIconDefault: steelGray,
// tabIconSelected: white,

export const onboarding: OnboardingColorsType = {
  background: skyBlue,
  commentBackground: white,
  commentText: black,
  buttonSelectionBackground: paleSky,
  buttonSelectionText: deepTeal,
  buttonGreenBackground: deepTeal,
  buttonGreenText: white,
};

export const main: MainColorsType = {
  background: lightWhite,
  text: darkCharcoal,
  buttonBackground: "rgba(147, 210, 230, 0.5)",
  border: deepTeal,
  buttonBottomTabBackground: "#d1e7ee"
}

export const menu = {
  background: lightWhite,
  text: darkCharcoal,
  colorButton: deepTeal,
  borderColor: deepTeal,
  alterColorButton: amberGold,
  alterBorderColor: lavaRed,
}
