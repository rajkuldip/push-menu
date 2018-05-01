import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import actions from "../../redux/actions";
import Messages from "./Messages";
import MessageHeader from "./MessageHeader";


export class MessagesContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selected: false
        };
        this.handleMenuClick = this.handleMenuClick.bind(this);
        this.handleListClick = this.handleListClick.bind(this);
    }

    handleMenuClick() {
        this.props.navClickAction(!this.state.selected);
        this.setState({
            selected: !this.state.selected
        });
    }

    handleListClick(event) {
        event.preventDefault();
        return true;
    }

    render() {
        return(
            <div className={ `message-container ${this.props.selected? "active" : ""}` }>
                <MessageHeader selected={ this.state.selected } onClick={ this.handleMenuClick } />
                <Messages onClick={ this.handleListClick } />
            </div>
        );
    }
}


MessagesContainer.propTypes = {
    selected: PropTypes.bool.isRequired,
    navClickAction: PropTypes.func.isRequired
};

// ============ REDUX ============

const mapStateToProps = ({ NavReducer }) => ({
    selected: NavReducer.selected
});

const mapDispatchToProps = dispatch => ({

    navClickAction: (selected) => {
        dispatch(actions.navClickAction(selected));
    }
});


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MessagesContainer);
