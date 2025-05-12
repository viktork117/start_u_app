import React, { memo, useCallback, useEffect } from 'react';
import { useRouter } from 'expo-router';

import ButtonGreen from '@/components/Buttons/ButtonGreen';
import CommentOnboarding from '@/components/Onboarding/CommentOnboarding';
import PatternedBackground from '@/components/Onboarding/PatternedBackground';

import { getUserCourseAndGroup } from '@/stores/db/init';

import { onboarding } from '@/constants/Colors';
import { onboardingText } from "@/language/ru"

const OnboardingHello = () => {
  const routs = useRouter();
  const { buttonGreenBackground, buttonGreenText } = onboarding;
  const {
    startTextOne,
    startTextTwo,
    startTextButton
  } = onboardingText;

  const fnOnClick = useCallback(() => {
    routs.navigate("/onboarding-course")
  }, [routs]);

  useEffect(() => {
    const fnCall = async () => {
      const result = await getUserCourseAndGroup();
      if (result) {
        routs.navigate("/(main)");
      }
    }
    fnCall();
  }, [])

  return (
    <PatternedBackground>
      <CommentOnboarding 
        textOne={startTextOne}
        textTwo={startTextTwo}
      />
      <ButtonGreen
        text={startTextButton}
        onClick={fnOnClick}
        backgroundColor={buttonGreenBackground}
        textColor={buttonGreenText}
      />
    </PatternedBackground>
  );
}

export default memo(OnboardingHello);
