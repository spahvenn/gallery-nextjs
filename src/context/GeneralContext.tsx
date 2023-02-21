import { ActionMap } from "@/src/types/types";
import { createContext, Dispatch, useContext, useReducer } from "react";

interface GeneralContextValue {
  uiMode: "light" | "dark";
}

export enum GeneralTypes {
  setUIMode = "SET_UI_MODE",
}

type GeneralPayload = {
  [GeneralTypes.setUIMode]: {
    mode: "light" | "dark";
  };
};

export type GeneralActions =
  ActionMap<GeneralPayload>[keyof ActionMap<GeneralPayload>];

const initialState: GeneralContextValue = { uiMode: "light" };

export const GeneralContext = createContext<GeneralContextValue>(initialState);
export const GeneralDispatchContext = createContext<Dispatch<GeneralActions>>(
  () => null
);

export function GeneralProvider({ children }: { children: React.ReactNode }) {
  const [store, dispatch] = useReducer(GeneralReducer, initialState);

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
    case GeneralTypes.setUIMode: {
      return { ...store, uiMode: action.payload.mode };
    }
  }
}

export function useGeneral() {
  return useContext(GeneralContext);
}

export function useGeneralDispatch() {
  return useContext(GeneralDispatchContext);
}
