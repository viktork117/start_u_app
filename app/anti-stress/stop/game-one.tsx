import React, { memo, useCallback, useMemo } from "react";
import { Image, StyleSheet, useWindowDimensions, View } from "react-native";
import { useRouter } from "expo-router";

import TextComponent from "@/components/ui/TextComponent";

import ButtonGreen from "@/components/Buttons/ButtonGreen";
import CommentPNG from "../../../assets/images/Union.png";
import ImageTwo from "../../../assets/images/icons/Group 144.png";

import first from "../../../assets/images/textGame/5 предметов.png";

const DATA = {
  text: "  Сконцентрируйся. Остановись и подыши, подумай — действуй осознанно.",
  image: first
};

const GameOne = () => {
  const routs = useRouter();
  const { height, width } = useWindowDimensions();

  const styles = useMemo(() => createStyle(), [])

  const onGo = useCallback(() => routs.push("/anti-stress/stop/game-two"), [routs])

  return (
    <View style={styles.containerBackground}>
      <View key={1} style={{ position: "absolute", top: height / 100 * -25 }}>
        <Image
          source={CommentPNG}
          style={{ height: height / 10 * 7, width: width / 100 * 180 }}
          resizeMode="contain"
        />
      </View>
      <View
        key={2}
        style={{
          width: "80%",
          height: height / 10 * 1,
          marginTop: height / 100 * 20,
          marginBottom: height / 100 * 13,
        }}>
        <TextComponent
          key={DATA.text}
          text={DATA.text}
          color={"#000000"}
          variant="NS_L"
        />
      </View>
      <View style={styles.container}>
        <Image
          key={ImageTwo}
          source={ImageTwo}
          style={{ height:  height / 100 * 30 }}
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
    },
    container: {
      flex: 1,
      flexDirection: "column",
      alignItems: "center",
      rowGap: 15,
    }
  })

export default memo(GameOne);

