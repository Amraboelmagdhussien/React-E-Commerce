const INITIAL_VALUE = {
  onLoad: true,
};

export default function loaderReducer(state = INITIAL_VALUE, action) {
  switch (action.type) {
    case "LOADER_APP":
      return {
        ...state,
        onLoad: action.payload,
      };
    default:
      return state;
  }
}
