import { Redirect, useRouter } from 'expo-router';
import React, { memo, useCallback, useEffect } from 'react';

import ButtonGreen from '@/components/Buttons/ButtonGreen';
import CommentOnboarding from '@/components/Onboarding/CommentOnboarding';
import PatternedBackground from '@/components/Onboarding/PatternedBackground';

import { getUserCourseAndGroup } from '@/stores/db/init';

import { onboarding } from '@/constants/Colors';
import { onboardingText } from "@/language/ru";

const OnboardingHello = () => {
  const routs = useRouter();

  const { buttonGreenBackground, buttonGreenText } = onboarding;
  const {
    startTextOne,
    startTextTwo,
    startTextButton
  } = onboardingText;

  const fnOnClick = useCallback(() => {
    routs.navigate("/onboarding/onboarding-course")
  }, [routs]);

  useEffect(() => {
    const fnCall = async () => {
      const result = await getUserCourseAndGroup();
      if (result) {
        return <Redirect href={"/"} />;
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
