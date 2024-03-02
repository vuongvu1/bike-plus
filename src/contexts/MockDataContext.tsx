import React from "react";

interface User {
  id: string;
  name: string;
  avatar: string;
}

interface Friend extends User {}

interface Feed {
  id: string;
  content: string;
  media?: string;
  user: User;
}

export interface MockDataType {
  user: User;
  friends: Friend[];
  feeds: Feed[];
}

export const MockDataContext = React.createContext<MockDataType>({
  user: {
    id: "",
    name: "",
    avatar: "",
  },
  friends: [],
  feeds: [],
});
