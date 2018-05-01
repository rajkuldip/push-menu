import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import Icon from "../Common/Icon/Icon";

export const Navigation = props =>
    <div className="navigation">

        <div className={ `top ${props.selected? "early-animate" : ""}` }>
            <img
                src={ require("../../assets/img/first.png") }
                aria-label="AT Logo"
                alt="AT Logo" />
        </div>
        <div className={ ` middle ${props.selected? "animate" : ""}` }>
            <ul>
                <li>
                    <Icon icon="profile" />
                </li>
                <li>
                    <Icon icon="star" />
                </li>
                <li>
                    <Icon icon="comment" />
                </li>
            </ul>
        </div>
        <div className={ `bottom ${props.selected? "late-animate" : ""}` }>
            <Icon icon="settings" />
        </div>

    </div>;

Navigation.propTypes = {
    selected: PropTypes.bool.isRequired
};

// ============ REDUX ============

const mapStateToProps = ({ NavReducer }) => ({
    selected: NavReducer.selected
});


export default connect(
    mapStateToProps
)(Navigation);
