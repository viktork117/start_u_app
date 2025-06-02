import { useRouter } from "expo-router";
import { memo, useCallback } from "react";

import Container from "@/components/AntiStress/Container";

const GroundingStart = () => {
  const routs = useRouter();

  const goBack = useCallback(() => {
    routs.back();
  }, [routs])

  const go = useCallback(() => {
    routs.push("/anti-stress/grounding/game");
  }, [routs])

  return (
    <Container
      textOne={"  Почувствовал тревогу? "}
      textTwo={"  Техника “Заземление” за 1 минуту вернёт тебя в “здесь и сейчас”. Просто называй: "}
      textThree={`5 предметов - назови что видишь. 4 ощущения - что чувствует тело. 3 звука - прислушайся вокруг. 2 запаха - вдохни или вспомни. 1 вкус - который ощущаешь сейчас.`}
      textFour={" Готов?"}
      onPressBack={goBack}
      onPressGo={go}
    >
    </Container>
  )
}

export default memo(GroundingStart);
