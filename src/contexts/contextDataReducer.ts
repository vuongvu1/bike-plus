import { MockDataType } from "./MockDataContext";

type ActionType = "INITIAL" | "ADD_FEED" | "DELETE_FEED" | "FILTER_PRODUCT";

export function contextDataReducer(
  state: MockDataType,
  action: { type: ActionType; newData: any } // eslint-disable-line @typescript-eslint/no-explicit-any
) {
  const { type, newData } = action;

  switch (type) {
    case "INITIAL": {
      return {
        ...state,
        ...newData,
        filteredProducts: newData.products,
      };
    }
    case "ADD_FEED": {
      const newFeed = newData;

      return {
        ...state,
        feeds: [newFeed, ...state.feeds],
      };
    }
    case "DELETE_FEED": {
      const deleteFeed = newData;

      return {
        ...state,
        feeds: state.feeds.filter((feed) => feed.id !== deleteFeed.id),
      };
    }
    case "FILTER_PRODUCT": {
      const searchText = newData.toLowerCase();

      return {
        ...state,
        filteredProducts: state.products.filter((product) =>
          product.name.toLowerCase().includes(searchText)
        ),
      };
    }
    default: {
      throw new Error(`Unsupported action type: ${type}`);
    }
  }
}
