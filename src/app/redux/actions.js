import actionType from "../types/actionType";

const navClickAction = (selected) => ({
    type: actionType.NAV_CLICK_ACTION,
    selected
});

export default {
    navClickAction
};
