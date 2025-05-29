import React from 'react'

const Button = ({name,handleClick,disabled}) => {
    return (
        <>
            <button className="button btn" onClick={handleClick} disabled={disabled}>
                 {name}
            </button>

        </>
    )
}

export default Button
