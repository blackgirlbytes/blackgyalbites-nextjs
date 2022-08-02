import React from "react";

interface MenuButtonProps {
    /** The menu's type */
    menu_type: string;
    /** The menu's URL */
    url: string;
}

const MenuButton: React.FC<MenuButtonProps> = ({ menu_type, url }) => {
    return (
        <button className="s:w-[50%] 3xl:w-[50%] block w-[60%] p-[1%] justify-content align-content bg-caribbean-yellow border-solid rounded-button-border-radius border-button-orange border-2 text-xl uppercase m-button-margin">
            <a className="hover:text-medium-brown visited:text-medium-brown" href={url}>{menu_type} Menu</a>
        </button>
    )
}

export default MenuButton