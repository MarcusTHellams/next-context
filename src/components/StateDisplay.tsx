'use client';
import { useState } from '@/countContext';
export const StateDisplay = () => {
  const state = useState();
  return (
    <>
      <div>{JSON.stringify(state, null, 2)}</div>
    </>
  );
};
