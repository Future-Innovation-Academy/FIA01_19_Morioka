import React from "react";

export const InputTodo = (props) => {
    // const { todoText, onChange, onClick, disabled } = props;
    const { todoText, onChange, handleAddSubmit, disabled } = props;

    return (
        <div className="input-area">
            <form onSubmit={handleAddSubmit}>
                <input
                    type="text"
                    disabled={disabled}
                    placeholder="TODOを入力"
                    value={todoText}
                    onChange={onChange}
                />
                {/* <button type="submit" disabled={disabled} onClick={onClick}> */}
                <button type="submit" disabled={disabled}>
                    追加
                </button>
            </form>
        </div>
    );
};
