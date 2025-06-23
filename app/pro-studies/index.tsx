import { useRouter } from "expo-router";
import { memo, useCallback, type FC } from "react";
import { StyleSheet, View, type DimensionValue } from "react-native";

import BottomTab from "@/components/BottomTab";
import MenuItemButton from "@/components/MyInstitute/MenuItemButton";

import ImageOne from "../../assets/images/icons/Group 174.png";
import ImageTwo from "../../assets/images/icons/Frame 26.png";
import ImageThree from "../../assets/images/icons/Group 176.png";
import TextComponent from "@/components/ui/TextComponent";

const ROUTES = {
  TIMETABLE: "/pro-studies" as const,
  USEFUL_CONTACTS: "/pro-studies" as const,
  BUILDING_ADDRESSES: "/pro-studies" as const,
};

interface PageConstants {
  COLORS: {
    TEXT: string;
  };
  SIZES: {
    IMAGE: {
      HEIGHT: number;
      WIDTH: number;
    };
    CONTAINER: {
      PADDING_TOP: DimensionValue;
      ROW_GAP: number;
    };
  };
}

const PAGE_CONSTANTS: PageConstants = {
  COLORS: {
    TEXT: "#2D2D2D",
  },
  SIZES: {
    IMAGE: {
      HEIGHT: 78,
      WIDTH: 100,
    },
    CONTAINER: {
      PADDING_TOP: "20%",
      ROW_GAP: 30,
    },
  },
};

const ProStudiesMenu: FC = () => {
  const router = useRouter();

  const texts = {
    timetable: "Нейросети",
    contacts: "Планирование",
    addresses: "Чек-лист адаптации",
  };

  const onNavigateToTimetable = useCallback(() => router.push(ROUTES.TIMETABLE), [router]);
  const onNavigateToUsefulContacts = useCallback(() => router.push(ROUTES.USEFUL_CONTACTS), [router]);
  const onNavigateToBuildingAddresses = useCallback(() => router.push(ROUTES.BUILDING_ADDRESSES), [router]);

  return (
    <View style={styles.container}>
      <View style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "100%" }}>
        <TextComponent text="PRO учебу" color={"#000000"} align="center" variantSize="L" />
      </View>
      <MenuItemButton
        imageSource={ImageOne}
        text={texts.timetable}
        onPress={onNavigateToTimetable}
      />
      <MenuItemButton
        imageSource={ImageTwo}
        text={texts.contacts}
        onPress={onNavigateToUsefulContacts}
      />
      <MenuItemButton
        imageSource={ImageThree}
        text={texts.addresses}
        onPress={onNavigateToBuildingAddresses}
      />
      <BottomTab absolute />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    rowGap: PAGE_CONSTANTS.SIZES.CONTAINER.ROW_GAP,
    paddingTop: PAGE_CONSTANTS.SIZES.CONTAINER.PADDING_TOP,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  image: {
    height: PAGE_CONSTANTS.SIZES.IMAGE.HEIGHT,
    width: PAGE_CONSTANTS.SIZES.IMAGE.WIDTH,
  },
});

export default memo(ProStudiesMenu);
