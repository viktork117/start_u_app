import { useRouter } from "expo-router";
import { useCallback, useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";

import ButtonGreen from "@/components/Buttons/ButtonGreen";
import ButtonSelections from "@/components/Buttons/ButtonSelections";
import ButtonText from "@/components/Buttons/ButtonText";
import CommentComponent from "@/components/Onboarding/CommentOnboarding";
import PatternedBackground from "@/components/Onboarding/PatternedBackground";

import { addUserGroup, getUserCourse, getUserGroup } from "@/stores/db/init";

import { onboarding } from "@/constants/Colors";
import {
  groupFistName,
  groupFispName,
  onboardingText,
  textButton,
  courseName
} from "@/language/ru";

const OnboardingGroup = () => {
  const { groupTextOne } = onboardingText; 
  const { next, back } = textButton;
  const { fist, fisp } = courseName;
  const {
    buttonGreenBackground,
    buttonGreenText,
    buttonSelectionText,
    buttonSelectionBackground,
  } = onboarding;

  const routs = useRouter();
  const [groups, setGroups] = useState<string[]>([]);
  const [activeButton, setActiveButton] = useState<null | string>(null)

  const course = async () => {
    try {
      const result = await getUserCourse();
      const resultGroup = await getUserGroup();
      const groupFist = Object.values(groupFistName)
      const groupFisp = Object.values(groupFispName)

      if (fist === result) {
        setGroups(groupFist);
      }

      if (fisp === result) {
        setGroups(groupFisp);
      }

      setActiveButton(resultGroup);
    } catch (e) {
      console.warn(e);
    }
  };

  
  const fnOnCLickNext = useCallback(() => routs.navigate("/onboarding/onboarding-finish"), [routs]);
  const fnOnCLickBack = useCallback(() => routs.back(), [routs]);
  
  const fnSetActiveButton = async (index: number) => {
    setActiveButton(groups[index]);
    await addUserGroup(groups[index]);
  }

  useEffect(() => {
    course();
  }, [])

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
