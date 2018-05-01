import actionType from "../../types/actionType";
import utils from "../../helpers/utils";

const stateObj = {
    isMobile: utils.detectIfMobile()
};

const ViewportReducer = (state = stateObj, action) => {

    switch (action.type) {

    case actionType.VIEWPORT_HAS_UPDATED:

        return {
            ...state,
            isMobile: action.isMobile
        };

    default:
        return state;
    }
};

export default ViewportReducer;

