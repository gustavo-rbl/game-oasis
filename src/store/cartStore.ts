import { create } from "zustand";
import { CartGameType, CartStoreTypes } from "../types/types";

interface CartStore {
  cart: CartStoreTypes;
  addGame: (game: CartGameType) => void;
  deleteGame: (id: number) => void;
}

const useCartStore = create<CartStore>((set) => ({
  cart: [],
  addGame: (game) =>
    set((store) => ({
      cart: [...store.cart, game],
    })),
  deleteGame: (id) =>
    set((store) => ({
      cart: store.cart.filter((games) => games.id !== id),
    })),
  clear: () =>
    set({
      cart: [],
    }),
}));

export default useCartStore;
