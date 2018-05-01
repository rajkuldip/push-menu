import React from "react";
import { shallow } from "enzyme";
import { expect } from "chai";
import sinon from "sinon";
import ReactGA from "react-ga";

import { App } from "./App";
import utils from "../../helpers/utils";

const sandbox = sinon.sandbox.create();
let wrapper;

const setup = customProps => {
    const props = {
        viewportData: {
            isMobile: false
        },
        viewportHasUpdatedAction: () => {}
    };

    Object.assign(props, customProps);

    wrapper = shallow(
        <App { ...props } />
    );

    return wrapper;
};

describe("<App />", () => {

    beforeEach(() => {
        sandbox.stub(ReactGA, "initialize").returns(true);
        wrapper = setup();
    });

    afterEach(() => {
        ReactGA.initialize.restore();
        sandbox.restore();
    });

    it("should render", () => {

        expect( wrapper.exists() ).to.equal(true);
    });

    context("When screen is resized", () => {

        it("should update the store", () => {

            const wrapper = setup({
                viewportHasUpdatedAction: sandbox.spy(),
            });

            sandbox.stub(utils, "detectIfMobile")
                .returns(true);

            const action = wrapper.instance().props.viewportHasUpdatedAction;

            wrapper.instance().updateWindowSize();
            sinon.assert.calledOnce(action);
            sinon.assert.calledWith(action, true);
        });
    });
});










