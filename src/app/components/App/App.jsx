import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import actions from "../../redux/actions";
import utils from "../../helpers/utils";

import "../../assets/css/main.scss";
import MessagesContainer from "../Messages/MessagesContainer";
import Navigation from "../Navigation/Navigation";


export class App extends React.Component {

    constructor(props) {
        super(props);

        this.updateWindowSize = this.updateWindowSize.bind(this);
    }

    updateWindowSize() {
        const isMobile = utils.detectIfMobile();
        this.props.viewportHasUpdatedAction(isMobile);
    }


    render() {
        return (
            <div className={ `app ${utils.detectDevice()}` }>

                <div className="main-content container-fluid">
                    <div className="row">
                        <Navigation />
                        <MessagesContainer />
                    </div>
                </div>

            </div>
        );
    }
}

App.propTypes = {
    viewportHasUpdatedAction: PropTypes.func.isRequired,
};

// ============ REDUX ============


const mapDispatchToProps = dispatch => ({
    viewportHasUpdatedAction: viewport => {
        dispatch(actions.viewportHasUpdated(viewport));
    }
});

export default connect(
    null,
    mapDispatchToProps
)(App);
