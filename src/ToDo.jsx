import React from "react";

const ToDo = (props) => {

    const {
        index,
        item
    } = props;

    return (
        <div>
            <p key={item.id}>{item.text}</p>
        </div>
    );
};

export default ToDo;
