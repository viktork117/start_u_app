import React, { memo, useCallback, useEffect } from 'react';
import { useRouter } from 'expo-router';

import ButtonGreen from '@/components/Buttons/ButtonGreen';
import CommentOnboarding from '@/components/Onboarding/CommentOnboarding';
import PatternedBackground from '@/components/Onboarding/PatternedBackground';

import { onboarding } from '@/constants/Colors';
import { onboardingText } from "@/language/ru"

import { getUsers, addUser, clearUsersTableAndResetId } from '@/stores/db/init';

const OnboardingHello = () => {
  const routs = useRouter();
  const { buttonGreenBackground, buttonGreenText } = onboarding;
  const {
    startTextOne,
    startTextTwo,
    startTextButton
  } = onboardingText;

  const fnOnClick = useCallback(() => {
    clearUsersTableAndResetId();
    routs.navigate("/onboarding-course")
  }, [routs]);

  const group = "afaf";
  const course = "dasasdasd"


  const getUser: any = async () => {
    await addUser(group, course);
    await getUsers()
  };

  useEffect(() => {
    getUser();

  }, [group, course])

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
