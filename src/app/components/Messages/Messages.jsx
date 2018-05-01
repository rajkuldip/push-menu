import React from "react";
import PropTypes from "prop-types";
import MessagesList from "./MessageData.json";
import Icon from "../Common/Icon/Icon";


const Messages = props => {
    const RenderList = MessagesList.map(({id, image, name, status, receivedTime}) => {
        return (
            <li key={ id } className="messages__list">
                <a href="#" onClick={ props.onClick }>
                    <div className="image-container">
                        <img src={ require(`../../assets/img/${image}`) } alt="title" />
                    </div>
                    <div className="list-data">
                        <p className="list-data__name">{name}</p>
                        <p className="list-data__status">{status}</p>
                        <p className="list-data__received-time">
                            <Icon icon="timer" />
                            {receivedTime}
                        </p>
                    </div>
                </a>
            </li>
        );
    });

    return (
        <ul className="messages">
            { RenderList }
        </ul>
    );
};

Messages.propTypes = {
    onClick: PropTypes.func.isRequired
};

export default Messages;
