import React, { memo, useEffect, useState } from 'react';

import CommentOnboarding from '@/components/Onboarding/CommentOnboarding';
import PatternedBackground from '@/components/Onboarding/PatternedBackground';

import { getUserCourse, getUserGroup } from '@/stores/db/init';

const Main = () => {
  const [ state, setState ] = useState<string[]>([]);

  const fnStart = async () => {
    const resultCourse = await getUserCourse();
    const resultGroup = await getUserGroup();

    setState([resultCourse, resultGroup]);
  }

  useEffect(() => {
    fnStart();
  }, [])
  
  return (
    <PatternedBackground>
      <CommentOnboarding
        textOne={state[0] ?? ""}
        textTwo={state[1] ?? ""}
      />
    </PatternedBackground>
  );
}

export default memo(Main);
