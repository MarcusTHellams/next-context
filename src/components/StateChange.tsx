'use client';

import { useDispatch } from '@/countContext';

export const StateChange = () => {
  const dispatch = useDispatch();
  return (
    <p style={{ display: 'flex', gap: '1rem' }}>
      <button onClick={() => dispatch({ type: 'decrement', payload: 2 })}>
        Decrement
      </button>
      <button onClick={() => dispatch({ type: 'increment', payload: 2 })}>
        Increment
      </button>
      <button onClick={() => dispatch({ type: 'changeAddress' })}>
        Change City
      </button>
    </p>
  );
};
