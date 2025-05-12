import { useRouter } from "expo-router";

import ButtonGreen from "@/components/Buttons/ButtonGreen";
import ButtonText from "@/components/Buttons/ButtonText";
import CommentComponent from "@/components/Onboarding/CommentOnboarding";
import PatternedBackground from "@/components/Onboarding/PatternedBackground";

import { onboardingText, textButton } from "@/language/ru";
import { onboarding } from "@/constants/Colors";

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

  return (
    <PatternedBackground>
      <CommentComponent 
        textOne={finishTextOne}
        textTwo={finishTextTwo}
      />
      <ButtonGreen
        text={next}
        onClick={() => {}}
        backgroundColor={buttonGreenBackground}
        textColor={buttonGreenText}
      />
      <ButtonText
        text={back}
        onClick={() => routs.back()}
        textColor={buttonSelectionText}
      />
    </PatternedBackground>
  );
};

export default OnboardingFinish;
