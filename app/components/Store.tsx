import { createStore } from "zustand/vanilla";
import { useStore } from "zustand";

interface User {
  image: string;
  name: string;
  username: string;
}

interface Reply {
  id?: number;
  content: string;
  replyingTo: string;
  user: User;
}

interface Comment {
  id: number;
  content: string;
  user: User;
  replies?: Reply[];
}

export interface Item {
  id: number;
  title: string;
  category: string;
  upvotes: number;
  upvoted: boolean;
  status: string;
  description: string;
  comments?: Comment[];
}
interface Store {
  filteredItems: Item[];
  setFilteredItems: (items: Item[]) => void;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  deleteItem: (id: number) => void;
}

const store = createStore<Store>((set, get) => ({
  filteredItems: (() => {
    if (typeof window !== "undefined") {
      return JSON.parse(localStorage.getItem("filteredItems") || "[]");
    } else {
      return [];
    }
  })(),
  setFilteredItems: (items: Item[]) => set({ filteredItems: items }),
  isOpen: false,
  setIsOpen: (isOpen: boolean) => set({ isOpen }),
  deleteItem: (id: number) => {
    set((state) => {
      const newFilteredItems = state.filteredItems.filter(
        (item) => item.id !== id
      );
      if (typeof window !== "undefined") {
        localStorage.setItem("filteredItems", JSON.stringify(newFilteredItems));
      }
      return { filteredItems: newFilteredItems };
    });
  },
}));

export const useMyStore = () => useStore(store);
