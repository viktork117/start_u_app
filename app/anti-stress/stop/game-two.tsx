import React, { memo, useCallback, useMemo } from "react";
import { Image, ImageBackground, StyleSheet, useWindowDimensions, View } from "react-native";
import { useRouter } from "expo-router";

import TextComponent from "@/components/ui/TextComponent";

import ButtonGreen from "@/components/Buttons/ButtonGreen";
import Header from "@/components/Header";

import CommentPNG from "../../../assets/images/Union2.png";
import ImageTwo from "../../../assets/images/icons/Group 144.png";
import first from "../../../assets/images/textGame/Шаг 1.png";
import second from "../../../assets/images/textGame/остановись.png";
import CommentComponent from "@/components/ui/CommentComponent";

const DATA = {
  text: "  1. Физически замри на 3-5 секунд.\n\n  2. Скажи вслух или про себя: «Стоп!»\n\n  3. Отложи предмет, который держишь.",
  image: first,
  imageTwo: second,
  textTwo: "Прерви поток мыслей. Просто остановись, как будто нажал паузу. Сделай глубокий вдох."
};

const GameTwo = () => {
  const routs = useRouter();
  const { height, width } = useWindowDimensions();

  const styles = useMemo(() => createStyle(), [])

  const onGo = useCallback(() => routs.push("/anti-stress/stop/game-three"), [routs])

  return (
    <View style={styles.containerBackground}>
      <View style={{ flexDirection: "column", justifyContent: "center", alignItems: "flex-start", width: "100%" }}>
        <Header bgColor={"#D1E7EE"}  paddingHorizontal={0} />
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
      <View style={styles.container}>
        <ImageBackground
          source={CommentPNG}
          style={{ height: 110, width: (width / 100 * 75), justifyContent: "flex-start", marginLeft: 60 }}
          resizeMode="contain"
        >
          <View style={{ height: "80%", width: "100%", justifyContent: "center", alignItems: "center", padding: 16 }}>
            <TextComponent
              key={DATA.textTwo}
              text={DATA.textTwo}
              color={"#000000"}
              variant="NS_L"
              variantSize="S"
              align="center"
            /> 
          </View>
        </ImageBackground>
        <View style={{ width: "100%", alignItems: "flex-start" }}>
          <Image
            key={ImageTwo}
            source={ImageTwo}
            style={{ height:  height / 100 * 15, width: 150 }}
            resizeMode="contain"
          />
        </View>
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
      flexDirection: "column",
      alignItems: "flex-start",
      width: "100%",
    }
  })

export default memo(GameTwo);

