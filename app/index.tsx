import React, {
  useCallback,
  useEffect,
  useMemo,
  useState
} from 'react';

import { Redirect, useRouter } from 'expo-router';
import {
  ActivityIndicator,
  StyleSheet,
  useWindowDimensions,
  View,
} from "react-native";

import { useUserData } from "@/stores/useUserData";

import ButtonNavigation from '@/components/Main/ButtonNavigation';
import MainContainer from '@/components/Main/MainContainer';
import PatternedBackground from "@/components/Onboarding/PatternedBackground";

import { mainText } from '@/language/ru';

import IconAntiStress from "../assets/images/icons/Group 120.png";
import IconPROStudies from "../assets/images/icons/Group 20.png";
import IconBeOwn from "../assets/images/icons/Group 67.png";
import IconMyInstitute from "../assets/images/icons/Group 78.png";

const MainApp = () => {
  const routs = useRouter();
  const { isDataComplete, loadUserData } = useUserData();
  const [isLoading, setIsLoading] = useState(true);
  
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
  const onClickMyInstitute = useCallback(() => routs.push("/my-institute"), [routs]);
  const onClickProStudy = useCallback(() => routs.push("/pro-studies"), [routs])
  const onClickBeOwn = useCallback(() => routs.push("/+not-found"), [routs])
  const onClickAntiStress = useCallback(() => routs.push("/anti-stress"), [routs])

  const buttonProps = [
    { icon: IconMyInstitute, text: myUniver, onPress: onClickMyInstitute },
    { icon: IconPROStudies, text: proStudy, onPress: onClickProStudy },
    { icon: IconBeOwn, text: beYourself, onPress: onClickBeOwn },
    { icon: IconAntiStress, text: antistress, onPress: onClickAntiStress },
  ];
  
  useEffect(() => {
    const init = async () => {
      await loadUserData();
      setIsLoading(false);
    };

    init();
  }, [loadUserData]);

  if (isLoading && !isDataComplete) return (
    <PatternedBackground>
      <ActivityIndicator size="large" color="#000000" />
    </PatternedBackground>
  );

  if (!isDataComplete) return (
    <Redirect href="/onboarding" />
  )

  return (
    <MainContainer isMain>
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
