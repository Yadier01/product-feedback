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
  addItem: (item: Item) => void;
}

const getFromLocalStorage = (key: string, defaultValue: any[]) => {
  if (typeof window !== "undefined") {
    return JSON.parse(
      localStorage.getItem(key) || JSON.stringify(defaultValue)
    );
  }
  return defaultValue;
};

const saveToLocalStorage = (key: string, value: any[]) => {
  if (typeof window !== "undefined") {
    localStorage.setItem(key, JSON.stringify(value));
  }
};

const updateAndSaveItems = (set: any, newItems: Item[]) => {
  saveToLocalStorage("filteredItems", newItems);
  return { filteredItems: newItems };
};

const store = createStore<Store>((set) => ({
  filteredItems: getFromLocalStorage("filteredItems", []),
  setFilteredItems: (items: Item[]) => set(updateAndSaveItems(set, items)),
  addItem: (item: Item) =>
    set((state: Store) =>
      updateAndSaveItems(set, [...state.filteredItems, item])
    ),
  isOpen: false,
  setIsOpen: (isOpen: boolean) => set({ isOpen }),
  deleteItem: (id: number) =>
    set((state: Store) =>
      updateAndSaveItems(
        set,
        state.filteredItems.filter((item) => item.id !== id)
      )
    ),
}));
export const useMyStore = () => useStore(store);
