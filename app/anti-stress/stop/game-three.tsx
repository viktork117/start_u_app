import React, { memo, useCallback, useMemo } from "react";
import { Image, StyleSheet, useWindowDimensions, View } from "react-native";
import { useRouter } from "expo-router";

import TextComponent from "@/components/ui/TextComponent";

import ButtonGreen from "@/components/Buttons/ButtonGreen";
import Header from "@/components/Header";

import ImageTwo from "../../../assets/images/icons/Group 8.png";
import first from "../../../assets/images/textGame/Шаг 2.png";
import second from "../../../assets/images/textGame/подумай.png";
import CommentComponent from "@/components/ui/CommentComponent";

const DATA = {
  text: "  Задай себе вопросы:\n\n  1. «Что я сейчас чувствую?» (гнев, страх, растерянность)\n\n  2. «Почему я так реагирую?» (триггер: дедлайн, конфликт)\n\n  3. «Это соответствует реальности?»\n\n Оцени мысли рационально. ",
  image: first,
  imageTwo: second,
  textTwo: ""
};

const GameTwo = () => {
  const routs = useRouter();
  const { height } = useWindowDimensions();

  const styles = useMemo(() => createStyle(), [])

  const onGo = useCallback(() => routs.push("/anti-stress/stop/game-four"), [routs])

  return (
    <View style={styles.containerBackground}>
      <View style={{ flexDirection: "column", justifyContent: "center", alignItems: "flex-start", width: "100%" }}>
        <Header bgColor={"#D1E7EE"} />
      </View>
      <View style={{ flexDirection: "column", justifyContent: "center", alignItems: "center", width: "100%", rowGap: 16, marginBottom: 32 }}>
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
          style={{  height: 39 }}
        />
        <CommentComponent backgroundColor={"#fff"}>
          <TextComponent
            key={DATA.text}
            text={DATA.text}
            color={"#000000"}
            variant="NS_L"
            variantSize="B"
          /> 
        </CommentComponent>
      </View>
      <View style={styles.container}>
        <Image
          key={ImageTwo}
          source={ImageTwo}
          style={{ height:  height / 100 * 15 }}
          resizeMode="contain"
        />
      </View>
    
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

export default memo(GameTwo);

