import { ActionMap } from "@/src/types/types";
import { createContext, Dispatch, useContext, useReducer } from "react";

interface ShoppingCartContextValue {
  itemIds: string[];
}

export enum ShoppingCartTypes {
  ADD = "ADD",
}

type ShoppingCartPayload = {
  [ShoppingCartTypes.ADD]: {
    itemId: string;
  };
};

export type GeneralActions =
  ActionMap<ShoppingCartPayload>[keyof ActionMap<ShoppingCartPayload>];

interface ShoppingCartStore {
  itemIds: string[];
}

const initialState: ShoppingCartStore = { itemIds: [] };

export const ShoppingCartContext =
  createContext<ShoppingCartContextValue>(initialState);
export const ShoppingCartDispatchContext = createContext<
  Dispatch<GeneralActions>
>(() => null);

export function ShoppingCartProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [store, dispatch] = useReducer(ShoppingCartReducer, initialState);

  return (
    <ShoppingCartContext.Provider value={store}>
      <ShoppingCartDispatchContext.Provider value={dispatch}>
        {children}
      </ShoppingCartDispatchContext.Provider>
    </ShoppingCartContext.Provider>
  );
}

function ShoppingCartReducer(store: ShoppingCartStore, action: GeneralActions) {
  switch (action.type) {
    case ShoppingCartTypes.ADD: {
      return { ...store, itemIds: [...store.itemIds, action.payload.itemId] };
    }
  }
}

export function useShoppingCart() {
  return useContext(ShoppingCartContext);
}

export function useShoppingCartDispatch() {
  return useContext(ShoppingCartDispatchContext);
}
