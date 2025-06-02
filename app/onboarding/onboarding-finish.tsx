import { useRouter } from "expo-router";

import ButtonGreen from "@/components/Buttons/ButtonGreen";
import ButtonText from "@/components/Buttons/ButtonText";
import CommentComponent from "@/components/Onboarding/CommentOnboarding";
import PatternedBackground from "@/components/Onboarding/PatternedBackground";

import { onboardingText, textButton } from "@/language/ru";
import { onboarding } from "@/constants/Colors";
import { useCallback } from "react";

const OnboardingFinish = () => {
  const {
    finishTextOne,
    finishTextTwo
  } = onboardingText;
  const {
    next,
    back
  } = textButton;
  const {
    buttonGreenBackground,
    buttonGreenText,
    buttonSelectionText,
  } = onboarding;

  const routs = useRouter();
    const fnOnCLickNext = useCallback(() => routs.navigate("/"), [routs]);
    const fnOnCLickBack = useCallback(() => routs.back(), [routs]);

  return (
    <PatternedBackground>
      <CommentComponent 
        textOne={finishTextOne}
        textTwo={finishTextTwo}
      />
      <ButtonGreen
        text={next}
        onClick={fnOnCLickNext}
        backgroundColor={buttonGreenBackground}
        textColor={buttonGreenText}
      />
      <ButtonText
        text={back}
        onClick={fnOnCLickBack}
        textColor={buttonSelectionText}
      />
    </PatternedBackground>
  );
};

export default OnboardingFinish;
