import { ReactElement, useContext } from "react"

import ShopContext from "@utilities/shop_context"

export default function BlurScreen(): ReactElement {
    const { collapsedShop, collapsedInfo } = useContext(ShopContext)

    return (
        <div aria-label="blur-screen" className={`absolute inset-0 h-screen w-screen z-10 backdrop-blur-[2px] transition-opacity ease-in-out duration-700 ${collapsedShop && collapsedInfo ? "opacity-0 pointer-events-none" : "opacity-100"}`} />
    )
}
