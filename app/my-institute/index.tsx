import { 
  type FC,
} from "react";
import { View, Image } from "react-native";
import { useRouter } from "expo-router";

import BaseButtonUI from "@/components/ui/BaseButtonUI";
import TextComponent from "@/components/ui/TextComponent";

import ImageOne from "../../assets/images/icons/Frame 26.png";
import ImageTwo from "../../assets/images/icons/Frame 26_1.png";
import ImageThree from "../../assets/images/icons/Frame 26_2.png";
import BottomTab from "@/components/BottomTab";

const MyInstituteMenu: FC = () => {
  const router = useRouter();

  return (
    <View style={{
        flex: 1,
        justifyContent: "flex-start",
        rowGap: 30,
        alignItems: "flex-start",
        paddingTop: "40%"
      }}>
      <BaseButtonUI onPress={() => router.push("/my-institute/timetable")}>
        <View style={{ flexDirection: "row", justifyContent: "flex-start", alignItems: "center" }}>
          <Image source={ImageOne} resizeMode='contain' style={{ height: 78, width: 100 }} />
          <TextComponent
            text="Мое расписание"
            variant="NS_SB"
            variantSize="B"
            color="#2D2D2D"
          />
        </View>
      </BaseButtonUI>
      <BaseButtonUI onPress={() => router.push("/my-institute/useful-contacts")}>
        <View style={{ flexDirection: "row", justifyContent: "flex-start", alignItems: "center" }}>
          <Image source={ImageTwo} resizeMode='contain' style={{ height: 78, width: 100 }} />
          <TextComponent
            text="Полезные контакты"
            variant="NS_SB"
            variantSize="B"
            color="#2D2D2D"
          />
        </View>
      </BaseButtonUI>
      <BaseButtonUI onPress={() => router.push("/my-institute/building-addresses")}>
        <View style={{ flexDirection: "row", justifyContent: "flex-start", alignItems: "center" }}>
          <Image source={ImageThree} resizeMode='contain' style={{ height: 78, width: 100 }} />
          <TextComponent
            text="Адреса корпусов"
            variant="NS_SB"
            variantSize="B"
            color="#2D2D2D"
          />
        </View>
      </BaseButtonUI>
      <BottomTab absolute />
    </View>
  )
}

export default MyInstituteMenu;
