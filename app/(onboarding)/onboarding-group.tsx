import { useRouter } from "expo-router";
import { useCallback, useState } from "react";
import { StyleSheet, View } from "react-native";

import ButtonGreen from "@/components/Buttons/ButtonGreen";
import ButtonSelections from "@/components/Buttons/ButtonSelections";
import ButtonText from "@/components/Buttons/ButtonText";
import CommentComponent from "@/components/Onboarding/CommentOnboarding";
import PatternedBackground from "@/components/Onboarding/PatternedBackground";

import { onboarding } from "@/constants/Colors";
import { groupFistName, groupFispName, onboardingText, textButton } from "@/language/ru";

const OnboardingGroup = () => {
  const { groupTextOne } = onboardingText; 
  const { next, back } = textButton;
  const {
    buttonGreenBackground,
    buttonGreenText,
    buttonSelectionText,
    buttonSelectionBackground,
  } = onboarding;
  
  const groups = Object.values(groupFistName);

  const routs = useRouter();
  const [activeButton, setActiveButton] = useState<null | string>(null)
  
  const fnOnCLickNext = useCallback(() => routs.navigate("/onboarding-finish"), [routs]);
  const fnOnCLickBack = useCallback(() => routs.back(), [routs]);

  const fnSetActiveButton = (index: number) => {
    setActiveButton(groups[index]);
  }

  return (
      <PatternedBackground>
        <CommentComponent textTwo={groupTextOne} />
        <View style={styles.container}>
          {groups.map((item, index) => (
            <ButtonSelections
              key={item}
              text={item}
              height={46}
              onClick={() => fnSetActiveButton(index)}
              activeButton={activeButton === item}
              textColor={buttonSelectionText}
              backgroundColor={buttonSelectionBackground}
            />
          ))}
        </View>
        <ButtonGreen
          text={next}
          onClick={fnOnCLickNext}
          textColor={buttonGreenText}
          backgroundColor={buttonGreenBackground}
          disabled={!activeButton}
        />
        <ButtonText
          text={back}
          onClick={fnOnCLickBack}
          textColor={buttonSelectionText}
        />
      </PatternedBackground>
    );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 20,
    flexWrap: "wrap",
  },
});

export default OnboardingGroup;
