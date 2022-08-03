import React from "react"
import MenuButton from "./MenuButton"

const MenuButtons = () => {
    return (
        <section className="pt-12">
            <MenuButton url="/blackgyalbites-nextjs/menu-pdf-food.pdf" menu_type="Food" />
            <MenuButton url="/blackgyalbites-nextjs/menu-pdf-drinks.pdf" menu_type="Drinks" />
            <MenuButton url="/blackgyalbites-nextjs/menu-pdf-catering.pdf" menu_type="Catering" />
        </section>

    )
}

export default MenuButtons