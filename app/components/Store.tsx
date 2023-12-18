import create from "zustand/vanilla";
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
}

const store = create<Store>((set) => ({
  filteredItems: [],
  setFilteredItems: (items) => set({ filteredItems: items }),
}));

export const useMyStore = () => useStore(store);
