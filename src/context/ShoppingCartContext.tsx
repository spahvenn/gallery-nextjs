import { ActionMap } from "@/src/types/types";
import { createContext, Dispatch, useContext, useReducer } from "react";

interface ShoppingCartContextValue {
  itemIds: number[];
}

export enum ShoppingCartTypes {
  ADD = "ADD",
  REMOVE = "REMOVE",
}

type ShoppingCartPayload = {
  [ShoppingCartTypes.ADD]: {
    itemId: number;
  };
  [ShoppingCartTypes.REMOVE]: {
    itemId: number;
  };
};

export type GeneralActions =
  ActionMap<ShoppingCartPayload>[keyof ActionMap<ShoppingCartPayload>];

interface ShoppingCartStore {
  itemIds: number[];
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
    case ShoppingCartTypes.REMOVE: {
      return {
        ...store,
        itemIds: { ...store.itemIds }.filter(
          (itemId) => itemId !== action.payload.itemId
        ),
      };
    }
  }
}

export function useShoppingCart() {
  return useContext(ShoppingCartContext);
}

export function useShoppingCartDispatch() {
  return useContext(ShoppingCartDispatchContext);
}
