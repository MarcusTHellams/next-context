import {
  createContext,
  Dispatch,
  PropsWithChildren,
  useContext,
  useReducer,
} from 'react';

const initialState = {
  count: 0,
  address: {
    street: '2916 Truffle Oak Place',
    city: 'Woodbridge',
    state: 'Virginia',
    zip: 22191,
  },
};

type State = typeof initialState;

type ACTIONTYPE =
  | { type: 'increment'; payload: number }
  | { type: 'decrement'; payload: number }
  | { type: 'changeAddress'; payload?: undefined };

function reducer(state: State, action: ACTIONTYPE) {
  const {
    address: { city },
  } = state;
  const { type, payload } = action;
  switch (type) {
    case 'increment':
      return { ...state, count: state.count + payload };
    case 'decrement':
      return { ...state, count: state.count - payload };
    case 'changeAddress':
      return {
        ...state,
        address: {
          ...state.address,
          city: city === 'Woodbridge' ? 'Clinton' : 'Woodbridge',
        },
      };
    default:
      throw new Error();
  }
}

const StateContext = createContext<State | undefined>(undefined);
const DispatchContext = createContext<Dispatch<ACTIONTYPE> | undefined>(
  undefined
);

export const useState = () => {
  const context = useContext(StateContext);
  if (!context) {
    throw new Error('useState must be used in a child of StateProvider');
  }
  return context;
};

export const useDispatch = () => {
  const context = useContext(DispatchContext);
  if (!context) {
    throw new Error('useDispatch must be used in a child of StateProvider');
  }
  return context;
};

export const StateProvider = ({ children }: PropsWithChildren) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <DispatchContext.Provider value={dispatch}>
      <StateContext.Provider value={state}>{children}</StateContext.Provider>
    </DispatchContext.Provider>
  );
};

StateProvider.displayName = 'MarcusState';
