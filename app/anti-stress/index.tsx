import React, { memo, useCallback } from 'react';
import { useRouter } from 'expo-router';
import { View } from 'react-native';

import MenuContainer from '@/components/MenuCommon/MenuContainer';
import MenuCard from '@/components/AntiStress/ContainerToMenuCard';

import { ScrollView } from 'react-native-gesture-handler';

import ImageOne from "../../assets/images/icons/Group 120.png"
import ImageTwo from "../../assets/images/icons/Group 144.png"


const AntiStress = () => {
  const routs = useRouter();

  const onClickGrounding = useCallback(() => {
    routs.push("/anti-stress/grounding");
  }, [routs]);

  const onClickStop = useCallback(() => {
    routs.push("/anti-stress/stop");
  }, [routs]);

  return (
    <MenuContainer backgroundColor={"#047F8E"} absolute={true} >
      <ScrollView
        style={{
          flex: 1,
          rowGap: 50,
          paddingTop: 70,
          backgroundColor: "#047F8E",
          paddingHorizontal: 16,
        }}
        showsVerticalScrollIndicator={false}>
        <MenuCard
          image={ImageOne}
          textMain={"Заземление"}
          textSecond={"Используй, в моменты когда почувствуешь тревогу! Техника для быстрого снятия стресса, направлена на работу с когнитивной функцией мозга."}
          textThird={"Время  3-5 минут"}
          onPress={onClickGrounding} 
        />
        <MenuCard
          image={ImageTwo}
          textMain={"Техника STOP"}
          textSecond={"Используй, в моменты когда почувствуешь тревогу! Техника для быстрого снятия стресса, направлена на работу с когнитивной функцией мозга."}
          textThird={"Время  3-5 минут"}
          onPress={onClickStop}
        />
        {/* <BaseButtonUI onPress={() => {}}>
          <TextComponent text={'Дыши'} color={text}/>
        </BaseButtonUI> */}
        <View style={{ height: 200 }} />
      </ScrollView>
    </MenuContainer>
  );
}

export default memo(AntiStress);
