import React, { memo } from 'react';
import { DimensionValue, Image, ImageSourcePropType, StyleSheet, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';

import BottomTab from '@/components/BottomTab';
import Header from '@/components/Header';
import TextComponent from '@/components/ui/TextComponent';

import ImageOne from "../../assets/images/iconsAddresses/Group 157.png";
import ImageTwo from "../../assets/images/iconsAddresses/Group 159.png";
import ImageThree from "../../assets/images/iconsAddresses/Group 160.png";
import ImageFour from "../../assets/images/iconsAddresses/Group 161.png";
import ImageFive from "../../assets/images/iconsAddresses/Group 162.png";
import ImageSix from "../../assets/images/iconsAddresses/Group 163.png";
import ImageSeven from "../../assets/images/iconsAddresses/Group 164.png";
import ImageTen from "../../assets/images/iconsAddresses/Group 167.png";
import ImageEleven from "../../assets/images/iconsAddresses/Group 168.png";
import ImageTwelve from "../../assets/images/iconsAddresses/Group 169.png";

type AddressItemProps = {
  image: ImageSourcePropType;
  text: string;
  width?: DimensionValue;
}

type AddressData = {
  id: number;
  image: ImageSourcePropType;
  text: string;
  width?: DimensionValue;
}

const COLORS = {
  background: "#F3F7F8",
  text: "#2D2D2D",
  header: "#047F8E"
};

const SPACING = {
  row: 10,
  section: 30,
  padding: 16
};

const AddressItem: React.FC<AddressItemProps> = ({ image, text, width = "auto" }) => (
  <View style={[styles.addressRow, { width }]}>
    <Image 
      source={image} 
      resizeMode='contain' 
      style={styles.addressIcon} 
      accessibilityLabel={`Icon for ${text}`}
    />
    <TextComponent
      text={text}
      variant="NS_R"
      variantSize="B"
      color={COLORS.text}
    />
  </View>
);

const ADDRESSES: AddressData[] = [
  { id: 1, image: ImageOne, text: "Ул. Артёма, 58" },
  { id: 2, image: ImageTwo, text: "Студгородк ул. Артёма, 58" },
  { id: 3, image: ImageThree, text: "Ул. Кобозева, 17" },
  { id: 4, image: ImageFour, text: "Ул. Кобозева, 15" },
  { id: 5, image: ImageFive, text: "Пр-т Дзержинского, 1" },
  { id: 6, image: ImageSix, text: "Студгородок \nпр-т Богдана Хмельницкого, 106", width: "70%" },
  { id: 7, image: ImageSeven, text: "Пр-т 25-летия РККА, 1" },
  { id: 8, image: ImageTwelve, text: "ул. Артёма, 50" },
  { id: 9, image: ImageTen, text: "Студгородок ул. Артёма, 131" },
  { id: 10, image: ImageEleven, text: "Ул. Розы Люксембург, 34А" }
];

const BuildingAddresses: React.FC = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <Header cHeight={100} />
      <ScrollView style={styles.container}>
        <View style={styles.wrapper}>
          <TextComponent
            text="Адреса корпусов:"
            variant="SO"
            variantSize="L"
            color={COLORS.header}
          />
          <View style={styles.addressesContainer}>
            {ADDRESSES.map(({ id, image, text, width }) => (
              <AddressItem
                key={id}
                image={image}
                text={text}
                width={width}
              />
            ))}
          </View>
        </View>
        <View style={styles.bottomSpacing} />
      </ScrollView>
      <BottomTab absolute />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: COLORS.background
  },
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  wrapper: {
    flex: 1,
    paddingHorizontal: SPACING.padding,
    rowGap: SPACING.section,
  },
  addressesContainer: {
    rowGap: SPACING.row
  },
  addressRow: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  addressIcon: {
    height: 56,
    width: 56
  },
  bottomSpacing: {
    height: 300
  }
});

export default memo(BuildingAddresses);