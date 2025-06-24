import React, { memo, useCallback, useMemo } from "react";
import { Image, StyleSheet, useWindowDimensions, View } from "react-native";
import { useRouter } from "expo-router";

import TextComponent from "@/components/ui/TextComponent";

import ButtonGreen from "@/components/Buttons/ButtonGreen";
import Header from "@/components/Header";

import first from "../../../assets/images/textGame/Шаг 4.png";
import second from "../../../assets/images/textGame/действуй осознанно.png";
import CommentComponent from "@/components/ui/CommentComponent";

const DATA = {
  text: "  Выбери оптимальный вариант:\n\n  Измени ситуацию: например, написать преподавателю c вопросом.\n\n  Измени отношение: «Да, я волнуюсь, но это не конец света».\n\n  Отложить реакцию: «Сначала 5 минут подышу, потом решу».",
  image: first,
  imageTwo: second,
  textTwo: ""
};

const GameFive = () => {
  const routs = useRouter();
  const { height } = useWindowDimensions();

  const styles = useMemo(() => createStyle(), [])

  const onGo = useCallback(() => routs.push("/anti-stress/stop/end-game"), [routs])

  return (
    <View style={styles.containerBackground}>
      <View style={{ flexDirection: "column", justifyContent: "center", alignItems: "flex-start", width: "100%" }}>
        <Header bgColor={"#D1E7EE"} paddingHorizontal={0} />
      </View>
      <View style={{
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        rowGap: 16,
        marginBottom: 32
        }}>
        <Image
          key={DATA.image}
          source={DATA.image}
          resizeMode="contain"
          style={{  height: 39 }}
        />
        <Image
          key={DATA.imageTwo}
          source={DATA.imageTwo}
          resizeMode="center"
          style={{  height: 78 }}
        />
      </View>

      <CommentComponent backgroundColor={"#fff"}>
        <TextComponent
          key={DATA.text}
          text={DATA.text}
          color={"#000000"}
          variant="NS_L"
          variantSize="B"
        /> 
      </CommentComponent>

      <View style={{ height: 150 }} />
    
      <View style={{ alignSelf: "stretch", marginBottom: 70, rowGap: 15 }}>
        <ButtonGreen
          text={"Дальше..."}
          onClick={onGo}
          textColor={"#fff"}
        />
      </View>
    </View>
  )
}

const createStyle = () => 
  StyleSheet.create({
    containerBackground: {
      display: "flex",
      flex: 1,
      flexDirection: "column",
      alignItems: "center",
      backgroundColor: "#D1E7EE",
      paddingHorizontal: 16,
      justifyContent: "space-between",
      rowGap: 16,
    },
    container: {
      flex: 1,
      flexDirection: "column",
      alignItems: "flex-start",
      rowGap: 15,
    }
  })

export default memo(GameFive);

