import React, { memo } from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';

import Header from '@/components/Header';
import TextComponent from '@/components/ui/TextComponent';
import BottomTab from '@/components/BottomTab';

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

const BuildingAddresses = () => {

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#F3F7F8" }}>
      <Header cHeight={100} />
      <ScrollView style={styles.container}>
        <View style={styles.wrapper}>
          <TextComponent
            text="Адреса корпусов:"
            variant="SO"
            variantSize="L"
            color="#047F8E"
          />
          <View style={{ rowGap: 10 }}>
            <View style={{ flexDirection: "row", justifyContent: "flex-start", alignItems: "center" }}>
              <Image source={ImageOne} resizeMode='contain' style={{ height: 56 }} />
              <TextComponent
                text="Ул. Артёма, 58"
                variant="NS_R"
                variantSize="B"
                color="#2D2D2D"
              />
            </View>
            <View style={{ flexDirection: "row", justifyContent: "flex-start", alignItems: "center" }}>
              <Image source={ImageTwo} resizeMode='contain' style={{ height: 56 }} />
              <TextComponent
                text="Студгородк ул. Артёма, 58"
                variant="NS_R"
                variantSize="B"
                color="#2D2D2D"
              />
            </View>
            <View style={{ flexDirection: "row", justifyContent: "flex-start", alignItems: "center" }}>
              <Image source={ImageThree} resizeMode='contain' style={{ height: 56 }} />
              <TextComponent
                text="Ул. Кобозева, 17"
                variant="NS_R"
                variantSize="B"
                color="#2D2D2D"
              />
            </View>
            <View style={{ flexDirection: "row", justifyContent: "flex-start", alignItems: "center" }}>
              <Image source={ImageFour} resizeMode='contain' style={{ height: 56 }} />
              <TextComponent
                text="Ул. Кобозева, 15"
                variant="NS_R"
                variantSize="B"
                color="#2D2D2D"
              />
            </View>
            <View style={{ flexDirection: "row", justifyContent: "flex-start", alignItems: "center" }}>
              <Image source={ImageFive} resizeMode='contain' style={{ height: 56 }} />
              <TextComponent
                text="Пр-т Дзержинского, 1"
                variant="NS_R"
                variantSize="B"
                color="#2D2D2D"
              />
            </View>
            <View style={{ flexDirection: "row", justifyContent: "flex-start", alignItems: "center", width: "70%" }}>
              <Image source={ImageSix} resizeMode='contain' style={{ height: 56 }} />
              <TextComponent
                text={`Студгородок \nпр-т Богдана Хмельницкого, 106`}
                variant="NS_R"
                variantSize="B"
                color="#2D2D2D"
              />
            </View>
            <View style={{ flexDirection: "row", justifyContent: "flex-start", alignItems: "center" }}>
              <Image source={ImageSeven} resizeMode='contain' style={{ height: 56 }} />
              <TextComponent
                text="Пр-т 25-летия РККА, 1"
                variant="NS_R"
                variantSize="B"
                color="#2D2D2D"
              />
            </View>
            <View style={{ flexDirection: "row", justifyContent: "flex-start", alignItems: "center" }}>
              <Image source={ImageTwelve} resizeMode='contain' style={{ height: 56 }} />
              <TextComponent
                text="ул. Артёма, 50"
                variant="NS_R"
                variantSize="B"
                color="#2D2D2D"
              />
            </View>
            <View style={{ flexDirection: "row", justifyContent: "flex-start", alignItems: "center" }}>
              <Image source={ImageTen} resizeMode='contain' style={{ height: 56 }} />
              <TextComponent
                text="Студгородок ул. Артёма, 131"
                variant="NS_R"
                variantSize="B"
                color="#2D2D2D"
              />
            </View>
            <View style={{ flexDirection: "row", justifyContent: "flex-start", alignItems: "center" }}>
              <Image source={ImageEleven} resizeMode='contain' style={{ height: 56 }} />
              <TextComponent
                text="Ул. Розы Люксембург, 34А"
                variant="NS_R"
                variantSize="B"
                color="#2D2D2D"
              />
            </View>
          </View>
        </View>
        <View style={{ height: 100 }} />
      </ScrollView>
      <BottomTab absolute />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F3F7F8",
  },
  wrapper: {
    flex: 1,
    paddingHorizontal: 16,
    rowGap: 30,
  }
});

export default memo(BuildingAddresses);