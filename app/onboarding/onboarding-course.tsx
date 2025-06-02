import { useRouter } from 'expo-router';
import { useCallback, useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';

import ButtonGreen from '@/components/Buttons/ButtonGreen';
import ButtonSelections from '@/components/Buttons/ButtonSelections';
import ButtonText from '@/components/Buttons/ButtonText';
import CommentOnboarding from '@/components/Onboarding/CommentOnboarding';
import PatternedBackground from '@/components/Onboarding/PatternedBackground';
import { onboarding } from '@/constants/Colors';

import { getUserCourse, addUserCourse } from '@/stores/db/init';

import { courseName, onboardingText, textButton } from "@/language/ru";

const OnboardingCourse = () => {
const { courseTextOne } = onboardingText;
const { fist, fisp } = courseName;
const { next, back } = textButton;
const {
  buttonGreenBackground,
  buttonGreenText,
  buttonSelectionText,
  buttonSelectionBackground,
} = onboarding;

  const routs = useRouter();
  const [activeButton, setActiveButton] = useState<string | null>(null);

  const fnOnCLickNext = useCallback(() => routs.navigate("/onboarding/onboarding-group"), [routs]);
  const fnOnCLickBack = useCallback(() => routs.back(), [routs]);

  const getUser: any = async (active: string) => {
    await addUserCourse(active);
  };

  const fnSetActiveButton = (active: string) => {
    setActiveButton(active);
    getUser(active);
  }

  const course = async () => {
    const result = await getUserCourse();
    if (!activeButton) {
      setActiveButton(result);
    }
  };

  useEffect(() => {
    course();
  }, [])
  
  return (
    <PatternedBackground>
        <CommentOnboarding textTwo={courseTextOne} />
        <View style={styles.buttonContainer}>
          <ButtonSelections
            text={fist}
            onClick={() => fnSetActiveButton(fist)}
            activeButton={activeButton === fist}
            textColor={buttonSelectionText}
            backgroundColor={buttonSelectionBackground}
          />
            <ButtonSelections
            text={fisp}
            onClick={() => fnSetActiveButton(fisp)}
            activeButton={activeButton === fisp}
            textColor={buttonSelectionText}
            backgroundColor={buttonSelectionBackground}
          />
        </View>
        <ButtonGreen
          text={next}
          onClick={fnOnCLickNext}
          backgroundColor={buttonGreenBackground}
          textColor={buttonGreenText}
          disabled={!activeButton}
        />
        <ButtonText
          text={back}
          onClick={fnOnCLickBack}
          textColor={buttonSelectionText}
        />
    </PatternedBackground>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    columnGap: 20,
  },
});

export default OnboardingCourse;
