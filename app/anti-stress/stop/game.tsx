import { Redirect } from "expo-router";
import { memo } from "react";
// import { useRouter } from "expo-router";

const Game = () => {
  // const routs = useRouter();

  return <Redirect href="/+not-found" />

  // return (
  //   <>
    
  //   </>
  // )
}

export default memo(Game);
