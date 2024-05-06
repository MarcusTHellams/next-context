'use client';

import { StateProvider } from '@/countContext';
import { TrpcProvider } from '@/utils/trpc-provider';
import { PropsWithChildren } from 'react';

export const Provider = ({ children }: PropsWithChildren) => {
  return (
    <>
      <TrpcProvider>
        <StateProvider>{children}</StateProvider>
      </TrpcProvider>
    </>
  );
};

Provider.displayName = 'MarcusProvider';
