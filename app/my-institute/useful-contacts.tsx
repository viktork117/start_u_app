import React, { useCallback } from 'react';
import { Image, Linking, StyleSheet, TouchableOpacity, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useRouter } from 'expo-router';

import Header from '@/components/Header';
import BaseButtonUI from '@/components/ui/BaseButtonUI';
import TextComponent from '@/components/ui/TextComponent';
import BottomTab from '@/components/BottomTab';

import ImageOne from "../../assets/images/icons/Group 155.png";
import ImageTwo from "../../assets/images/icons/Group 156.png";

const UsefulContacts = () => {
  const router = useRouter(); 
  const handleEmailPress = (email: string) => {
    Linking.openURL(`mailto:${email}`);
  };

  const handleLinkPress = (url: string) => {
    Linking.openURL(url);
  };

  const handlePhonePress = (phoneNumber: number) => {
    Linking.openURL(`tel:${phoneNumber}`);
  };

  const cleanPhoneNumber = (number: any) => {
    return number.replace(/[^\d+]/g, '');
  };

  const onClick = useCallback(() => router.push("/my-institute/building-addresses"), [router])

  return (
    <>
      <ScrollView style={styles.container}>
        <Header />
        <View style={styles.wrapper}>
          <TextComponent
            text="ФГБОУ ВО ДонНТУ"
            variant="SO"
            variantSize="L"
            color="#047F8E"
          />
          <View style={{ rowGap: 10 }}>
            <TextComponent
              text="Адрес главного 1-го корпуса"
              variant="NS_SB"
              variantSize="L"
              color="#2D2D2D"
              weight={700}
            />
            <TextComponent
              text="Донецкая Народная Республика 283001, г. Донецк, ул. Артема, 58"
              variant="NS_R"
              variantSize="B"
              color="#2D2D2D"
            />
          </View>
          <BaseButtonUI onPress={onClick} style={{height: 56, borderWidth: 4, borderColor: "#047F8E" }}>
            <TextComponent
              text="Адреса всех корпусов"
              variant="NS_SB"
              variantSize="L"
              color="#047F8E"
              weight={700}
            />
          </BaseButtonUI>
          <View style={{ rowGap: 10 }}>
            <TextComponent
              text="Телефоны для справки"
              variant="NS_SB"
              variantSize="L"
              color="#2D2D2D"
              weight={700}
            />
            <View>
              <TouchableOpacity 
                onPress={() => handlePhonePress(cleanPhoneNumber('+7 (856) 301-07-09'))}
              >
                <TextComponent
                  text="+7 (856) 301-07-09 справка"
                  variant="NS_R"
                  variantSize="B"
                  color="#2D2D2D"
                />
              </TouchableOpacity>
              <TouchableOpacity 
                onPress={() => handlePhonePress(cleanPhoneNumber('+7 (856) 301-07-69'))}
              >
                <TextComponent
                  text="+7 (856) 301-07-69 канцелярия"
                  variant="NS_R"
                  variantSize="B"
                  color="#2D2D2D"
                />
              </TouchableOpacity>
              <TouchableOpacity 
                onPress={() => handlePhonePress(cleanPhoneNumber('+7 (856) 301-08-89'))}
              >
                <TextComponent
                  text="+7 (856) 301-08-89 приемная комиссия"
                  variant="NS_R"
                  variantSize="B"
                  color="#2D2D2D"
                />
              </TouchableOpacity>
            </View>
          </View>
          <BaseButtonUI
              onPress={() => handleLinkPress('https://donntu.info/')}
              style={{ justifyContent: "flex-start", alignItems: "flex-start" }}>
              <View style={{ flexDirection: "row", alignItems: "center"}}>
                <Image source={ImageOne} resizeMode='contain' style={{ height: 36, width: 76  }} />
                <TextComponent
                  text="donntu.info@mail.ru"
                  variant="NS_SB"
                  variantSize="B"
                  color="#2D2D2D"
                />
              </View>
            </BaseButtonUI>
          <View style={{ rowGap: 10 }}>
            <TextComponent
              text="Ящик доверия"
              variant="NS_SB"
              variantSize="L"
              color="#2D2D2D"
              weight={700}
            />
            <BaseButtonUI
              onPress={() => handleEmailPress('doverie@donntu.ru')}
              style={{ justifyContent: "flex-start", alignItems: "flex-start" }}>
              <View style={{ flexDirection: "row", alignItems: "center"}}>
                <Image source={ImageTwo} resizeMode='contain' style={{ height: 36, width: 76  }} />
                <TextComponent
                  text="doverie@donntu.ru"
                  variant="NS_SB"
                  variantSize="B"
                  color="#2D2D2D"
                />
              </View>
            </BaseButtonUI>
          </View>
        </View>
      </ScrollView>
      <BottomTab absolute />
    </>
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
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 15,
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    marginBottom: 5,
  },
  link: {
    color: 'blue',
    textDecorationLine: 'underline',
    marginTop: 5,
  },
  divider: {
    height: 1,
    backgroundColor: '#ccc',
    marginVertical: 15,
  },
});

export default UsefulContacts;