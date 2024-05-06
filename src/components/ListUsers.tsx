/* eslint-disable @next/next/no-img-element */
'use client';

import { trpc } from '@/utils/trpc';
import Image from 'next/image';

export const ListUsers = () => {
  const { data: users, isLoading, isFetching } = trpc.getUsers.useQuery();
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: 20,
      }}
    >
      {users?.map((user) => {
        return (
          <div
            style={{ border: '1px solid #ccc', textAlign: 'center' }}
            key={user.id}
          >
            <img
              src={`https://robohash.org/${user.id}?set=set2&size=180x180`}
              alt={user.name}
              style={{ height: 180, width: 180 }}
              width="180"
              height="180"
            />
            <h3>{user.name}</h3>
          </div>
        );
      })}
    </div>
  );
};
