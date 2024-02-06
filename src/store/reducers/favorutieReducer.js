const INITIAL_VALUE = {
  fav: [],
};
// he can see action so he can compare between the initial value and payload (new Value)
// make reduce to see my action type
const AddToFav = (state = INITIAL_VALUE, action) => {
  // better use switch
  // if type ADD TO FAV the function will be implemented according to switch
  switch (action.type) {
    case "ADD_TO_FAV":
      return {
        ...state,
        // basically i will create empty array
        // spreading the old with new to merge both arrays
        // 5od balk spread takes copy of the array and modify it
        // 3ks l push modify l exisitng array
        fav: [...state.fav, action.payload],
      };
    default:
      // in this case state will return empty array since nothing hasnt been pushed yet
      return state;
  }
};

export default AddToFav;
