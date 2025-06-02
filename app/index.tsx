
import React, { 
  useCallback,
  useMemo,
  useEffect,
  useState
} from 'react';

import {
  useWindowDimensions,
  View,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import { useRouter, Redirect } from 'expo-router';

import { getUserCourseAndGroup } from "@/stores/db/init";

import PatternedBackground from "@/components/Onboarding/PatternedBackground";
import MainContainer from '@/components/Main/MainContainer';
import ButtonNavigation from '@/components/Main/ButtonNavigation';

import { mainText } from '@/language/ru';

import IconMyInstitute from "../assets/images/icons/Group 78.png"
import IconPROStudies from "../assets/images/icons/Group 20.png"
import IconBeOwn from "../assets/images/icons/Group 67.png"
import IconAntiStress from "../assets/images/icons/Group 120.png"

let IS_FIRST_START_GLOBAL: boolean = true;

const MainApp = () => {
  const routs = useRouter();

  const [isFirstStart, setFirstStart] = useState<boolean | null>(null);
  const { height } = useWindowDimensions();
  const {
    myUniver,
    proStudy,
    beYourself,
    antistress
  } = mainText;

  const styles = useMemo(
    () => createStyles(height),
    [height]
  );

  //TODO: изменить после создания этих страниц
  const onClickMyInstitute = useCallback(() => routs.navigate("/my-institute"), [routs]);
  const onClickProStudy = useCallback(() => routs.navigate("/"), [routs])
  const onClickBeOwn = useCallback(() => routs.navigate("/"), [routs])
  const onClickAntiStress = useCallback(() => routs.push("/anti-stress"), [routs])

  const buttonProps = [
    { icon: IconMyInstitute, text: myUniver, onPress: onClickMyInstitute },
    { icon: IconPROStudies, text: proStudy, onPress: onClickProStudy },
    { icon: IconBeOwn, text: beYourself, onPress: onClickBeOwn },
    { icon: IconAntiStress, text: antistress, onPress: onClickAntiStress },
  ];
  
  useEffect(() => {
    const fnCall = async () => {
      const result = await getUserCourseAndGroup();
      if (result) {
        IS_FIRST_START_GLOBAL = !result;
      }
      setFirstStart(!result);
    }

    fnCall();
  }, []);

  if (isFirstStart === null && IS_FIRST_START_GLOBAL) return (
    <PatternedBackground>
      <ActivityIndicator size="large" color="#000000" />
    </PatternedBackground>
  );

  if (isFirstStart) return (
    <Redirect href="/onboarding" />
  )

  // if (__DEV__) return (
  //   <Redirect href="/my-institute/building-addresses" />
  // );

  return (
    <MainContainer>
      <View style={styles.container}>
        <View style={styles.containerRow}>
          <ButtonNavigation {...buttonProps[0]} />
          <ButtonNavigation {...buttonProps[1]} />
        </View>
        <View style={styles.containerRow}>
          <ButtonNavigation {...buttonProps[2]} />
          <ButtonNavigation {...buttonProps[3]} />
        </View>
      </View>
    </MainContainer>
  );
}

const createStyles = (
  height: number,
) => 
  StyleSheet.create({
    container: {
      flexDirection: "column",
      rowGap: height / 100 * 2.58,
      paddingHorizontal: 16,
    },
    containerRow: {
      flexDirection: "row",
      justifyContent: "space-between"
    }
  })
  
  export default MainApp;
