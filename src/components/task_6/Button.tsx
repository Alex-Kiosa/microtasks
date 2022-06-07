import React from "react";

type ButtonPropsType = {
    name: string
    callback: () => void
}

export const Button = (props: ButtonPropsType) => {
    const onclickButtonHandler = () => {
        props. callback()
    }

    return (
        <button onClick={onclickButtonHandler}>{props.name}</button>
    )
}