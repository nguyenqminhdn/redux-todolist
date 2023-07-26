import ToDo from "./ToDo";
import React from "react";
import { useSelector } from "react-redux";

const ToDoList = () => {
    const listItems = useSelector((state) => state.todos)

    if (!listItems) {
        return <p>Nothing to show!</p>
    }

    return (
        <React.Fragment>
            {listItems.map((item) => (
            <ToDo
                key={item.id}  
                item={item}              
            />
            ))}
        </React.Fragment>        
    )
}

export default ToDoList;