import { MockDataType } from "./MockDataContext";

type ActionType = "INITIAL" | "ADD_FEED" | "DELETE_FEED";

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
      };
    }
    case "ADD_FEED": {
      return {
        ...state,
        feeds: [newData, ...state.feeds],
      };
    }
    case "DELETE_FEED": {
      return {
        ...state,
        feeds: state.feeds.filter((feed) => feed.id !== newData.id),
      };
    }
    default: {
      throw new Error(`Unsupported action type: ${type}`);
    }
  }
}
