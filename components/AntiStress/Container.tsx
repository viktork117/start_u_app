import { FontAwesome6 } from "@expo/vector-icons";
import {
  memo,
  useMemo,
  type FC
} from "react";
import {
  StyleSheet,
  useWindowDimensions,
  View,
  type ColorValue,
  type StyleProp,
  type ViewStyle
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import ButtonGreen from "../Buttons/ButtonGreen";
import ButtonBase from "../ui/ButtonBase";
import CommentComponent from "../ui/CommentComponent";
import TextComponent from "../ui/TextComponent";

type ContainerProps = {
  safeAreaStyle?: StyleProp<ViewStyle>;
  textOne: string;
  textTwo: string;
  textThreeHeader?: string;
  textThree: string;
  textFour: string;
  onPressBack: () => void;
  onPressGo: () => void;
}

const Container: FC<ContainerProps> = ({
  safeAreaStyle,
  textOne,
  textTwo,
  textThreeHeader,
  textThree,
  textFour,
  onPressBack,
  onPressGo,
}) => {
  const { height } = useWindowDimensions();
  const styles = useMemo(() => fnStyles("#ADD3DE", height), [height]);

  const parseTextThree = useMemo(() => {
    const tmp = textThree.split(".");
    const chance = tmp.map((item) => item.trim().split("-"));
    return chance;
  }, [textThree])
  
  return (
    <SafeAreaView style={[ styles.safeAreaDefault, safeAreaStyle]}>
      <ButtonBase onPress={onPressBack} style={{ width: 24, marginTop: 24 }}>
        <FontAwesome6 name="arrow-left-long" size={24} color={"#000000"} />
      </ButtonBase>
      <View style={styles.container}>
        <View style={styles.containerChild}>
          <CommentComponent backgroundColor={"#ffffff"}>
            <TextComponent text={textOne} color={"#000000"} variant="NS_L" />
            <TextComponent text={textTwo} color={"#000000"} variant="NS_L" />
            <View>
              {textThreeHeader && <TextComponent text={textThreeHeader} color={"#000000"} variant="NS_L" />}
              {parseTextThree.map((item: string[]) => (
                item.length > 1 && (
                  <View key={item[0]} style={{ flexDirection: "row", rowGap: 0, height: 22, margin: 0, padding: 0 }}>
                    <TextComponent
                      text={String(item[0])}
                      color={"#000000"}
                      variant="NS_R"
                      weight={"700"}
                    />
                    <TextComponent
                      text={`-${item[1]}`}
                      color={"#000000"}
                      variant="NS_L"
                    />
                  </View>
              )))}
            </View>
            <TextComponent text={textFour} color={"#000000"} variant="NS_L" />
          </CommentComponent>
          <ButtonGreen text={"Начинаем"} onClick={onPressGo} textColor={"#FFFFFF"} />
        </View>
      </View>
      <View />
    </SafeAreaView>
  )
};

const fnStyles = (
  bgcolor: ColorValue,
  height: number,
) => StyleSheet.create({
  safeAreaDefault: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: bgcolor,
    flexDirection: "column",
    justifyContent: "space-between",
  },
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
  },
  containerChild: {
    rowGap: 30,
  },
  text: {
    color: "#000000",
  },
})

export default memo(Container);