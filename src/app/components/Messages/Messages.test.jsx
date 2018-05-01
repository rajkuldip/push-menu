import React from "react";
import { shallow } from "enzyme";
import { expect } from "chai";
import sinon from "sinon";

import { MessagesContainer } from "./MessagesContainer";

let wrapper;
const sandbox = sinon.sandbox.create();

const setup = customProps => {

    const props = {
        navClickAction: () => {}
    };

    Object.assign(props, customProps);

    wrapper = shallow(
        <MessagesContainer { ...props } />
    );

    return wrapper;
};

describe("<MessagesContainer />", () => {

    beforeEach(() => {
        wrapper = setup();
    });

    afterEach(() => {
        sandbox.restore();
    });

    it("should render", () => {
        expect( wrapper.exists() ).to.equal(true);
    });

    context("When hamburger menu is clicked", () => {

        it("should show menu item", () => {

            const wrapper = setup({
                navClickAction: sandbox.spy()
            });

            const action = wrapper.instance().props.navClickAction;

            wrapper.instance().handleMenuClick();

            sinon.assert.calledOnce(action);
        });
    });
});
