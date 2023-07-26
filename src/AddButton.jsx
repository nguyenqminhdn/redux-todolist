import React from "react";

const AddButton = (props) => {
    const {handleButtonClick} = props;
    return (
        <button onClick={handleButtonClick}>Add</button>
    )
}

export default AddButton;