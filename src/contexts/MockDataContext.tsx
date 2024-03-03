import React from "react";

interface UserType {
  id: string;
  name: string;
  avatar: string;
}

interface Friend extends UserType {}

export interface FeedType {
  id: string;
  content: string;
  media?: string;
  user: UserType;
  likes: number;
  comments: number;
}

export interface ProductType {
  id: string;
  name: string;
  price: string;
  media: string;
}

export interface MockDataType {
  user: UserType;
  friends: Friend[];
  feeds: FeedType[];
  products: ProductType[];
  filteredProducts: ProductType[];
}

export interface MockDataContextProps {
  data: MockDataType;
  addFeed: (feed: FeedType) => void;
  deleteFeed: (feed: FeedType) => void;
  filterProduct: (searchText: string) => void;
}

const initialData: MockDataContextProps = {
  data: {
    user: {
      id: "",
      name: "",
      avatar: "",
    },
    friends: [],
    feeds: [],
    products: [],
    filteredProducts: [],
  },
  addFeed: () => {},
  deleteFeed: () => {},
  filterProduct: () => {},
};

export const MockDataContext =
  React.createContext<MockDataContextProps>(initialData);
