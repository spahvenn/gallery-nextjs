import { ActionMap } from "@/src/types/types";
import {
  createContext,
  Dispatch,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";

interface GeneralContextValue {
  uiMode: "light" | "dark";
  hydrated: boolean;
}

export enum GeneralTypes {
  SET_UI_MODE = "SET_UI_MODE",
  INITIALIZE = "INITIALIZE",
}

type GeneralPayload = {
  [GeneralTypes.SET_UI_MODE]: {
    mode: "light" | "dark";
  };
  [GeneralTypes.INITIALIZE]: {
    value: GeneralContextValue;
  };
};

export type GeneralActions =
  ActionMap<GeneralPayload>[keyof ActionMap<GeneralPayload>];

const initialState: GeneralContextValue = { uiMode: "light", hydrated: false };

export const GeneralContext = createContext<GeneralContextValue>(initialState);
export const GeneralDispatchContext = createContext<Dispatch<GeneralActions>>(
  () => null
);

export function GeneralProvider({ children }: { children: React.ReactNode }) {
  const [store, dispatch] = useReducer(GeneralReducer, initialState);
  const [firstRender, setFirstRender] = useState(true);

  useEffect(() => {
    if (firstRender) {
      const initial = localStorage.getItem("general")
        ? JSON.parse(localStorage.getItem("general") as string)
        : initialState;
      setFirstRender(false);
      dispatch({ type: GeneralTypes.INITIALIZE, payload: { value: initial } });
    } else {
      localStorage.setItem("general", JSON.stringify(store));
    }
  }, [store]);

  return (
    <GeneralContext.Provider value={store}>
      <GeneralDispatchContext.Provider value={dispatch}>
        {children}
      </GeneralDispatchContext.Provider>
    </GeneralContext.Provider>
  );
}

function GeneralReducer(store: GeneralContextValue, action: GeneralActions) {
  switch (action.type) {
    case GeneralTypes.SET_UI_MODE: {
      return { ...store, uiMode: action.payload.mode };
    }
    case GeneralTypes.INITIALIZE: {
      return { ...action.payload.value, hydrated: true };
    }
  }
}

export function useGeneral() {
  return useContext(GeneralContext);
}

export function useGeneralDispatch() {
  return useContext(GeneralDispatchContext);
}
