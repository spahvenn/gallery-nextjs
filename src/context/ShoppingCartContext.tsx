import { ActionMap } from "@/src/types/types";
import {
  createContext,
  Dispatch,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";

interface ShoppingCartContextValue {
  itemIds: number[];
}

export enum ShoppingCartTypes {
  ADD = "ADD",
  REMOVE = "REMOVE",
  INITIALIZE = "INITIALIZE",
}

type ShoppingCartPayload = {
  [ShoppingCartTypes.ADD]: {
    itemId: number;
  };
  [ShoppingCartTypes.REMOVE]: {
    itemId: number;
  };
  [ShoppingCartTypes.INITIALIZE]: {
    value: ShoppingCartContextValue;
  };
};

export type ShoppingCartActions =
  ActionMap<ShoppingCartPayload>[keyof ActionMap<ShoppingCartPayload>];

interface ShoppingCartStore {
  itemIds: number[];
}

const initialState: ShoppingCartStore = { itemIds: [] };

export const ShoppingCartContext =
  createContext<ShoppingCartContextValue>(initialState);
export const ShoppingCartDispatchContext = createContext<
  Dispatch<ShoppingCartActions>
>(() => null);

export function ShoppingCartProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [store, dispatch] = useReducer(ShoppingCartReducer, initialState);
  const [firstRender, setFirstRender] = useState(true);

  useEffect(() => {
    if (firstRender) {
      const initialValue = localStorage.getItem("shoppingCart")
        ? JSON.parse(localStorage.getItem("shoppingCart") as string)
        : { itemIds: [] };
      dispatch({
        type: ShoppingCartTypes.INITIALIZE,
        payload: { value: initialValue },
      });
      setFirstRender(false);
    } else {
      localStorage.setItem("shoppingCart", JSON.stringify(store));
    }
  }, [store.itemIds]);

  return (
    <ShoppingCartContext.Provider value={store}>
      <ShoppingCartDispatchContext.Provider value={dispatch}>
        {children}
      </ShoppingCartDispatchContext.Provider>
    </ShoppingCartContext.Provider>
  );
}

function ShoppingCartReducer(
  store: ShoppingCartStore,
  action: ShoppingCartActions
) {
  switch (action.type) {
    case ShoppingCartTypes.ADD: {
      return { ...store, itemIds: [...store.itemIds, action.payload.itemId] };
    }
    case ShoppingCartTypes.REMOVE: {
      return {
        ...store,
        itemIds: [...store.itemIds].filter(
          (itemId) => itemId !== action.payload.itemId
        ),
      };
    }
    case ShoppingCartTypes.INITIALIZE: {
      return action.payload.value;
    }
  }
}


export function useShoppingCart() {
  return useContext(ShoppingCartContext);
}

export function useShoppingCartDispatch() {
  return useContext(ShoppingCartDispatchContext);
}
