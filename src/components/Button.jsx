import React from 'react';


const Button = ({ buttonType = "primary", onClick, children}) => {

    const baseStyles = "rounded-2xl transition-all py-2 px-6 cursor-pointer";
    const typeStyles = {
        primary: "bg-[#007148] text-[#FFFFFF] hover:bg-[#008620]",
        secondary: "border-2 border-[#007148] w-25 px-10 text-[#007148]"
    }
    const combinedStyles = `${baseStyles} ${typeStyles[buttonType]}`

    return (
        <button onClick={onClick} className={combinedStyles}>
            {children}
        </button>
    )
}
export default Button