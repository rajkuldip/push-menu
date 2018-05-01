import actionType from "../../types/actionType";

const navReducer = (
    state = { selected: false},
    { type, selected }) => {

    switch (type) {

    case actionType.NAV_CLICK_ACTION:
        return {
            ...state,
            selected
        };

    default:
        return state;
    }
};

export default navReducer;
