import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Icon from "../Common/Icon/Icon";
import actions from "../../redux/actions";

export class MessageHeader extends Component {
    constructor(props) {

        super(props);
        this.state = {
            selected: false
        };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.props.navClickAction(!this.state.selected);
        this.setState({
            selected: !this.state.selected
        });
    }

    render() {
        return(
            <div className="message-header" >
                <button className="message-header__icon"
                    onClick={ this.handleClick } >
                    <Icon icon="hamburger-menu" />
                </button>
                <p className="message-header__title col-11">Inbox</p>
            </div>
        );
    }
}

MessageHeader.propTypes = {
    navClickAction: PropTypes.func.isRequired
};

// ============ REDUX ============

const mapDispatchToProps = dispatch => ({

    navClickAction: (selected) => {
        dispatch(actions.navClickAction(selected));
    }
});

export default connect(
    null,
    mapDispatchToProps
)(MessageHeader);
